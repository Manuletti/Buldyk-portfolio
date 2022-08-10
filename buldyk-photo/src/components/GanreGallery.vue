<script setup lang="ts">
import { usePhotoStore } from "@/stores/photos";
import { ref, onUpdated } from "vue";
const photos = usePhotoStore();
const photoList = ref(photos.filteredByGanre);
//the problem is that if one enter the page via adress
//like /portfolio/portraits - the function does't run
//i can fix it by using Navigation guards, i think
onUpdated(() => {
  return (photoList.value = photos.filteredByGanre);
});
</script>
<template>
  <section class="pictures">
    <router-view></router-view>
    <div class="preview-container" v-for="item in photoList">
      <router-link :to="{ name: 'photocard', params: item }">
        <img class="preview-img" :src="item.source" />
      </router-link>
    </div>
  </section>
</template>

