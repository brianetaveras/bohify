<template>
  <div class="navbar-contenedor">
    <div class="contenedor">
      <div class="logo">
        <a class="decoration" href="/">Bohify</a>
      </div>

      <nav class="barra-de-navegacion">
        <a class="navbar-link" href="#">Sign up</a>
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
  .contenedor {
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
    .contenedor {
      font-size: 1rem;
      .logo {
        font-size: 1.6rem;
      }
    }
  }
}
</style>