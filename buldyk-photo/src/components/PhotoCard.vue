<script setup lang="ts">
const photo = defineProps<{
  source: string;
  title: string;
  date: number;
  ganre: string;
  description?: string;
  info?: string;
}>();
</script>

<template>
  <div class="photo">
    <img :src="photo.source" :alt="photo.title" />
    <h3>{{ photo.title }}, {{ photo.date }}</h3>
    <p>{{ photo.description }}</p>
    <p>{{ photo.info }}</p>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  height: 90vh;
  font-weight: 200;
}
img {
  max-width: 85%;
  max-height: 85vh;
  height: auto;
  width: auto;
}
</style>
