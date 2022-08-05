<script setup lang="ts">
import NavigationBar from "../components/NavigationBar.vue";
import GanreGallery from "../components/GanreGallery.vue";


</script>

<template>
  <body>
    <!-- Nav bar should be inside PhotoCard component -->
    <div class="nav-btn">Back</div>
    <main>
      <NavigationBar />
      <router-view></router-view>
    </main>
    <div class="nav-btn">Next</div>
  </body>
</template>

<style>
main {
  color: white;
}
.nav-btn {
  height: 300px;
  width: 10%;
  margin: auto;
  text-align: center;
  line-height: 300px;
  color: white;
}
.nav-btn:hover {
  background-color: rgb(10, 9, 9);
  color: red;
}

.nav-arrow {
  width: 10em;
}
</style>
