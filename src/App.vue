<script setup lang="ts">
import SideNav from './components/SideNav.vue';
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="container">
    <SideNav />
    <RouterView />
  </div>
</template>

<style scoped>
.container>div {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
}
</style>
