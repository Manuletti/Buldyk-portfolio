<script setup lang="ts"></script>

<template>
  <div class="welcome-wallpaper">
    <router-link to="/portfolio">
      <h1>Buldyk production</h1>
    </router-link>
    <img id="wallpaper-img" src="../../public/img/Welcome2500.jpg" alt="welcome" srcset="" />
  </div>
</template>

<style scoped>
.welcome-wallpaper {
  height: 100vh;
  overflow: hidden;
}
#wallpaper-img {
  display: flex;
  margin: auto;
  width: 98vw;
  height: auto;
}
h1 {
  position: absolute;
  color: white;
  font-size: 150px;
  margin-top: 30%;
  margin-left: 5%;
}
h1:hover {
  font-size: 155px;
  text-decoration: underline;
}
</style>
