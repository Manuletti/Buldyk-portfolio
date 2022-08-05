<script setup lang="ts">
import NavigationBar from "../components/NavigationBar.vue";
import GanreGallery from "../components/GanreGallery.vue";

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
</script>

<template>
  <body>
    <!-- Nav bar should be inside PhotoCard component -->
    <div class="nav-btn">Back</div>
    <main>
      <NavigationBar />
      <GanreGallery :photoList="photoTest" />
    </main>
    <div class="nav-btn">Next</div>
  </body>
</template>

<style>
main {
  color: white;
}
.nav-btn {
  height: 300px;
  width: 10%;
  margin: auto;
  text-align: center;
  line-height: 300px;
  color: white;
}
.nav-btn:hover {
  background-color: rgb(10, 9, 9);
  color: red;
}

.nav-arrow {
  width: 10em;
}
</style>
