<template>
<div class="Playlist">
  <PlaylistBanner {...props}/>
  
</div>
</template>

<script lang="ts">
import Vue from 'vue'
import PlaylistBanner from "@/components/layout/PlaylistBanner.vue";
export default Vue.extend({
  props:{
    img: String,
    name: String,
    author: String,
    description: String,
    songs:Number,
    likes: Number,
    time: String,
  }
  ,
  components: {
    PlaylistBanner,
  }
})
</script>

<style>

</style>