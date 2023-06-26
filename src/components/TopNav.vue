<template>
    <nav class="container" id="topnav">
        <div class="align-left">
            <ul>
                <li id="home"><RouterLink to="/">loganstiltner.dev</RouterLink></li>
            </ul>
        </div>

        <div class="align-right">
            <ul>
                <li><button>Menu</button></li>
            </ul>
        </div>
    </nav>
</template>

<style scoped>
    nav {
        width: 100%;
        height: 3em;
        background-color: #17191E;
        font-family: Jaldi, Arial, Helvetica, sans-serif;
        font-size: 1.4em;
        color: #fff;
        left: 0px;
        top: 0px;
        position: fixed;
        flex-direction: row;
        display: flex;
        justify-content: space-between;
        box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3);
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
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

  .router-link-active {
    color: var(--vt-c-accent);
  }
</style>

<style>
    #topnav {
        display: none;
    }
</style>