<script setup lang="ts">
  import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="container">
    <div class="align-top">
      <ul>
        <li id="home"><RouterLink to="/">loganstiltner.dev</RouterLink></li>
      </ul>
      <div class="icon-container">
        <ul>
          <li><a href="https://github.com/Stiltn0223"><img class="icon" id="github" src="./icons/github.svg" alt="Github Logo"></a></li>
          <li><a href="https://www.linkedin.com/in/logan-stiltner/"><img class="icon" id="linkedin" src="./icons/linkedin.svg" alt="LinkedIn Logo"></a></li>
        </ul>
      </div>
    </div>
    <div class="align-bottom">
      <ul>
        <!-- <li id="blog"><RouterLink to="/blog">Blog</RouterLink></li> -->
        <li id="resume"><RouterLink to="/resume">Resume</RouterLink></li>
        <li id="contact"><RouterLink to="/contact">Contact</RouterLink></li>
        <li id="about"><RouterLink to="/about">About</RouterLink></li>
      </ul>
    </div>
  </nav>
  </template>
  
  <style scoped>
  nav {
    /* Add shadow to the right */
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  }
  .align-top {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
    .container {
      width: var(--sidebar-width);
      height: 100vh;
      background-color: #17191E;
      font-family: Jaldi, Arial, Helvetica, sans-serif;
      font-size: 1.4em;
      color: #fff;
      left: 0px;
      top: 0px;
      position: fixed;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

  ul {
    list-style-type: none;
    margin: 0;
    padding: .5rem 1rem;
  }

  ul>li {
    padding: .8rem;
    text-align: center;
  }

  .icon-container {
    flex-direction: row;
    justify-content: space-evenly;
  }

  .icon-container>ul>li {
    display: inline-block;
  }

  .router-link-active {
    color: var(--vt-c-accent);
  }

  .icon {
    width: 45px;
    filter: invert(100%);
  }

  </style>
  