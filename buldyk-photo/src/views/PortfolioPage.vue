<script setup lang="ts">
import NavigationBar from "../components/NavigationBar.vue";
import PhotoCard from "../components/PhotoCard.vue";

const photoTest = {
  source: "../../public/img/Welcome2500.jpg",
  title: "Nevsky prospect",
  date: 2017,
  description: "",
  info: "",
};
</script>

<template>
  <body>
    <div class="nav-btn">Back</div>
    <main>
      <NavigationBar />
      <PhotoCard
        :source="photoTest.source"
        :title="photoTest.title"
        :date="photoTest.date"
        :description="photoTest.description"
        :info="photoTest.info"
      />
    </main>
    <div class="nav-btn">Next</div>
  </body>
</template>

<style>
main {
  color: white;
}
.nav-btn {
  height: 100px;
  width: 10%;
  margin: auto;
  text-align: center;
  line-height: 100px;
  color: white;
}
.nav-btn:hover {
  background-color: rgb(10, 9, 9);
}

.nav-arrow {
  width: 10em;
}
</style>
