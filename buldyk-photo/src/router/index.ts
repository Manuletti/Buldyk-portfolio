import AppVue from "@/App.vue";
import WelcomePage from "@/views/WelcomePage.vue";
import PortfolioPage from "@/views/PortfolioPage.vue";
import { createRouter, createWebHistory } from "vue-router";
import GanreGalleryVue from "@/components/GanreGallery.vue";

const photoTest = [
  {
    source: "../../public/img/Welcome2500.jpg",
    title: "Nevsky prospect",
    date: 2017,
    description: "",
    info: "",
  },
  {
    source: "../../public/img/IndustrialLandscape.jpg",
    title: "Industrial Landscape, Moscow",
    date: 2014,
    description: "Gagarinskyi TC",
    info: "",
  },
  {
    source: "../../public/img/LandscapeChemney.jpg",
    title: "Landscape with a pipe",
    date: 2016,
    description: "Spb, Narvskaya",
    info: "",
  },
  {
    source: "../../public/img/Markov.jpg",
    title: "Vadim",
    date: 2015,
    description: "",
    info: "",
  },
  {
    source: "../../public/img/NastyaKitchen.jpg",
    title: "Nastya",
    date: 2018,
    description: "",
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
        photoList: photoTest,
      },
    },
  ],
});

export default router;
