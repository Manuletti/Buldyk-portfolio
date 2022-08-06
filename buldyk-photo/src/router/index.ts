import AppVue from "@/App.vue";
import { toRaw } from "vue";
import WelcomePage from "@/views/WelcomePage.vue";
import PortfolioPage from "@/views/PortfolioPage.vue";
import { createRouter, createWebHistory } from "vue-router";
import GanreGalleryVue from "@/components/GanreGallery.vue";
import { usePhotoStore } from "@/stores/photos";

let ganreFilter = [
  {
    source: "../../public/img/Welcome2500.jpg",
    title: "Nevsky prospect",
    date: 2017,
    ganre: "street",
    description: "",
    info: "",
  },
  {
    source: "../../public/img/IndustrialLandscape.jpg",
    title: "Industrial Landscape, Moscow",
    date: 2014,
    ganre: "landscape",
    description: "Gagarinskyi TC",
    info: "",
  },
];

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
    {
      path: "/portfolio/:ganre",
      name: "ganre",
      component: GanreGalleryVue,
      props: {
        photoList: ganreFilter,
      },
      beforeEnter: (to, from) => {
        const photos = usePhotoStore();
        ganreFilter = toRaw(photos.filteredByGanre);
        console.log("Data recieved by router: ", ganreFilter);
      },
    },
  ],
});

export default router;
