# Developers documentation

The current documentation can be served and reloaded in real-time by calling:

```shell
yarn docs:dev
```

The documentation will be available at [http://localhost:8081](http://localhost:8081).
You can now modify the Markdown files in `docs/developers/` and view will be automatically updated.

If you need to build a static version of the documentation you can call:

```shell
yarn docs:dev:build
```

The output can be found in `docs/developers/.vitepress/dist/`.
This is the files that will be used for the deployment documentation.

> <Badge type="warning" text="todo" /> explain deployment

# VueJS components

It's possible to get an overview of the Vue components and the code used to implement them by
running the application and visiting the route [http://localhost:8080/tutorials](http://localhost:8080/tutorials).

> <Badge type="tip" text="note" /> this route is available for all non-production builds.

For more information about components let's jump to [dedicated section](/components).

# User documentation

> <Badge type="warning" text="todo" /> to be done