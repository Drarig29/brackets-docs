This page explains how to update matches and match games with the manager library, and what the library does for you behind the scenes.

The library only lets you update matches one by one, because it is intended to be used on an event basis, when a tournament is running.

## Concepts recap

- **[`Match`](/brackets-docs/reference/model/interfaces/Match.html)**: the parent entity. It can optionally contain several child games when using Best‑of‑X.
- **[`MatchGame`](/brackets-docs/reference/model/interfaces/MatchGame.html)**: a child game belonging to a parent match. Their scores determine the parent match result.
- **[`Status`](/brackets-docs/reference/model/enums/Status.html)**: `Locked` (0) > `Waiting` (1) > `Ready` (2) > `Running` (3) > `Completed` (4) > `Archived` (5)

## Update a match

Use the updater to change partial fields of a match by id. The library validates input, infers results, and propagates effects.

```ts
// Only sets the scores without setting the results or status
await manager.update.match({
  id: 42,
  opponent1: { score: 3 },
  opponent2: { score: 1 },
});
```

In this other example, the result and status are set.

```ts
// The second opponent's result is inferred, as well as the status.
await manager.update.match({
  id: 42,
  opponent1: { score: 3, result: 'win' },
  opponent2: { score: 1 },
});
```

What happens:

- **Result inference**: sets win/loss (and draw in round‑robin) from scores or forfeits.
- **BYEs handling**: auto‑wins when facing a BYE, keeps BYE/TBD semantics.
- **Status recompute**: status is recomputed consistently from the provided fields.
- **Propagation**: winners/losers are sent to their next matches; next matches get their status updated accordingly.

Constraints:

- In elimination stages, draws are forbidden.
- For matches with status `Locked`, `Waiting`, `Archived`, or auto‑completed by BYEs: nothing is editable (updates are rejected)
- For matches with status `Running` or `Completed`: only the scores, results, forfeits, and status are editable. You cannot change `opponent*.id` or `opponent*.position` nor replace participants.

However, for more flexibility, if your match looks like this:

```json
{
  "id": 42,
  "opponent1": { "id": 0 },
  "opponent2": { "id": 1 }
}
```

It's possible to "query" by ID in the partial update:

```ts hl_lines="3 4 10 11"
await manager.update.match({
  id: 42,
  opponent1: { id: 1, score: 3 },
  opponent2: { id: 0, score: 1 },
});

// Result:
{
  "id": 42,
  "opponent1": { "id": 0, "score": 1 }, // The position in the match is **unchanged**
  "opponent2": { "id": 1, "score": 3 }
}
```

## Update a match game (Best‑of‑X)

Child games update the parent match automatically.

```ts
await manager.update.matchGame({
  id: 101,
  opponent1: { score: 1 },
  opponent2: { score: 0 },
});
```

What happens:

- Scores across child games are aggregated.
- When a side reaches the minimum to win `ceil((X+1)/2)` for a Best‑of‑`X` match, the parent match gets marked as completed.
- Remaining child games stay available after the parent match is completed, so organizers can still record them if they want.
- If child games lead to an impossible tie in elimination, an error is thrown.

## Cancel a match game

If a match game cannot be played, cancel it with `cancelMatchGame()` instead of setting `Status.GameCancelled` manually.

```ts
await manager.update.cancelMatchGame(matchGameId, { mode: 'spent_game' });
await manager.update.cancelMatchGame(matchGameId, { mode: 'double_forfeit' });
```

There are two cancellation modes:

- `spent_game`: the match game is cancelled and consumes one Best‑of‑X game without awarding it to either opponent.
- `double_forfeit`: the cancelled match game ends the parent match as a double forfeit.

Do not use `manager.update.match()` or `manager.update.matchGame()` to set `Status.GameCancelled` directly. Use `cancelMatchGame()` so the parent match is updated consistently.

## Adjust Best‑of‑X for existing matches

You can change the child game count on every level. The library inserts/deletes games and keeps numbering consistent.

```ts
// for a whole stage
await manager.update.matchChildCount('stage', stageId, 1);

// for a whole group
await manager.update.matchChildCount('group', groupId, 2);

// for a whole round
await manager.update.matchChildCount('round', roundId, 3);

// for a single match
await manager.update.matchChildCount('match', matchId, 4);
```

## Forfeits

You can mark a side as forfeited. The opponent is awarded the win.

```ts
await manager.update.match({
  id: 42,
  opponent1: { forfeit: true },
});
```

A forfeit on both sides is possible. In elimination stages, this results in a disqualification of both opponents. See [double forfeit](#double-forfeit) in the glossary for more information.

```ts
await manager.update.match({
  id: 42,
  opponent1: { forfeit: true },
  opponent2: { forfeit: true },
});
```

## Tips

- Update matches before their dependents start to avoid cascading constraints.
- Prefer updating child games when using Best‑of‑X; let the library compute the parent outcome.
- Use [Extra fields](extra-fields.md) to store user-specific metadata; they are passed through on updates.
