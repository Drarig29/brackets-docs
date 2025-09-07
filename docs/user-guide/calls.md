## Dynamic table

### `select()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/8c2efdc6e5b4371002e5a647b974bad70d875f0c/src/manager.ts#L54">Source</a> :material-chevron-down:

```ts
select(table, filter: Partial<DataTypes[T]>): Promise<DataTypes[T][] | null>
```

## Stage

### `insert()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/8c2efdc6e5b4371002e5a647b974bad70d875f0c/src/base/stage/creator.ts#L714">Source</a> :material-chevron-down:

```ts
insert('stage', value: OmitId<Stage>): Promise<number>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/8c2efdc6e5b4371002e5a647b974bad70d875f0c/src/manager.ts#L104">Source</a> :material-chevron-down:

```ts
insert('stage', values: Stage[]): Promise<boolean>
```

### `select()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/8c2efdc6e5b4371002e5a647b974bad70d875f0c/src/manager.ts#L135">Source</a> :material-chevron-down:

```ts
select('stage'): Promise<Stage[] | null>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/8c2efdc6e5b4371002e5a647b974bad70d875f0c/src/get.ts#L141">Source</a> :material-chevron-down:

```ts
select('stage', id: Id): Promise<Stage | null>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/8c2efdc6e5b4371002e5a647b974bad70d875f0c/src/get.ts#L35">Source</a> :material-chevron-down:

```ts
select('stage', filter: {
    tournament_id: Id;
}): Promise<Stage[] | null>
```

### `update()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/8c2efdc6e5b4371002e5a647b974bad70d875f0c/src/base/stage/creator.ts#L709">Source</a> :material-chevron-down:

```ts
update('stage', id: Id, value: Stage): Promise<boolean>
```

### `delete()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/8c2efdc6e5b4371002e5a647b974bad70d875f0c/src/manager.ts#L102">Source</a> :material-chevron-down:

```ts
delete('stage'): Promise<boolean>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/8c2efdc6e5b4371002e5a647b974bad70d875f0c/src/delete.ts#L42">Source</a> :material-chevron-down:

```ts
delete('stage', filter: {
    id: Id;
}): Promise<boolean>
```

## Group

### `selectFirst()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/8c2efdc6e5b4371002e5a647b974bad70d875f0c/src/base/stage/creator.ts#L728">Source</a> :material-chevron-down:

```ts
selectFirst('group', filter: {
    stage_id: Id;
    number: number;
}): Promise<Group | null>
```

### `insert()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/8c2efdc6e5b4371002e5a647b974bad70d875f0c/src/base/stage/creator.ts#L735">Source</a> :material-chevron-down:

```ts
insert('group', value: OmitId<Group>): Promise<number>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/8c2efdc6e5b4371002e5a647b974bad70d875f0c/src/manager.ts#L109">Source</a> :material-chevron-down:

```ts
insert('group', values: Group[]): Promise<boolean>
```

### `select()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/8c2efdc6e5b4371002e5a647b974bad70d875f0c/src/manager.ts#L138">Source</a> :material-chevron-down:

```ts
select('group'): Promise<Group[] | null>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/8c2efdc6e5b4371002e5a647b974bad70d875f0c/src/base/updater.ts#L143">Source</a> :material-chevron-down:

```ts
select('group', id: Id): Promise<Group | null>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/8c2efdc6e5b4371002e5a647b974bad70d875f0c/src/get.ts#L364">Source</a> :material-chevron-down:

```ts
select('group', filter: {
    stage_id: Id;
}): Promise<Group[] | null>
```

### `delete()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/8c2efdc6e5b4371002e5a647b974bad70d875f0c/src/manager.ts#L107">Source</a> :material-chevron-down:

```ts
delete('group'): Promise<boolean>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/8c2efdc6e5b4371002e5a647b974bad70d875f0c/src/delete.ts#L39">Source</a> :material-chevron-down:

```ts
delete('group', filter: {
    stage_id: Id;
}): Promise<boolean>
```

## Round

### `selectLast()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/8c2efdc6e5b4371002e5a647b974bad70d875f0c/src/base/getter.ts#L508">Source</a> :material-chevron-down:

```ts
selectLast('round', filter: {
    group_id: Id;
}, assertUnique: false): Promise<Round | null>
```

### `selectFirst()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/8c2efdc6e5b4371002e5a647b974bad70d875f0c/src/base/stage/creator.ts#L749">Source</a> :material-chevron-down:

```ts
selectFirst('round', filter: {
    group_id: Id;
    number: number;
}): Promise<Round | null>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/8c2efdc6e5b4371002e5a647b974bad70d875f0c/src/get.ts#L260">Source</a> :material-chevron-down:

```ts
selectFirst('round', filter: {
    stage_id: Id;
    number: number;
}, assertUnique: false): Promise<Round | null>
```

### `insert()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/8c2efdc6e5b4371002e5a647b974bad70d875f0c/src/base/stage/creator.ts#L756">Source</a> :material-chevron-down:

