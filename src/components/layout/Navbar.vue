<template>
  <div class="navbar-contenedor">
    
     <div class="logo">
           <h1>Bohify</h1>
      </div>
    
    <nav>
         <a href="#">Premium</a>
         <a href="#">Support</a>
         <a href="#">Download</a>
         <a href="#">Sing up</a>
         <a href="#">Log in</a>
    </nav>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
export default Vue.extend({

})
</script>

<style lang="scss">
.navbar-contenedor{
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-decoration: none;
    font-size: 1.6rem;
    height: 100px;
    gap: 30px;

    .logo{

        h1{
            color: #fff;
            margin: auto;
            font-size: 2rem;
        }
    }
    a{
        text-decoration: none;
        color: #fff;
    }
}

</style>