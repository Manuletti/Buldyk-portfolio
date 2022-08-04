import AppVue from "@/App.vue";
import WelcomePage from "@/views/WelcomePage.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "index",
      component: AppVue,
    },
    {
      path: "/welcome",
      name: "welcome",
      component: WelcomePage,
    },
  ],
});

export default router;
