<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" >
    
    <Banner></Banner> 
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Banner from '@/components/Banner.vue';
export default Vue.extend({
  name: 'Home',
  components: {
       Banner,
  },
});
</script>
