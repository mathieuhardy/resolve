// Thirdparties imports
import { createApp } from "vue";
import { useDark } from "@vueuse/core";

// Own imports
import App from "./App.vue";
import router from "./router";
import "./theme/index.css";

// Dark/light theme configuration
useDark({
  selector: "body",
  attribute: "theme",
  valueDark: "dark",
  valueLight: "light",
});

// Launch application
createApp(App).use(router).mount("#app");
