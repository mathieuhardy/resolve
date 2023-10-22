import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "en-US",
  title: "Resolve",
  description: "Documentation for developers",

  ignoreDeadLinks: "localhostLinks",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    i18nRouting: false,

    // TODO: logo: '/logo.svg',

    nav: [
      // { text: "Home", link: "/" },
      // { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Get started", link: "/get-started" },
          { text: "Documentations", link: "/documentations" },
          { text: "Components", link: "/components" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/mathieuhardy/resolve" },
    ],
  },
});
