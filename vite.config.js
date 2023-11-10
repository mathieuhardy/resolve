import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";
import rawPlugin from "vite-raw-plugin";

export default defineConfig({
  plugins: [
    vue(),
    rawPlugin({
      fileRegex: /\.md$/,
    }),
  ],

  server: {
    port: 8080,
  },

  resolve: {
    alias: [
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src", import.meta.url)),
      },
      {
        find: "vue",
        replacement: "vue/dist/vue.esm-bundler.js",
      },
    ],
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@/assets/theme/index.scss";
        `,
      },
    },

    modules: {
      generateScopedName: "[hash:base64:5]",
      hashPrefix: " ",
    },
  },
});
