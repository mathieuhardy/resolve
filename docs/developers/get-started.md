---
outline: deep
---

# Filesystem

Here's the filesystem organisation of the project:

- `docs/`: static documentation files.
    - `developers`: Vuepress files used to generate the current documentation.
- `public/`: static resources used in project (images, ...). TODO: to be removed?
- `scripts/`: collection of scripts used to accomplish various tasks during development.
- `src/`: sources of the application.
    - `assets/`: static resources used in the application (images, ...).
    - `components/`: VueJS [components](/components).
        - `docs/`: files used to generate the [components](/components#vuejs-components) documentation.
    - `enums/`: Typescript enumerations used in the application.
    - `mocks/`: JSON resources used as replacement of backend during development.
    - `pages/`: web pages of the application composed from components.
    - `theme/`: style resources (SCSS, CSS, ...).
    - `utils/`: utility libraries used in the application.
        - `i18n/`: internationalization library.
- `...`: configurations files for Typescript, Vue, Docker and else.

# Setup

Setup development environment by simply calling the command:

```shell
yarn install
```

This will install all needed packages and gets you ready to run the application.

# Running application

Two possibilities here:

```shell
# Run application in debug mode
yarn dev

# Run application using mock data instead of calling a backend
yarn mock
```

The application will be served to [http://localhost:8080](http://localhost:8080).

# Build application

You can build a deployable version of the application by calling:

```shell
yarn build
```

The output is placed in `dist/` directory and is ready to be deployed the way you want.
