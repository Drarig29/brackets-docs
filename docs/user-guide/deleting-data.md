## About participant deletion

The manager **never attempts to delete participants**.
Participants that were created previously will remain in the database as **leftovers** (a.k.a. ["tombstones"](https://en.wikipedia.org/wiki/Tombstone_(programming))).  

These participants can be reused in the same bracket or in another stage of the same tournament.  

This approach avoids accidental data loss and makes it easier to manage participants across multiple stages.

## Deleting a stage

Use [`manager.delete.stage()`](/brackets-docs/reference/manager/classes/Delete.html#stage) to delete the given stage and all its components:

- Groups
- Rounds
- Matches
- Match games

???+ warning
    This **does not** delete the related participants.

## Deleting all stages of a tournament

Use [`manager.delete.tournament()`](/brackets-docs/reference/manager/classes/Delete.html#tournament) to delete all the stages of the given tournament, and all their components as listed above.

???+ warning
    This **does not** delete the related participants, **nor the tournament** itself.

    You are responsible for managing the tournaments yourself because as said in the [FAQ](../faq.md), the manager doesn't manipulate the tournaments.