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
    <img :src="photo.source" alt="" />
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
}
img {
  max-width: 60%;
}
</style>
