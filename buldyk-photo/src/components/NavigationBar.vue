<script setup>
import { usePhotoStore } from "@/stores/photos";
const photos = usePhotoStore();
</script>

<template>
  <nav>
    <router-link
      class="nav-bar-btn"
      to="/portfolio/landscapes"
      @click="photos.filterByGanre('landscape')"
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
