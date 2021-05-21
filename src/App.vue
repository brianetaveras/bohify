<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
      <Navbar />
    </div>
    <router-view />
    <MusicPlayer />
    <div class="router-view"><router-view /></div>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Navbar from "@/components/layout/Navbar.vue";
import MusicPlayer from '@/components/MusicPlayer/MusicPlayer.vue';
import Footer from "@/components/layout/Footer.vue";

export default Vue.extend({
  components: {
    Navbar,
    MusicPlayer,
    Footer,
  }
});
</script>

<style lang="scss">

.router-view{
  min-height: 100vh;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
}
body {
  margin: 0;
}
.decoration {
  text-decoration: none;
}
</style>
