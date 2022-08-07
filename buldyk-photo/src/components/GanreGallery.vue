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
  <section>
    <div class="preview-container" v-for="item in photoList">
      <img class="preview-img" :src="item.source" />
    </div>
  </section>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  align-content: center;
  justify-content: center;
  margin-top: 2em;
}
.preview-img {
  max-width: 150px;
  max-height: 150px;
  height: auto;
  width: auto;
}

.preview-img:hover {
  max-width: 160px;
  max-height: 160px;
}
</style>
