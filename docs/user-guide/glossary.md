## Stage

A stage is an intermediate phase in a tournament. Supported stage types are round-robin, single elimination and double elimination.

## Group

A group is a logical structure used to group multiple rounds together.

- In round-robin stages, a group is a pool.
- In elimination stages, a group is a bracket.
    - A single elimination stage can have one or two groups:
        - The unique bracket.
        - **If enabled,** the Consolation Final.
    - A double elimination stage can have two or three groups:
        - Upper and lower brackets.
        - **If enabled,** the Grand Final.

## Round

A round is a logical structure used to group multiple matches together.

- In round-robin stages, a round can be viewed as a day or just as a list of matches that can be played at the same time.
- In elimination stages, a round is a round of a bracket, e.g. 8th finals, semi-finals, etc.

## Match

A match between **two** participants (more participants are not allowed). Participants can be teams or individuals.

Start and end dates or other metadata aren't supported. I believe this is not the purpose of the library, so you'll need to add it on your own.

## Match game

A match game is a child match for a match. You can have multiple match games in a match.

For example, a Best-Of-3 (Bo3) match has 3 match games.

## Double elimination

A double elimination stage is a stage with two brackets: a winner bracket and a loser bracket (sometimes called upper bracket and lower bracket).

When players lose in the upper bracket, they have a second chance: they are sent into the lower bracket and can eventually match against the winner of the upper bracket in the Grand Final if they win all their matches in the lower bracket.

## BYE

A BYE is a way to fill blanks in a tournament. You can use them to fill a seeding in order to reach a power of two.
The brackets libraries do not support seedings which do not follow a power of two.

If a participant does not come at the last minute, you can either replace it with a BYE if the tournament isn't started yet, or forfeit it if the tournament is running.

???+ hint "Pro tip"
    You can also have a look at [Toornament's documentation](https://help.toornament.com/starter/core-concepts-glossary), which is very good.
    
    The data structure used in the brackets libraries (defined in [brackets-model](https://github.com/Drarig29/brackets-model/blob/master/src/storage.ts)) is heavily inspired by Toornament's API.

## TBD

TBD means "To Be Determined". It's not a BYE, it's just a placeholder for a participant that hasn't been determined yet.

It's used when you don't have the participant list yet, or when you want to keep the possibility to add participants later.

Technically speaking, here is how it's represented in a match:
```json hl_lines="5 6 7 8"
// The match is not completed yet.
{
    "id": 1,
    "opponent1": null, // BYE
    "opponent2": {
        "id": null, // TBD
        "position": 2
    }
}

// The match is already completed.
{
    "id": 1,
    "opponent1": null, // BYE
    "opponent2": null, // BYE
}
```