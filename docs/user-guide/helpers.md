This page summarizes the helper utilities exported by the manager library and the convenient Get and Find APIs to retrieve information from the database.

## Get APIs

Use `manager.get` methods to retrieve data that is commonly needed by UIs or automation scripts.

- **[`manager.get.currentStage()`](/brackets-docs/reference/manager/classes/Get.html#currentStage)**: returns the first stage of the tournament that still has uncompleted matches, or `null` if all stages are complete.
- **[`manager.get.currentRound()`](/brackets-docs/reference/manager/classes/Get.html#currentRound)**: returns the first round of the stage that still has uncompleted matches, or `null` if the stage is complete.
- **[`manager.get.currentMatches()`](/brackets-docs/reference/manager/classes/Get.html#currentMatches)**: for single elimination, returns the matches that can currently be played in parallel (ready or running). For other stage types, this is not implemented yet.
- **[`manager.get.seeding()`](/brackets-docs/reference/manager/classes/Get.html#seeding)**: returns the current seeding for the stage with stable seed positions.
- **[`manager.get.stageData()`](/brackets-docs/reference/manager/classes/Get.html#stageData) / [`manager.get.tournamentData()`](/brackets-docs/reference/manager/classes/Get.html#tournamentData)**: return a normalized `Database` snapshot useful for rendering.
- **[`manager.get.matchGames()`](/brackets-docs/reference/manager/classes/Get.html#matchGames)**: fetches all child games for the given parent matches.
- **[`manager.get.finalStandings()`](/brackets-docs/reference/manager/classes/Get.html#finalStandings)**: computes the standings at the end of an elimination stage.

## Helper utilities (exported)

A non‑exhaustive list of helpers exposed for advanced flows:

- **Round/Match status and utilities**: `getMatchStatus`, `isMatchOngoing`, `isMatchCompleted`, `isMatchUpdateLocked`, `hasBye`, `getWinner`, `getLoser`, `getNextSide`, `getOtherSide`, `getNextSideLoserBracket`, etc.
- **Array helpers**: `splitBy`, `splitByParity`, `makePairs`, `setArraySize`, `uniqueBy`, `getNonNull`.
- **Round‑robin**: `makeRoundRobinDistribution`, `makeRoundRobinMatches`, `assertRoundRobin`.
- **Seeding**: `balanceByes`, `convertMatchesToSeeding`, `sortSeeding`, `mapParticipants*` utilities.
- **Lower‑bracket math**: `isMajorRound`, `isMinorRound`, `getUpperBracketRoundCount`, `getLowerBracketRoundCount`, `getRoundPairCount`, `findLoserMatchNumber`, etc.

## Finding the “current” entities

Common flow to get the current stage and round:

```ts
const currentStage = await manager.get.currentStage(tournamentId);
if (!currentStage) {
  // Tournament completed
}

const currentRound = await manager.get.currentRound(currentStage.id);
```

You can combine this with `helpers.isRoundCompleted(roundMatches)` to know if a round is completed.

## Getting all matches for the next round

To schedule upcoming games, fetch the next round by number and its matches:

```ts
// Given a current round, load the next round and its matches
const nextRound = await storage.selectFirst('round', {
  stage_id: currentRound.stage_id,
  number: currentRound.number + 1,
});

if (nextRound) {
  const nextMatches = await storage.select('match', { round_id: nextRound.id });
  // nextMatches contains every match to prepare for the next round
}
```

Notes:

- The final of single elimination and the grand final of double elimination are in dedicated groups; make sure you filter by the proper `group_id` if needed.
- For parallelization concerns (e.g., only ready matches), combine with `helpers.isMatchOngoing(match)` or `helpers.getMatchStatus(match)`.
