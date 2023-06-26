<template>
  <main>
    <img src="../assets/me.jpg" alt="">
    <p>Deeply passionate for what I do, I am fully dedicated to the principle of lifelong learning. My passion stems from the convergence of creativity, logic, technology, and a never-ending pursuit of knowledge. When I'm not at my computer, you can find me playing guitar, reading a book, or hitting up the local twisty roads on my motorcycle.</p>
  </main>
</template>

<style scoped>
  main {
    width: calc(100vw - 200px);
    transform: translateX(200px);
    height: 100vh;
    overflow: hidden;
  }
  img {
    border-radius: 50%;
    width: 300px;
    height: 300px;
    margin: 4rem auto;
    display: block;
  }

  p {
    font-size: 1.4rem;
    text-align: center;
    margin: 0 auto;
    width: 60%;
    color: #fff;
    padding: 2rem 4rem;
  }
</style>
