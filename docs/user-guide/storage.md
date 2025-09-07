???+ info Note
    This page is automatically generated using [`brackets-storage-calls`](https://github.com/Drarig29/brackets-storage-calls).

To be compatible with every kind of storage, the manager is designed to use dependency injection, thanks to the [`CrudInterface`](/brackets-docs/reference/manager/interfaces/CrudInterface.html) implementation your are passing to its constructor.

The [`brackets-storage` repository](https://github.com/Drarig29/brackets-storage) provides implementations for some storages:

|            Package |                                                                                                                 |
| -----------------: | --------------------------------------------------------------------------------------------------------------- |
|   brackets-json-db | [![npm](https://img.shields.io/npm/v/brackets-json-db.svg)](https://www.npmjs.com/package/brackets-json-db)     |
| brackets-memory-db | [![npm](https://img.shields.io/npm/v/brackets-memory-db.svg)](https://www.npmjs.com/package/brackets-memory-db) |
| brackets-prisma-db | [![npm](https://img.shields.io/npm/v/brackets-prisma-db.svg)](https://www.npmjs.com/package/brackets-prisma-db) |

If there is no implementation for the storage you want to use, you will have to implement it yourself...

As it can be hard to do with something like a SQL database, this page shows every usage of the CRUD interface by the manager so you don't have to read all the manager code.

???+ tip Contributions
    Once you have your implementation up and running, consider opening a PR on [brackets-storage](https://github.com/Drarig29/brackets-storage)
    to share your work with the community! :smile:

--8<-- 'user-guide/calls.md'