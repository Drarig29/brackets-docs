## Seed ordering

Seed ordering controls how the seeding is laid out across matches or groups. In the manager library, you choose methods via `settings.seedOrdering` when creating a stage, or you can update ordering later with `manager.update.ordering()` or `manager.update.roundOrdering()` (before matches start).

How many methods to provide:

- **Round-robin:** exactly 1 method and it must start with `groups.` (used to distribute participants in groups).
- **Single elimination:** exactly 1 method (no `groups.` prefix). It orders seeds in the first round.
- **Double elimination:** at least 1 method (no `groups.` prefix). The indexes in the list correspond to:
    - Index 0: ordering for upper bracket round 1.
    - Index 1: ordering for losers entering lower bracket round 1.
    - Index 2+: orderings for lower bracket minor rounds (one per minor round).

If some lower bracket methods are omitted in double elimination, sensible defaults are applied based on the stage size (see [Default lower bracket orderings](#default-lower-bracket-orderings-double-elimination) below).


## Supported methods

- `natural`: keep order as-is.
- `reverse`: reverse the order.
- `half_shift`: move the second half in front of the first half.
- `reverse_half_shift`: reverse each half and concatenate.
- `pair_flip`: swap every pair `[1,2, 3,4, …]` → `[2,1, 4,3, …]`.
- `inner_outer`: classic bracket layout: 1 vs N, 2 vs N-1, etc. Works for any power-of-two length.
- `groups.effort_balanced`: spread seeds across groups to balance strengths.
- `groups.seed_optimized`: "snake" distribution per run to minimize early group collisions.
- `groups.bracket_optimized`: optimized distribution in round-robin groups to avoid bracket-opponents in the same group.
    - It's a method that ensures that 2 participants playing in the same group will meet at the latest possible point in the bracket.
      They will eventually play each other again, probably in the grand finals since they're the best 2 players,
      but this method ensures that this meeting happens at the latest round possible.


## Examples

Round-robin (2 groups, balanced):

```ts
await manager.create.stage({
  tournamentId: 1,
  name: 'Groups',
  type: 'round_robin',
  seeding: ['A','B','C','D','E','F','G','H'],
  settings: {
    groupCount: 2,
    seedOrdering: ['groups.effort_balanced'],
  },
});
```

Single elimination (standard bracket):

```ts
await manager.create.stage({
  tournamentId: 1,
  name: 'Playoffs',
  type: 'single_elimination',
  seeding: ['A','B','C','D','E','F','G','H'],
  settings: {
    size: 8,
    seedOrdering: ['inner_outer'],
  },
});
```

Double elimination (explicit lower‑bracket methods):

```ts
await manager.create.stage({
  tournamentId: 1,
  name: 'DE',
  type: 'double_elimination',
  seeding: ['A','B','C','D','E','F','G','H'],
  settings: {
    size: 8,
    seedOrdering: ['inner_outer', 'natural', 'reverse'],
  },
});
```


## Default lower bracket orderings (double elimination)

If you don’t provide enough methods for the lower bracket, defaults are used based on `size`:

- 4: `['natural', 'reverse']`
- 8: `['natural', 'reverse', 'natural']`
- 16: `['natural', 'reverse_half_shift', 'reverse', 'natural']`
- 32: `['natural', 'reverse', 'half_shift', 'natural', 'natural']`
- 64: `['natural', 'reverse', 'half_shift', 'reverse', 'natural', 'natural']`
- 128: `['natural', 'reverse', 'half_shift', 'pair_flip', 'pair_flip', 'pair_flip', 'natural']`

Index 0 is used for the first lower bracket round (WB losers entering), then indices 1+ are used for minor rounds in order.


## Updating ordering after creation

You can update ordering before matches begin:

- Per stage with `manager.update.ordering()`: update all rounds at once (fails if any affected match has started or completed).
- Per round with `manager.update.roundOrdering()`: update a specific round.

For elimination stages, only rounds that support ordering can be updated (upper bracket round 1; lower bracket round 1 and minor rounds).