<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
      <Navbar />
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Navbar from "@/components/layout/Navbar.vue";
export default Vue.extend({
  components: {
    Navbar,
  },
});
</script>

<style lang="scss">
body {
  margin: 0;
}
</style>
