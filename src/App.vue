<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
      <Navbar />
    </div>
    <router-view />
    <MusicPlayer />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Navbar from "@/components/layout/Navbar.vue";
import MusicPlayer from '@/components/MusicPlayer/MusicPlayer.vue';

export default Vue.extend({
  components: {
    Navbar,
    MusicPlayer,
  },
});
</script>

<style lang="scss">
body {
  margin: 0;
}
</style>
