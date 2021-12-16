## Dynamic table

### `select()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/ed4f9df35fa5c73fe80a0fb25af20dab9fc4c662/src/manager.ts#L33">Source</a> :material-chevron-down:

```ts
select(table, filter: Partial<DataTypes[T]>): Promise<DataTypes[T][] | null>
```

## Stage

### `insert()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/ed4f9df35fa5c73fe80a0fb25af20dab9fc4c662/src/create.ts#L658">Source</a> :material-chevron-down:

```ts
insert('stage', value: OmitId<Stage>): Promise<number>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/ed4f9df35fa5c73fe80a0fb25af20dab9fc4c662/src/manager.ts#L76">Source</a> :material-chevron-down:

```ts
insert('stage', values: Stage[]): Promise<boolean>
```

### `select()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/ed4f9df35fa5c73fe80a0fb25af20dab9fc4c662/src/manager.ts#L107">Source</a> :material-chevron-down:

```ts
select('stage'): Promise<Stage[] | null>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/ed4f9df35fa5c73fe80a0fb25af20dab9fc4c662/src/get.ts#L73">Source</a> :material-chevron-down:

```ts
select('stage', id: number): Promise<Stage | null>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/ed4f9df35fa5c73fe80a0fb25af20dab9fc4c662/src/get.ts#L35">Source</a> :material-chevron-down:

```ts
select('stage', filter: {
    tournament_id: number;
}): Promise<Stage[] | null>
```

### `update()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/ed4f9df35fa5c73fe80a0fb25af20dab9fc4c662/src/create.ts#L842">Source</a> :material-chevron-down:

```ts
update('stage', id: number, value: Stage): Promise<boolean>
```

### `delete()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/ed4f9df35fa5c73fe80a0fb25af20dab9fc4c662/src/manager.ts#L74">Source</a> :material-chevron-down:

```ts
delete('stage'): Promise<boolean>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/ed4f9df35fa5c73fe80a0fb25af20dab9fc4c662/src/delete.ts#L36">Source</a> :material-chevron-down:

```ts
delete('stage', filter: {
    id: number;
}): Promise<boolean>
```

## Group

### `insert()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/ed4f9df35fa5c73fe80a0fb25af20dab9fc4c662/src/create.ts#L679">Source</a> :material-chevron-down:

```ts
insert('group', value: OmitId<Group>): Promise<number>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/ed4f9df35fa5c73fe80a0fb25af20dab9fc4c662/src/manager.ts#L81">Source</a> :material-chevron-down:

```ts
insert('group', values: Group[]): Promise<boolean>
```

### `select()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/ed4f9df35fa5c73fe80a0fb25af20dab9fc4c662/src/manager.ts#L110">Source</a> :material-chevron-down:

```ts
select('group'): Promise<Group[] | null>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/ed4f9df35fa5c73fe80a0fb25af20dab9fc4c662/src/updater.ts#L105">Source</a> :material-chevron-down:

```ts
select('group', id: number): Promise<Group | null>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/ed4f9df35fa5c73fe80a0fb25af20dab9fc4c662/src/get.ts#L238">Source</a> :material-chevron-down:

```ts
select('group', filter: {
    stage_id: number;
}): Promise<Group[] | null>
```

### `delete()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/ed4f9df35fa5c73fe80a0fb25af20dab9fc4c662/src/manager.ts#L79">Source</a> :material-chevron-down:

```ts
delete('group'): Promise<boolean>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/ed4f9df35fa5c73fe80a0fb25af20dab9fc4c662/src/delete.ts#L33">Source</a> :material-chevron-down:

```ts
delete('group', filter: {
    stage_id: number;
}): Promise<boolean>
```

## Round

### `insert()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/ed4f9df35fa5c73fe80a0fb25af20dab9fc4c662/src/create.ts#L700">Source</a> :material-chevron-down:

```ts
insert('round', value: OmitId<Round>): Promise<number>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/ed4f9df35fa5c73fe80a0fb25af20dab9fc4c662/src/manager.ts#L86">Source</a> :material-chevron-down:

```ts
insert('round', values: Round[]): Promise<boolean>
```

### `select()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/ed4f9df35fa5c73fe80a0fb25af20dab9fc4c662/src/manager.ts#L113">Source</a> :material-chevron-down:

