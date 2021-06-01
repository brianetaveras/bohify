<template>
  
    <div class="banner">
      <div class="banner__img">
        <img v-bind:src="Banner.img" alt="Playlist's image">
      </div>
      <div class="banner__description">
        <p>Playlist</p>
        <h1>{{Banner.name}}</h1>
        <div class="description">{{Banner.description}}</div>
        <div class="author"><strong>{{Banner.author}}</strong> &bull; {{Banner.likes}} likes &bull; {{Banner.songs}} songs, about {{Banner.time}}</div>
      </div>
    </div>


</template>

<script lang="ts">
import Vue from 'vue';  
export default Vue.extend({
  props: {
    Banner:{}
  },
})

</script>

<style lang="scss">
.banner{
  // background:linear-gradient(#555555 43% , #424242 23%, #272727 43%   );
  background: gray;
  display:flex;
  gap: 20px;
  padding: 20px 30px;
  &__img{
    width: 232px;
    height: 232px;
    box-shadow: 0 4px 60px rgba(0, 0, 0,  50%);
    img{
      height: 100%;
      width: 100%;
      background:wheat;
    }
  }
  &__description{
    color: white;
    p{
      text-transform:uppercase;
      font-size: 13px;
      font-weight: 700;    
    }
    h1{
      padding: 0.08em 0px;
      font-size: 96px;
      line-height: 96px;
      visibility: visible;
      margin: 0;
      width: 100%;
    }
    .description{
      color: #B5B5BE ;
      margin: 0 0 5px 0;
      font-size: 1rem;
      font-weight: 400;
      letter-spacing: normal;
      line-height: 20px;
      text-transform: none;
      padding: 0;

    }
    .author{
      font-size: 1rem;
      font-weight: 400;
      letter-spacing: normal;
      text-transform: none;
      color: #B5B5BE ;
      vertical-align: baseline;
      strong{
        color: white;
      }
    }
  }

}


</style>