// Thirdparties imports
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

// Local imports
import HomeView from "@/pages/HomeView.vue";
import CasesView from "@/pages/CasesView.vue";
import TutorialView from "@/tutorial/TutorialView.vue";

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
    path: "/tutorial",
    name: "Tutorial",
    component: TutorialView,
  });
}

// Create and export router object
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