```ts
select('round'): Promise<Round[] | null>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/ed4f9df35fa5c73fe80a0fb25af20dab9fc4c662/src/getter.ts#L70">Source</a> :material-chevron-down:

```ts
select('round', id: number): Promise<Round | null>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/ed4f9df35fa5c73fe80a0fb25af20dab9fc4c662/src/getter.ts#L50">Source</a> :material-chevron-down:

```ts
select('round', filter: {
    stage_id: number;
}): Promise<Round[] | null>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/ed4f9df35fa5c73fe80a0fb25af20dab9fc4c662/src/getter.ts#L73">Source</a> :material-chevron-down:

```ts
select('round', filter: {
    group_id: number;
}): Promise<Round[] | null>
```

### `delete()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/ed4f9df35fa5c73fe80a0fb25af20dab9fc4c662/src/manager.ts#L84">Source</a> :material-chevron-down:

```ts
delete('round'): Promise<boolean>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/ed4f9df35fa5c73fe80a0fb25af20dab9fc4c662/src/delete.ts#L30">Source</a> :material-chevron-down:

```ts
delete('round', filter: {
    stage_id: number;
}): Promise<boolean>
```

## Match

### `insert()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/ed4f9df35fa5c73fe80a0fb25af20dab9fc4c662/src/create.ts#L713">Source</a> :material-chevron-down:

```ts
insert('match', value: OmitId<Match>): Promise<number>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/ed4f9df35fa5c73fe80a0fb25af20dab9fc4c662/src/manager.ts#L91">Source</a> :material-chevron-down:

```ts
insert('match', values: Match[]): Promise<boolean>
```

### `select()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/ed4f9df35fa5c73fe80a0fb25af20dab9fc4c662/src/manager.ts#L116">Source</a> :material-chevron-down:

```ts
select('match'): Promise<Match[] | null>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/ed4f9df35fa5c73fe80a0fb25af20dab9fc4c662/src/updater.ts#L53">Source</a> :material-chevron-down:

```ts
select('match', id: number): Promise<Match | null>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/ed4f9df35fa5c73fe80a0fb25af20dab9fc4c662/src/getter.ts#L377">Source</a> :material-chevron-down:

```ts
select('match', filter: {
    stage_id: number;
}): Promise<Match[] | null>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/ed4f9df35fa5c73fe80a0fb25af20dab9fc4c662/src/getter.ts#L380">Source</a> :material-chevron-down:

```ts
select('match', filter: {
    round_id: number;
}): Promise<Match[] | null>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/ed4f9df35fa5c73fe80a0fb25af20dab9fc4c662/src/update.ts#L178">Source</a> :material-chevron-down:

```ts
select('match', filter: {
    group_id: number;
}): Promise<Match[] | null>
```

### `update()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/ed4f9df35fa5c73fe80a0fb25af20dab9fc4c662/src/updater.ts#L144">Source</a> :material-chevron-down:

```ts
update('match', id: number, value: Match): Promise<boolean>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/ed4f9df35fa5c73fe80a0fb25af20dab9fc4c662/src/update.ts#L218">Source</a> :material-chevron-down:

```ts
update('match', id: number, value: {
    id: number;
    stage_id: number;
    group_id: number;
    round_id: number;
    number: number;
    child_count: number;
    status: Status;
    opponent1: ParticipantResult | null;
    opponent2: ParticipantResult | null;
}): Promise<boolean>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/ed4f9df35fa5c73fe80a0fb25af20dab9fc4c662/src/update.ts#L261">Source</a> :material-chevron-down:

```ts
update('match', id: number, value: {
    child_count: number;
    id: number;
    stage_id: number;
    group_id: number;
    round_id: number;
    number: number;
    status: Status;
    opponent1: ParticipantResult | null;
    opponent2: ParticipantResult | null;
}): Promise<boolean>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/ed4f9df35fa5c73fe80a0fb25af20dab9fc4c662/src/update.ts#L158">Source</a> :material-chevron-down:

```ts
update('match', filter: {
    stage_id: number;
}, value: {
    child_count: number;
}): Promise<boolean>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/ed4f9df35fa5c73fe80a0fb25af20dab9fc4c662/src/update.ts#L175">Source</a> :material-chevron-down:

```ts
update('match', filter: {
    group_id: number;
}, value: {
    child_count: number;
}): Promise<boolean>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/ed4f9df35fa5c73fe80a0fb25af20dab9fc4c662/src/update.ts#L192">Source</a> :material-chevron-down:

```ts
update('match', filter: {
    round_id: number;
}, value: {
    child_count: number;
}): Promise<boolean>
```

### `delete()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/ed4f9df35fa5c73fe80a0fb25af20dab9fc4c662/src/manager.ts#L89">Source</a> :material-chevron-down:

