const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  runtimeCompiler: true,
  transpileDependencies: true,

  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/theme/index.scss";`,
      },
    },
  },
});
