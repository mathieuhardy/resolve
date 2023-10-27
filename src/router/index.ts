// Thirdparties imports
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

// Local imports
import HomeView from "@/pages/HomeView.vue";
import CasesView from "@/pages/CasesView.vue";
import ComponentsView from "@/components/docs/ComponentsView.vue";

// List of routes
// TODO: to be moved to subfolders
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/cases",
    name: "Cases",
    component: CasesView,
  },
];

// List of development/debugging routes
if (!import.meta.env.PROD) {
  routes.push({
    path: "/components",
    name: "Components",
    component: ComponentsView,
  });
}

// Create and export router object
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
