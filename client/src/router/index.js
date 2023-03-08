import { createRouter, createWebHistory } from "vue-router";

// Views
import LandingPage from "@/views/LandingPage.vue";

const routes = [
  {
    path: "/",
    name: "landing",
    component: LandingPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
