<script setup lang="ts">
</script>

<template>
  <main>
    <div class="container">
      <h1>Hi.</h1>
      <h2>My name is <span class="accent">Logan</span>.</h2>
  
      <p>I'm a <span class="accent">full-stack engineer</span> with a passion for creating engaging, beautiful user experiences.</p>
    </div>
  </main>

  <!-- TODO: Uncomment when the backend for blog posts has been implemented -->
  <!-- <div class="align-bottom">
    <p>See my work</p>
  </div> -->
</template>
<style scoped>
  main {
    /* Adjust for sidebar size */
    font-size: 1.2em;
    color: #fff;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h1, h2 {
    font-size: 3.5rem;
    text-align: center;
  }
  
  h2 {
    margin-bottom: 8rem;
  }

  p {
    font-size: 1.4rem;
    text-align: center;
    font-family: Montserrat, sans-serif;
    margin: 2rem;
  }

.align-bottom {
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  margin-bottom: 2rem;
  z-index: -10;
}
</style>