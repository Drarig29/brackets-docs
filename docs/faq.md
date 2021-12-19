# FAQ

## Why do I need a `tournamentId`?

Although the manager doesn't manipulate the tournaments (no CRUD operation on a "tournament" table), you'll need to give a `tournamentId` to create a stage because you can have multiple stages per tournament.

For instance, you could have:

- A round-robin stage (32 participants)
- A high-tier double elimination stage (16 best participants)
- A low-tier double elimination stage (the rest of the participants)

And thanks to that, the participants in the database can be linked to a specific tournament.

If you don't handle multiple tournaments or if you have a single stage at a time, just choose any number to pass to the manager e.g. `0` or `1`.