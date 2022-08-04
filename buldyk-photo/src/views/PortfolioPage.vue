<script setup lang="ts">
import NavigationBar from "../components/NavigationBar.vue";
import PhotoCard from "../components/PhotoCard.vue";

const photoTest = {
  source: "../../public/img/Welcome2500.jpg",
  title: "Nevsky prospect",
  date: 2017,
};
</script>

<template>
  <main>
    <NavigationBar />
    <PhotoCard
      :source="photoTest.source"
      :title="photoTest.title"
      :date="photoTest.date"
    />
  </main>
</template>

<style>
main {
  color: white;
}
</style>
