# FAQ

This page contains frequently asked questions and answers.

## Why do I need a `tournamentId`?

Although the manager doesn't manipulate the tournaments (no CRUD operation on a "tournament" table), you'll need to give a `tournamentId` to create a stage because you can have multiple stages per tournament.

For instance, you could have:

- A round-robin stage (32 participants)
- A high-tier double elimination stage (16 best participants)
- A low-tier double elimination stage (the rest of the participants)

And thanks to that, the participants in the database can be linked to a specific tournament.

If you don't handle multiple tournaments or if you have a single stage at a time, just choose any number to pass to the manager e.g. `0` or `1`.

## How to handle two-stage tournaments? (e.g. round-robin followed by elimination)

Related issue: [brackets-manager.js#206](https://github.com/Drarig29/brackets-manager.js/issues/206)

> **Q:** Should I create the two stages at the same time or should I wait until the end of the round robin stage to create the second stage?

**A:** As you prefer. If you already know the size of your second stage, you can create it at the same time as the first stage and specify a [`size`](/brackets-docs/reference/model/interfaces/StageSettings.html#size) when calling [`manager.create.stage()`](/brackets-docs/reference/manager/interfaces/CallableCreate.html#stage).

> **Q:** How do I tell the round-robin stage that the first N participants of each group should be qualified?

**A:** It's not possible to configure this on the round-robin stage because it requires a `rankingFormula` function, which can't be serialized in stage settings.

But you can pass a `rankingFormula` and `maxQualifiedParticipantsPerGroup` to [`manager.get.finalStandings()`](/brackets-docs/reference/manager/classes/Get.html#finalStandings.finalStandings-2).

> **Q:** How do I create the elimination stage and tell it to take the first N participants of each group as seeding?

**A:** This is not supported by the manager, so you have to implement it yourself.

You could implement it in the following way:

- Every time you update a match, call [`manager.get.currentRound()`](/brackets-docs/reference/manager/classes/Get.html#currentRound). If it returns `null`, then the round-robin stage is complete.
- Call [`manager.get.finalStandings()`](/brackets-docs/reference/manager/classes/Get.html#finalStandings) to get the qualified participants of the round-robin stage.
- If the elimination stage is already created, call [`manager.update.seeding()`](/brackets-docs/reference/manager/classes/Update.html#seeding) to update the seeding with the qualified participants.
    - If it's not created yet, call [`manager.create.stage()`](/brackets-docs/reference/manager/interfaces/CallableCreate.html#stage) with the qualified participants as seeding.
