???+ info Note
    This page is automatically generated using [`brackets-storage-calls`](https://github.com/Drarig29/brackets-storage-calls).

To be compatible with every kind of storage, the manager is designed to use dependency injection, thanks to the [CrudInterface](/brackets-docs/reference/manager/interfaces/CrudInterface.html) implementation your are passing to its constructor.

**Don't forget** to check [brackets-storage](https://github.com/Drarig29/brackets-storage) to find out if an implementation already exists for the storage you'd like to work with.

If it's not the case, you will have to implement it yourself...

And as it can be hard to do with something like a SQL database, so you don't have to read all the manager code, this page shows every usage of the CRUD interface by the manager.

???+ tip Contributions
    Once you have your implementation up and running, feel free to make a PR on [brackets-storage](https://github.com/Drarig29/brackets-storage)
    to share your work with the community! :smile:

--8<-- 'user-guide/calls.md'