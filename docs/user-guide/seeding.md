## What is a seeding?

In tournaments and brackets, a seeding is the ordered list of participants that defines who starts where in the competition. The order matters: it drives initial pairings and, with an ordering method, how participants are distributed across rounds or groups.

- **BYEs**: Empty slots used to reach a valid bracket size. They advance opponents automatically when paired against someone.
  You can use BYEs to fill a seeding in order to reach a power of two. The manager library does not support seedings not following a power of two for elimination stages. For round-robin stages, any size ≥ 2 is supported.


## Seeding in the manager library

The manager library accepts a seeding in multiple forms when creating a stage. You can:

- Provide a full seeding list.
- Or provide only a `size` (number of participants) to create a stage with TBD slots.

Rules by stage type:

- **Round-robin**: Any size ≥ 2 is supported.
- **Single/double elimination**: Size must be a power of two (2, 4, 8, 16, ...). Use BYEs (`null`) to pad to the next power of two if needed.

Useful [stage settings](/brackets-docs/reference/model/interfaces/StageSettings.html) related to seeding when using `manager.create.stage()`:

- [`settings.seedOrdering`](/brackets-docs/reference/model/interfaces/StageSettings.html#seedOrdering): How seeds are laid out (per stage type). See the [ordering guide](ordering.md).
- [`settings.balanceByes`](/brackets-docs/reference/model/interfaces/StageSettings.html#balanceByes) (elimination): Avoids BYE vs. BYE matches when padding with BYEs.


## The Seeding types

### [`Seeding`](/brackets-docs/reference/model/types/Seeding.html)

<sub>`#!typescript (CustomParticipant | string | number | null)[]`</sub>

Each participant of the list can either be:

- A [`CustomParticipant`](/brackets-docs/reference/model/types/CustomParticipant.html) object (may include extra fields, see [Attaching extra fields](extra-fields.md).)
- A string, corresponding to its `name`
- A number, corresponding to its `id`
- A BYE (`null`)

If you include numbers, they are treated as IDs, and must already exist in the `participant` table for the corresponding `tournament_id`.

If you give names/objects, participants are automatically added to the `participant` table.

### [`IdSeeding`](/brackets-docs/reference/model/types/IdSeeding.html)

<sub>`#!typescript (Id | null)[]`</sub>

  - IDs or BYEs only. Participants must already exist in storage for the corresponding `tournament_id`.

### Difference between `Seeding` and `IdSeeding`:

- `Seeding` is flexible (names, objects, IDs, BYEs) and can automatically register participants.
- `IdSeeding` is strict (IDs, BYEs) and never registers participants.

Since `Seeding` assumes `string` values are names and `number` values are IDs, you **must use `IdSeeding` if you are working with string IDs e.g. [with a MongoDB database](https://github.com/Drarig29/brackets-manager.js/issues/113)**.


## Using seeding with `manager.create.stage()`

Below are minimal examples. Adjust `settings` depending on the stage type.

???+ hint "Notes"
    - For elimination stages, ensure `size` is a power of two, or provide a seeding padded with BYEs to reach one.
    - When mixing types in `Seeding`, duplicates are rejected, and the list is expanded with BYEs if shorter than `settings.size`.


### 1) Seeding by names (auto-registers participants)

```ts
await manager.create.stage({
  tournamentId: 1,
  name: 'Quarter Finals',
  type: 'single_elimination',
  seeding: ['Alice', 'Bob', 'Carol', 'Dave', 'Eve', 'Frank', null, null],
  settings: {
    size: 8,
    seedOrdering: ['inner_outer'],
    balanceByes: true,
  },
});
```

### 2) Seeding by objects (with extra fields)

```ts
await manager.create.stage({
  tournamentId: 1,
  name: 'Groups',
  type: 'round_robin',
  seeding: [
    { id: 10, name: 'Alpha', region: 'EU' },
    { name: 'Bravo', region: 'NA' },
    'Charlie',
    'Delta',
  ],
  settings: {
    groupCount: 2,
    seedOrdering: ['groups.effort_balanced'],
  },
});
```

### 3) Seeding by IDs (participants must already exist)

```ts
await manager.create.stage({
  tournamentId: 1,
  name: 'Playoffs',
  type: 'double_elimination',
  seedingIds: [1, 2, 3, 4, 5, 6, null, null],
  settings: {
    size: 8,
    seedOrdering: ['inner_outer', 'natural'],
    balanceByes: true,
    grandFinal: 'simple',
  },
});
```

### 4) Provide only a size (create TBD slots)

If you don't have the participant list yet, you can give only a size. This creates a bracket with TBD slots (`id: null`) that you can fill later.

```ts
await manager.create.stage({
  tournamentId: 1,
  name: 'Open Bracket',
  type: 'single_elimination',
  settings: {
    size: 16,
    seedOrdering: ['inner_outer'],
  },
});
```