```ts
delete('match'): Promise<boolean>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/ed4f9df35fa5c73fe80a0fb25af20dab9fc4c662/src/delete.ts#L27">Source</a> :material-chevron-down:

```ts
delete('match', filter: {
    stage_id: number;
}): Promise<boolean>
```

## Match game

### `insert()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/ed4f9df35fa5c73fe80a0fb25af20dab9fc4c662/src/update.ts#L234">Source</a> :material-chevron-down:

```ts
insert('match_game', value: {
    number: number;
    stage_id: number;
    parent_id: number;
    status: Status;
    opponent1: { 
       id: null;
    };
    opponent2: { 
       id: null;
    };
}): Promise<number>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/ed4f9df35fa5c73fe80a0fb25af20dab9fc4c662/src/create.ts#L738">Source</a> :material-chevron-down:

```ts
insert('match_game', value: OmitId<MatchGame>): Promise<number>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/ed4f9df35fa5c73fe80a0fb25af20dab9fc4c662/src/manager.ts#L96">Source</a> :material-chevron-down:

```ts
insert('match_game', values: MatchGame[]): Promise<boolean>
```

### `select()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/ed4f9df35fa5c73fe80a0fb25af20dab9fc4c662/src/getter.ts#L499">Source</a> :material-chevron-down:

```ts
select('match_game', id: number): Promise<MatchGame | null>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/ed4f9df35fa5c73fe80a0fb25af20dab9fc4c662/src/get.ts#L61">Source</a> :material-chevron-down:

```ts
select('match_game', filter: {
    parent_id: number;
}): Promise<MatchGame[] | null>
```

### `update()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/ed4f9df35fa5c73fe80a0fb25af20dab9fc4c662/src/update.ts#L41">Source</a> :material-chevron-down:

```ts
update('match_game', id: number, value: MatchGame): Promise<boolean>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/ed4f9df35fa5c73fe80a0fb25af20dab9fc4c662/src/updater.ts#L159">Source</a> :material-chevron-down:

```ts
update('match_game', filter: {
    parent_id: number;
}, value: Partial<MatchGame>): Promise<boolean>
```

### `delete()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/ed4f9df35fa5c73fe80a0fb25af20dab9fc4c662/src/manager.ts#L94">Source</a> :material-chevron-down:

```ts
delete('match_game'): Promise<boolean>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/ed4f9df35fa5c73fe80a0fb25af20dab9fc4c662/src/update.ts#L250">Source</a> :material-chevron-down:

```ts
delete('match_game', filter: {
    parent_id: number;
    number: number;
}): Promise<boolean>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/ed4f9df35fa5c73fe80a0fb25af20dab9fc4c662/src/delete.ts#L24">Source</a> :material-chevron-down:

```ts
delete('match_game', filter: {
    stage_id: number;
}): Promise<boolean>
```

## Participant

### `insert()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/ed4f9df35fa5c73fe80a0fb25af20dab9fc4c662/src/create.ts#L764">Source</a> :material-chevron-down:

```ts
insert('participant', value: OmitId<Participant>): Promise<number>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/ed4f9df35fa5c73fe80a0fb25af20dab9fc4c662/src/manager.ts#L71">Source</a> :material-chevron-down:

```ts
insert('participant', values: Participant[]): Promise<boolean>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/ed4f9df35fa5c73fe80a0fb25af20dab9fc4c662/src/create.ts#L757">Source</a> :material-chevron-down:

```ts
insert('participant', values: OmitId<Participant>[]): Promise<boolean>
```

### `select()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/ed4f9df35fa5c73fe80a0fb25af20dab9fc4c662/src/manager.ts#L104">Source</a> :material-chevron-down:

```ts
select('participant'): Promise<Participant[] | null>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/ed4f9df35fa5c73fe80a0fb25af20dab9fc4c662/src/get.ts#L16">Source</a> :material-chevron-down:

```ts
select('participant', filter: {
    tournament_id: number;
}): Promise<Participant[] | null>
```

### `delete()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/ed4f9df35fa5c73fe80a0fb25af20dab9fc4c662/src/manager.ts#L69">Source</a> :material-chevron-down:

```ts
delete('participant'): Promise<boolean>
```