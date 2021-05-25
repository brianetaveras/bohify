<template>
  <div class="banner">
    <div class="banner__top">
      <div class="banner__top--buttons">
        <button-move move="back"/>
        <button-move move="next"/>
      </div>
      <div class="banner__top--perfil">
        <upgrade />
        <perfil/>
      </div>

    </div>
    <div class="banner__down">
      <div class="banner__down--img">
        <img src="" alt="Playlist's image">
      </div>
      <div class="banner__down--description">
        <p>Playlist</p>
        <h1>{{name}}</h1>
        <div class="description">{{description}}</div>
        <div class="author"><strong>{{author}}</strong> &bull; {{likes}} &bull; {{songs}}, about {{time}}</div>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue';  
export default Vue.extend({
  props: {
    img: String,
    name: String,
    author: String,
    description: String,
    songs:Number,
    likes: Number,
    time: String,
  },
})

</script>

<style lang="scss">

</style>