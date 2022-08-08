import AppVue from "@/App.vue";
import WelcomePage from "@/views/WelcomePage.vue";
import PortfolioPage from "@/views/PortfolioPage.vue";
import GanreGallery from "@/components/GanreGallery.vue";
import PhotoCard from "@/components/PhotoCard.vue";
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
              children: [
                {
                  path: "/portfolio/:ganre/:title",
                  name: "photocard",
                  props: true,
                  component: PhotoCard,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
});

export default router;
