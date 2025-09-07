You can attach arbitrary metadata ("extra fields") to participants and to matches/match games with the manager library.

## Participants (via Seeding)

When creating a stage, use [`Seeding`](/brackets-docs/reference/model/types/Seeding.html) with [`CustomParticipant`](/brackets-docs/reference/model/types/CustomParticipant.html) objects. Any additional keys you put on those objects are forwarded to storage alongside the required fields.

Required participant fields are `id` and `name` (`tournament_id` can be filled automatically).

Extra fields are opaque to the manager; they are stored and returned by storage implementations that support arbitrary columns (e.g., JSON or memory). SQL/Prisma backends with fixed schemas may ignore unsupported fields.

**Example:**

```ts
await manager.create.stage({
  tournamentId: 1,
  name: 'Groups',
  type: 'round_robin',
  seeding: [
    { name: 'Alpha', region: 'EU', seed: 1, logoUrl: 'https://…' },
    { name: 'Bravo', region: 'NA', seed: 2 },
    { name: 'Charlie', sponsor: 'Acme' },
    'Delta', // also fine
  ],
  settings: { groupCount: 2, seedOrdering: ['groups.effort_balanced'] },
});
```


## Matches and match games (via updates)

You can also set extra fields on matches and match games using the update API. The manager merges your fields into stored records while protecting core fields.

Reserved fields on matches/games (not overwritten by extra fields):

- `id`, `number`, `stage_id`, `group_id`, `round_id`, `status`, `opponent1`, `opponent2`, `child_count`, `parent_id`
- Inside `opponent1`/`opponent2`, the reserved keys are: `id`, `score`, `position`, `forfeit`, `result`

Extra fields are merged into existing records; later updates can overwrite your custom values.

The core logic (scores/results/status/propagation) is unaffected by extra fields.

**Example:**

```ts
// Attach metadata to a match
await manager.update.match({
  id: 123,
  streamUrl: 'https://twitch.tv/…',
  venue: 'Main Stage',
});

// Attach metadata to a match game
await manager.update.matchGame({
  parent_id: 123,
  number: 2,
  highlightUrl: 'https://…',
});

// Update scores and set extra fields in one call
await manager.update.match({
  id: 124,
  opponent1: { score: 2 },
  opponent2: { score: 1 },
  referee: 'Jane Doe',
  table: 7,
});
```

## Retrieval

When you query matches, match games, or participants from storage, any stored extra fields are included in the returned objects.

This is subject to your storage backend’s schema and storage implementation.
