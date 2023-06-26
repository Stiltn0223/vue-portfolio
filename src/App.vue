<script setup lang="ts">
import SideNav from './components/SideNav.vue';
import TopNav from './components/TopNav.vue';
import { RouterView } from 'vue-router'
</script>

<template>
  <SideNav/>
  <TopNav/>
  <div class="app-container">
    <RouterView />
  </div>
</template>

<style scoped>

.app-container {
  width: calc(100vw - var(--sidebar-width));
  transform: translateX(var(--sidebar-width));
  height: 100%;
  /* overflow: hidden; */
  font-size: 1.2em;
  color: #fff;
  display: flex;
  flex-direction: column;
}
.app-container>main {
  margin-top: 5em;
}
</style>

<style>
  @media only screen and (max-width: 900px) {

  #sidenav {
    display: none;
  }
  #topnav {
    display: flex;
  }
  :root {
    --sidebar-width: 0px;

  }
}
</style>