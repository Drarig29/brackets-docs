Let's set up the most common use-case.

The manager creates the needed data to store **the structure of the tournament**, **all the matches** and their **results**.

Then, it is used to **update the results** during the progress of the tournament.

The viewer can **display the state** of the tournament at any point of its lifetime.

*[manager]: Provided by brackets-manager.js
*[viewer]: Provided by brackets-viewer.js

## Choosing the storage

First, you need to choose what type of storage you will continue with.

The most common choices are:

- A **JSON database**, stored in a file
- An **in-memory database**, stored in a simple variable

To use a storage, you need to use a [`CrudInterface`](/brackets-docs/reference/manager/interfaces/CrudInterface.html) implementation.

You will find in [the `brackets-storage` repository](https://github.com/Drarig29/brackets-storage) a list of NPM packages **providing such implementations**.

If you can't find an implementation for the storage you want to use, you will have to implement it yourself. See [Storage](./user-guide/storage.md) for more information.

## Using the manager

First, create an instance of the storage implementation you chose before:

```js
const { JsonDatabase } = require('brackets-json-db');
const storage = new JsonDatabase();
```

Then, create a manager by passing the storage implementation to the constructor:

```js
const { BracketsManager } = require('brackets-manager');
const manager = new BracketsManager(storage);
```

Now, you can start creating tournament stages with [`manager.create.stage()`](/brackets-docs/reference/manager/interfaces/CallableCreate.html#stage)!

```js
await manager.create.stage({
    name: 'Example stage',
    tournamentId: 0, // (1)
    type: 'single_elimination',
    seeding: [
        'Team 1',
        'Team 2',
        'Team 3',
        'Team 4',
        'Team 5',
        'Team 6',
        'Team 7',
        'Team 8',
    ],
});
```

1.  Why do you need `tournamentId`? See [the answer](/brackets-docs/faq/#why-do-i-need-a-tournamentid) in the FAQ.

For more information about the vocabulary (particularly the word "stage"), see the [Glossary](user-guide/glossary.md).

For an explanation about how the seeding works, see [Seeding](user-guide/seeding.md).

For other questions, see [FAQ](faq.md).

## Using the viewer

The easiest way to use the viewer is to import it via the CDN links.

Drop this where it's the most suitable in your project:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/brackets-viewer@latest/dist/brackets-viewer.min.css" />
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/brackets-viewer@latest/dist/brackets-viewer.min.js"></script>
```

Now you should have access to `window.bracketsViewer`.

After this, you will need data. Here, either you make an API yourself or you can use [`json-server`](https://www.npmjs.com/package/json-server) to create a quick API directly from the JSON database (if you used `brackets-json-db`).

???+ Note
    If you choose to make an API yourself, you can use [`manager.get.tournamentData()`](/brackets-docs/reference/manager/classes/Get.html#tournamentData) and [`manager.get.stageData()`](/brackets-docs/reference/manager/classes/Get.html#stageData) to retrieve the needed data for the viewer.

Once you have something to get data from – let's assume the result is in a `data` variable for the example – you'll be able to render the bracket with [`window.bracketsViewer.render()`](/brackets-docs/reference/viewer/classes/BracketsViewer.html#render):

```js
window.bracketsViewer.render({
    stages: data.stage,
    matches: data.match,
    matchGames: data.match_game,
    participants: data.participant,
})
```

Which would render something like this:

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/brackets-viewer@latest/dist/brackets-viewer.min.css" />
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/brackets-viewer@latest/dist/brackets-viewer.min.js"></script>

<div class="brackets-viewer"></div>

<script>
    (async () => {
        await window.bracketsManager.create({
            name: 'Example stage',
            tournamentId: 0,
            type: 'single_elimination',
            seeding: [
                'Team 1',
                'Team 2',
                'Team 3',
                'Team 4',
                'Team 5',
                'Team 6',
                'Team 7',
                'Team 8',
            ],
        });

        const data = await window.bracketsManager.get.stageData(0);
        
        window.bracketsViewer.render({
            stages: data.stage,
            matches: data.match,
            matchGames: data.match_game,
            participants: data.participant,
        });
    })();
</script>

???+ hint "Fun fact"
    Here, both the manager and the viewer are running client-side! :sunglasses: