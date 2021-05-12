<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
      <Navbar />
    </div>
    <router-view />
    <Footer/>
  </div>

</template>

<script lang="ts">
import Vue from "vue";
import Navbar from "@/components/layout/Navbar.vue";
import Footer from "@/components/layout/footer.vue";
export default Vue.extend({
  components: {
    Navbar,
    Footer,
  },
});
</script>

<style lang="scss">
body {
  margin: 0;
}
</style>
