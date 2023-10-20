import { createApp } from "vue";
import { useDark } from "@vueuse/core";
import { createI18n } from "vue-i18n";

import App from "@/App.vue";
import router from "@/router";
import * as i18n from "@/utils/i18n";

// Dark/light theme configuration
useDark({
  selector: "body",
  attribute: "theme",
  valueDark: "dark",
  valueLight: "light",
});

i18n
  .initialize()
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    const vueI18n = createI18n({
      locale: "en",
      fallbackLocale: "en",
      messages: i18n.messages,
    });

    // Launch application
    createApp(App).use(router).use(vueI18n).mount("#app");
  });