```ts
insert('round', value: OmitId<Round>): Promise<number>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/8c2efdc6e5b4371002e5a647b974bad70d875f0c/src/manager.ts#L114">Source</a> :material-chevron-down:

```ts
insert('round', values: Round[]): Promise<boolean>
```

### `select()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/8c2efdc6e5b4371002e5a647b974bad70d875f0c/src/manager.ts#L141">Source</a> :material-chevron-down:

```ts
select('round'): Promise<Round[] | null>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/8c2efdc6e5b4371002e5a647b974bad70d875f0c/src/base/getter.ts#L70">Source</a> :material-chevron-down:

```ts
select('round', id: Id): Promise<Round | null>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/8c2efdc6e5b4371002e5a647b974bad70d875f0c/src/base/getter.ts#L50">Source</a> :material-chevron-down:

```ts
select('round', filter: {
    stage_id: Id;
}): Promise<Round[] | null>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/8c2efdc6e5b4371002e5a647b974bad70d875f0c/src/base/getter.ts#L73">Source</a> :material-chevron-down:

```ts
select('round', filter: {
    group_id: Id;
}): Promise<Round[] | null>
```

### `delete()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/8c2efdc6e5b4371002e5a647b974bad70d875f0c/src/manager.ts#L112">Source</a> :material-chevron-down:

```ts
delete('round'): Promise<boolean>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/8c2efdc6e5b4371002e5a647b974bad70d875f0c/src/delete.ts#L36">Source</a> :material-chevron-down:

```ts
delete('round', filter: {
    stage_id: Id;
}): Promise<boolean>
```

## Match

### `selectFirst()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/8c2efdc6e5b4371002e5a647b974bad70d875f0c/src/base/stage/creator.ts#L393">Source</a> :material-chevron-down:

```ts
selectFirst('match', filter: {
    round_id: Id;
    number: number;
}): Promise<Match | null>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/8c2efdc6e5b4371002e5a647b974bad70d875f0c/src/base/getter.ts#L418">Source</a> :material-chevron-down:

```ts
selectFirst('match', filter: {
    group_id: Id;
    number: number;
}): Promise<Match | null>
```

### `insert()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/8c2efdc6e5b4371002e5a647b974bad70d875f0c/src/base/stage/creator.ts#L769">Source</a> :material-chevron-down:

```ts
insert('match', value: OmitId<Match>): Promise<number>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/8c2efdc6e5b4371002e5a647b974bad70d875f0c/src/manager.ts#L119">Source</a> :material-chevron-down:

```ts
insert('match', values: Match[]): Promise<boolean>
```

### `select()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/8c2efdc6e5b4371002e5a647b974bad70d875f0c/src/manager.ts#L144">Source</a> :material-chevron-down:

```ts
select('match'): Promise<Match[] | null>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/8c2efdc6e5b4371002e5a647b974bad70d875f0c/src/base/updater.ts#L86">Source</a> :material-chevron-down:

```ts
select('match', id: Id): Promise<Match | null>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/8c2efdc6e5b4371002e5a647b974bad70d875f0c/src/base/getter.ts#L135">Source</a> :material-chevron-down:

```ts
select('match', filter: {
    round_id: Id;
}): Promise<Match[] | null>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/8c2efdc6e5b4371002e5a647b974bad70d875f0c/src/base/getter.ts#L480">Source</a> :material-chevron-down:

```ts
select('match', filter: {
    stage_id: Id;
}): Promise<Match[] | null>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/8c2efdc6e5b4371002e5a647b974bad70d875f0c/src/update.ts#L193">Source</a> :material-chevron-down:

```ts
select('match', filter: {
    group_id: Id;
}): Promise<Match[] | null>
```

### `update()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/8c2efdc6e5b4371002e5a647b974bad70d875f0c/src/base/updater.ts#L207">Source</a> :material-chevron-down:

```ts
update('match', id: Id, value: Match): Promise<boolean>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/8c2efdc6e5b4371002e5a647b974bad70d875f0c/src/update.ts#L233">Source</a> :material-chevron-down:

```ts
update('match', id: Id, value: {
    id: Id;
    stage_id: Id;
    group_id: Id;
    round_id: Id;
    number: number;
    child_count: number;
    status: Status;
    opponent1: ParticipantResult | null;
    opponent2: ParticipantResult | null;
}): Promise<boolean>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/8c2efdc6e5b4371002e5a647b974bad70d875f0c/src/update.ts#L276">Source</a> :material-chevron-down:

```ts
update('match', id: Id, value: {
    child_count: number;
    id: Id;
    stage_id: Id;
    group_id: Id;
    round_id: Id;
    number: number;
    status: Status;
    opponent1: ParticipantResult | null;
    opponent2: ParticipantResult | null;
}): Promise<boolean>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/8c2efdc6e5b4371002e5a647b974bad70d875f0c/src/update.ts#L173">Source</a> :material-chevron-down:

```ts
update('match', filter: {
    stage_id: Id;
}, value: {
    child_count: number;
}): Promise<boolean>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/8c2efdc6e5b4371002e5a647b974bad70d875f0c/src/update.ts#L190">Source</a> :material-chevron-down:

