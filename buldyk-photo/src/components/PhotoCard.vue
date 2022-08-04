<script setup lang="ts">
const photo = defineProps<{
  source: string;
  title: string;
  date: number;
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
/* I should make an adaptive design */
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  height: 90vh;
  font-weight: 200;
}
img {
  max-width: 70%;
  height: auto;
}
</style>
