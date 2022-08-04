<script setup lang="ts"></script>

<template>
  <main>
    <router-link to="/portfolio"><h1>Buldyk production</h1></router-link>
    <img src="../../public/img/Welcome2500.jpg" alt="welcome" srcset="" />
  </main>
</template>

<style>
main {
  font-family: "Oswald", sans-serif;
  font-weight: 200;
}
img {
  display: flex;
  margin: auto;
  width: 98vw;
  height: 97vh;
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