```ts
update('match', filter: {
    group_id: Id;
}, value: {
    child_count: number;
}): Promise<boolean>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/8c2efdc6e5b4371002e5a647b974bad70d875f0c/src/update.ts#L207">Source</a> :material-chevron-down:

```ts
update('match', filter: {
    round_id: Id;
}, value: {
    child_count: number;
}): Promise<boolean>
```

### `delete()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/8c2efdc6e5b4371002e5a647b974bad70d875f0c/src/manager.ts#L117">Source</a> :material-chevron-down:

```ts
delete('match'): Promise<boolean>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/8c2efdc6e5b4371002e5a647b974bad70d875f0c/src/delete.ts#L33">Source</a> :material-chevron-down:

```ts
delete('match', filter: {
    stage_id: Id;
}): Promise<boolean>
```

## Match game

### `selectFirst()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/8c2efdc6e5b4371002e5a647b974bad70d875f0c/src/base/stage/creator.ts#L787">Source</a> :material-chevron-down:

```ts
selectFirst('match_game', filter: {
    parent_id: Id;
    number: number;
}): Promise<MatchGame | null>
```

### `insert()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/8c2efdc6e5b4371002e5a647b974bad70d875f0c/src/update.ts#L249">Source</a> :material-chevron-down:

```ts
insert('match_game', value: {
    number: number;
    stage_id: Id;
    parent_id: Id;
    status: Status;
    opponent1: { 
       id: null;
    };
    opponent2: { 
       id: null;
    };
}): Promise<number>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/8c2efdc6e5b4371002e5a647b974bad70d875f0c/src/base/stage/creator.ts#L794">Source</a> :material-chevron-down:

```ts
insert('match_game', value: OmitId<MatchGame>): Promise<number>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/8c2efdc6e5b4371002e5a647b974bad70d875f0c/src/manager.ts#L124">Source</a> :material-chevron-down:

```ts
insert('match_game', values: MatchGame[]): Promise<boolean>
```

### `select()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/8c2efdc6e5b4371002e5a647b974bad70d875f0c/src/base/getter.ts#L606">Source</a> :material-chevron-down:

```ts
select('match_game', id: Id): Promise<MatchGame | null>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/8c2efdc6e5b4371002e5a647b974bad70d875f0c/src/get.ts#L61">Source</a> :material-chevron-down:

```ts
select('match_game', filter: {
    parent_id: Id;
}): Promise<MatchGame[] | null>
```

### `update()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/8c2efdc6e5b4371002e5a647b974bad70d875f0c/src/base/updater.ts#L195">Source</a> :material-chevron-down:

```ts
update('match_game', id: Id, value: MatchGame): Promise<boolean>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/8c2efdc6e5b4371002e5a647b974bad70d875f0c/src/base/updater.ts#L222">Source</a> :material-chevron-down:

```ts
update('match_game', filter: {
    parent_id: Id;
}, value: Partial<MatchGame>): Promise<boolean>
```

### `delete()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/8c2efdc6e5b4371002e5a647b974bad70d875f0c/src/manager.ts#L122">Source</a> :material-chevron-down:

```ts
delete('match_game'): Promise<boolean>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/8c2efdc6e5b4371002e5a647b974bad70d875f0c/src/update.ts#L265">Source</a> :material-chevron-down:

```ts
delete('match_game', filter: {
    parent_id: Id;
    number: number;
}): Promise<boolean>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/8c2efdc6e5b4371002e5a647b974bad70d875f0c/src/delete.ts#L30">Source</a> :material-chevron-down:

```ts
delete('match_game', filter: {
    stage_id: Id;
}): Promise<boolean>
```

## Participant

### `insert()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/8c2efdc6e5b4371002e5a647b974bad70d875f0c/src/base/stage/creator.ts#L820">Source</a> :material-chevron-down:

```ts
insert('participant', value: OmitId<Participant>): Promise<number>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/8c2efdc6e5b4371002e5a647b974bad70d875f0c/src/manager.ts#L99">Source</a> :material-chevron-down:

```ts
insert('participant', values: Participant[]): Promise<boolean>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/8c2efdc6e5b4371002e5a647b974bad70d875f0c/src/base/stage/creator.ts#L813">Source</a> :material-chevron-down:

```ts
insert('participant', values: OmitId<Participant>[]): Promise<boolean>
```

### `select()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/8c2efdc6e5b4371002e5a647b974bad70d875f0c/src/manager.ts#L132">Source</a> :material-chevron-down:

```ts
select('participant'): Promise<Participant[] | null>
```

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/8c2efdc6e5b4371002e5a647b974bad70d875f0c/src/get.ts#L16">Source</a> :material-chevron-down:

```ts
select('participant', filter: {
    tournament_id: Id;
}): Promise<Participant[] | null>
```

### `delete()`

<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/8c2efdc6e5b4371002e5a647b974bad70d875f0c/src/manager.ts#L97">Source</a> :material-chevron-down:

```ts
delete('participant'): Promise<boolean>
```