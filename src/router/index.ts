// Thirdparties imports
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

// Local imports
import HomeView from "@/pages/HomeView.vue";
import InvestigationsView from "@/pages/InvestigationsView.vue";

// List of routes
// TODO: to be moved to subfolders
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/investigations",
    name: "Investigations",
    component: InvestigationsView,
  },
];

// Create and export router object
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
