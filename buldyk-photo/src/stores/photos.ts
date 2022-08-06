import { defineStore } from "pinia";
import { toRaw } from "vue";

export const usePhotoStore = defineStore("usePhotos", {
  state() {
    return {
      photoList: [
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
        {
          source: "../../public/img/LandscapeChemney.jpg",
          title: "Landscape with a pipe",
          date: 2016,
          ganre: "landscape",
          description: "Spb, Narvskaya",
          info: "",
        },
        {
          source: "../../public/img/Markov.jpg",
          title: "Vadim",
          date: 2015,
          ganre: "portrait",
          description: "",
          info: "",
        },
        {
          source: "../../public/img/NastyaKitchen.jpg",
          title: "Nastya",
          date: 2018,
          ganre: "nude",
          description: "",
          info: "",
        },
      ],
      filteredByGanre: [],
    };
  },
  actions: {
    filterByGanre(ganre: string): void {
      this.photoList.forEach((element) => {
        console.log("Element: ", element.ganre);
        if (element.ganre === ganre) {
          this.filteredByGanre.push(element);
        }
        console.log("New arr: ", toRaw(this.filteredByGanre));
      });
    },
  },
});
