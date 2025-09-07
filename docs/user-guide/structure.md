This page explains the structure of a tournament in more details. For the basis, read the [Glossary](glossary.md).

## Round-robin

In round-robin stages, each group is a pool, which contains rounds, which contain matches.

## Single elimination

In single elimination stages, there is at least one group (the "unique bracket"), which contains rounds, which contain matches.

The unique bracket yields a winner, and losers.

If the stage is configured to have a consolation final, it is also a group with a single round containing a single match, matching both semi-final losers.

## Double elimination

In double elimination stages, there are two groups: the upper bracket (a.k.a. "winner bracket") and the lower bracket (a.k.a. "loser bracket").

The upper bracket yields a winner, and losers.

The lower bracket yields a winner, which may play in the grand final against the winner of the upper bracket.

If the stage is configured to have a grand final, it is also a group with one or two rounds (depending on [`settings.grandFinal`](/brackets-docs/reference/model/interfaces/StageSettings.html#grandFinal)), each containing a single match, matching the winner of the upper bracket and the winner of the lower bracket.

If the WB winner wins, he's the winner of the stage. But if he loses, the final is reset and there is a very last match. It might be fairer since it gives the WB winner the right to lose once during the stage...

If the stage is configured to have a consolation final, any **existing final group** is reused (i.e. the grand final and consolation final will both be in the final group).
In this group, a round is created containing a single match, matching both **upper bracket** semi-final losers.

???+ note "Technical detail about the consolation final"
    To differentiate the grand final and consolation final matches which always are `number: 1`, the consolation final match is `number: 2` **although it's the only match in its round**.

## Opponent `position` property in matches

The `position` property in `opponent1` and `opponent2` in a match is used to display the opponent's origin in the UI.

It holds the match number of the match whose winner will fill the current participant slot in the match.

For example, the match `LB 1.1` (loser bracket, round 1, match 1) has the following values:
```json
{
    "opponent1": {
        "id": null, // TBD
        "position": 1
    },
    "opponent2": {
        "id": null, // TBD
        "position": 2
    }
}
```

Although we don't know the opponent IDs yet, we know their source in advance. So in the UI, we show:

| LB 1.1      | Opponents       |
| ----------- | --------------- |
| `opponent1` | Loser of WB 1.1 |
| `opponent2` | Loser of WB 1.2 |
