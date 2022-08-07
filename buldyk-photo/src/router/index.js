import AppVue from "@/App.vue";
import WelcomePage from "@/views/WelcomePage.vue";
import PortfolioPage from "@/views/PortfolioPage.vue";
import GanreGallery from "@/components/GanreGallery.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/welcome",
      name: "index",
      component: AppVue,
      children: [
        {
          path: "/welcome",
          name: "welcome",
          component: WelcomePage,
        },
        {
          path: "/portfolio",
          name: "porfolio",
          component: PortfolioPage,
          children: [
            {
              path: "/portfolio/:ganre",
              name: "ganre-page",
              component: GanreGallery,
              props: true,
              // children: [
              //   {
              //     path: "/portfolio/:ganre/:photo",
              //     name: "photocard",
              //     component: PhotoCard,
              //   },
              // ],
            },
          ],
        },
      ],
    },
  ],
});

export default router;
