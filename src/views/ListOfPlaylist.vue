<template>
  <div>
    <PlaylistBanner  v-bind:Banner="Banner" ></PlaylistBanner>
    <ListOfSongs v-bind:Songs = Songs ></ListOfSongs>
  </div>
</template>

<script>
import Vue from 'vue'
import PlaylistBanner from "@/components/layout/PlaylistBanner.vue";
import ListOfSongs from '@/components/layout/ListOfSongs.vue';
import img from '@/assets/icons/Heart.svg'
export default Vue.extend({
  
  data(){
    const Songs = [{
        imgSrc: img,
        name:"La cucaracha",
        actist: "El pepe",
        date: "ayer",
        time:"2:00"
      }, {
        imgSrc: img,
        name:"La cucaracha",
        actist: "El pepe",
        date: "ayer",
        time:"2:00"
      }]

    return{
      Songs : Songs,
      Banner :{
      img: img, 
      name: "Team cucaracha",
      author: "El pepe",
      description: "un temazo vacano con un flow aceleraisimo",
      songs: Songs.length,
      likes: 5,
      time: "3h",
      },

    }
  },
  components: {
    PlaylistBanner,
    ListOfSongs,
  }
})
</script>