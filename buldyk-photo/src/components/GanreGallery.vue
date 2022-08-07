<script setup lang="ts">
import { defineProps, toRaw } from 'vue';
const preview = defineProps<{
  source: string;
  title: string;
  date: string;
  ganre: string;
  description?: string;
  info?: string;
}>();;
const photoList = toRaw(preview)
console.log(toRaw(preview));
setTimeout(() => {
  console.log(toRaw(preview));
}, 3000);
</script>
<template>
  <section>
    <div class="preview-container" v-for="key in photoList">
      <img class="preview-img" :src="source" />
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
