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
    - `enums/`: Typescript enumerations used in the application.
    - `mocks/`: JSON resources used as replacement of backend during development.
    - `pages/`: web pages of the application composed from components.
    - `theme/`: style resources (SCSS, CSS, ...).
    - `tutorial/`: files used to generate the [components](/components#vuejs-components) documentation.
    - `utils/`: utility libraries used in the application.
        - `i18n/`: internationalization library.
- `...`: configurations files for Typescript, Vue, Docker and else.