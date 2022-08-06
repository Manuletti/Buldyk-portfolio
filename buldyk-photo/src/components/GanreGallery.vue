<script setup lang="ts">
import NavigationBar from "./NavigationBar.vue";
const preview = defineProps<{
  photoList: Array<object>;
}>();
</script>
<template>
  <div>
    <!--Это костыль, мне кажется. Компонент должен встатраиваться внутрь окружения-->
    <NavigationBar />
    <section>
      <div class="preview-container" v-for="item in preview.photoList">
        <img class="preview-img" :src="item.source" />
      </div>
    </section>
  </div>
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
