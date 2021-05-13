<template>
  <div class="navbar-contenedor">
    <div class="container">
      <div class="logo">
        <a href="/">Bohify</a>
      </div>

      <nav class="barra-de-navegacion">
        <a class="navbar-link" href="#">Sing up</a>
        <a class="navbar-link" href="#">Log in</a>
      </nav>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>

<style lang="scss">
.navbar-contenedor {
  background-color: black;
  .container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
    font-size: 1.6rem;
    height: 85px;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    box-sizing: border-box;
    padding: 2rem;
    text-decoration: none;
  }
  .logo {
    color: #fff;
    font-size: 2rem;
  }
  navbar-link {
    text-decoration: none;
    color: #fff;
  }
  .navbar-link:hover {
    color: yellowgreen;
  }

  .barra-de-navegacion {
    display: flex;
    gap: 40px;
  }
}

@media (max-width: 800px) {
  .navbar-contenedor {
    .container {
      font-size: 1rem;
      .logo {
        font-size: 1.6rem;
      }
    }
  }
}
</style>