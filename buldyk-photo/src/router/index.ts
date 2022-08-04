import AppVue from "@/App.vue";
import WelcomePage from "@/views/WelcomePage.vue";
import PortfolioPage from "@/views/PortfolioPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/welcome",
      name: "index",
      component: AppVue,
    },
    {
      path: "/welcome",
      name: "welcome",
      component: WelcomePage,
    },
    {
      path: "/portfolio",
      name: "porfolio",
      component: PortfolioPage,
    },
  ],
});

export default router;
