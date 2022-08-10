<script setup lang="ts">
import { usePhotoStore } from "@/stores/photos";
const photos = usePhotoStore();
</script>

<template>
  <nav :class="$route.path == '/portfolio' ? 'portfolio-page-nav' : 'nav-bar'">
    <div :class="$route.path == '/portfolio' ? 'ganre-preview' : ''">
      <router-link
        class="nav-bar-btn"
        to="/portfolio/landscapes"
        @click="photos.filterByGanre('landscape')"
      >
        <img
          v-if="$route.path == '/portfolio'"
          class="preview-img"
          src="../../public/img/IndustrialLandscape.jpg"
          alt=""
        />
        Landscapes</router-link
      >
    </div>
    <div :class="$route.path == '/portfolio' ? 'ganre-preview' : ''">
      <router-link
        class="nav-bar-btn"
        to="/portfolio/street"
        @click="photos.filterByGanre('street')"
      >
        <img
          v-if="$route.path == '/portfolio'"
          class="preview-img"
          src="../../public/img/LandscapeChemney.jpg"
          alt=""
        />
        Street</router-link
      >
    </div>
    <div :class="$route.path == '/portfolio' ? 'ganre-preview' : ''">
      <router-link
        class="nav-bar-btn"
        to="/portfolio/portraits"
        @click="photos.filterByGanre('portrait')"
      >
        <img
          v-if="$route.path == '/portfolio'"
          class="preview-img"
          src="../../public/img/Markov.jpg"
          alt=""
        />
        Portraits</router-link
      >
    </div>
    <div :class="$route.path == '/portfolio' ? 'ganre-preview' : ''">
      <router-link
        class="nav-bar-btn"
        to="/portfolio/nude"
        @click="photos.filterByGanre('nude')"
      >
        <img
          v-if="$route.path == '/portfolio'"
          class="preview-img"
          src="../../public/img/NastyaKitchen.jpg"
          alt=""
        />
        Nude</router-link
      >
    </div>
    <div :class="$route.path == '/portfolio' ? 'ganre-preview' : ''">
      <router-link class="nav-bar-btn" to="/portfolio/about">About</router-link>
    </div>
  </nav>
</template>
