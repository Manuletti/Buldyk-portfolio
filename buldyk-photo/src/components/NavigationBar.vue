<script setup lang="ts">
import { usePhotoStore } from "@/stores/photos";
import { toRaw } from "vue";
const photos = usePhotoStore();
const prop = toRaw(photos.photoList);
console.log(prop[1]);
const objtest = {
  source: "../../public/img/Markov.jpg",
  title: "Vadim",
  date: 2015,
  ganre: "landscapes",
  description: "",
  info: "",
};

console.log(objtest);
</script>

<template>
  <nav>
    <router-link
      class="nav-bar-btn"
      :to="{
        name: 'ganre-page',
        params: objtest,
      }"
      >Landscapes</router-link
    >
    <router-link class="nav-bar-btn" to="/portfolio/street">Street</router-link>
    <router-link class="nav-bar-btn" to="/portfolio/portraits"
      >Portraits</router-link
    >
    <router-link class="nav-bar-btn" to="/portfolio/nude">Nude</router-link>
    <router-link class="nav-bar-btn" to="/portfolio/about">About</router-link>
  </nav>
</template>

<style scoped></style>
