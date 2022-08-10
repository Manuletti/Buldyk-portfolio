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
    <img class="photocard" :src="photo.source" :alt="photo.title" />
    <h3 class="title">{{ photo.title }}, {{ photo.date }}</h3>
    <p class="info">{{ photo.description }}</p>
    <p class="info">{{ photo.info }}</p>
  </div>
</template>
