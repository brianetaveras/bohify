<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <Banner></Banner> 
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Banner from '@/components/Banner.vue';
export default Vue.extend({
  name: 'Home',
  components: {
    HelloWorld,
    Banner,
  },
});
</script>
