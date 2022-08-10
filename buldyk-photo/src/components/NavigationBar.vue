<script setup lang="ts">
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
    <router-link
      class="nav-bar-btn"
      to="/portfolio/street"
      @click="photos.filterByGanre('street')"
      >Street</router-link
    >
    <router-link
      class="nav-bar-btn"
      to="/portfolio/portraits"
      @click="photos.filterByGanre('portrait')"
      >Portraits</router-link
    >
    <router-link
      class="nav-bar-btn"
      to="/portfolio/nude"
      @click="photos.filterByGanre('nude')"
      >Nude</router-link
    >
    <router-link class="nav-bar-btn" to="/portfolio/about">About</router-link>
  </nav>
</template>
