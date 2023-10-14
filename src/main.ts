// Thirdparties imports
import { createApp } from "vue";
import { useDark } from "@vueuse/core";
import { createI18n } from "vue-i18n";

// Own imports
import "./theme/index.css";
import App from "./App.vue";
import router from "./router";
import {
  initialize as initializeI18n,
  messages as messagesI18n,
} from "./utils/i18n";

// Dark/light theme configuration
useDark({
  selector: "body",
  attribute: "theme",
  valueDark: "dark",
  valueLight: "light",
});

// Internationalization
initializeI18n()
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    const i18n = createI18n({
      locale: "en",
      fallbackLocale: "en",
      messages: messagesI18n,
    });

    // Launch application
    createApp(App).use(router).use(i18n).mount("#app");
  });
