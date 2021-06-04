  <template>
   <div class="ListOfMusic">
     <div class="buttons">
       <div class="play">
         <img v-bind:src ="Songs[0].imgSrc">
       </div>
       <div class="heart">
         <img v-bind:src ="Songs[0].imgSrc">
       </div>
       <div class="menu">
         <img v-bind:src ="Songs[0].imgSrc">
       </div>
     </div>
     <ul class="List">
       <li class="List__music" v-for="(Music, index) in Songs" v-bind:key = index>
         <div v-bind:key = index  class="row" @mouseenter="showPlay = true" @mouseleave="showPlay = false">
          <div class="play-btn" v-if="showPlay">Play</div>
          <div class="play-btn" v-else >{{index + 1}}</div>
          </div>
          <div v-bind:key = index class="image">
            <img v-bind:src ="Music.imgSrc">
          </div>
          <div v-bind:key = index class="description">
            <h3>{{Music.name}}</h3>
            <p>{{Music.actist}}</p>
          </div>
          <div v-bind:key = index class="date">
            {{Music.date}}
          </div>
          <div v-bind:key = index class="time">
            <img src="../../assets/icons/Heart.svg" >
            {{Music.time}}
          </div>
          </li>
       
    </ul>

   </div>
</template> 

<script lang="ts">

import Vue from 'vue';  
export default Vue.extend({
  data(){
    return{
      showPlay:false,
      
    }
  },
  props: {
    Songs: []
  },
  
})
</script>

<style lang="scss">
  .ListOfMusic{
    background:linear-gradient(to bottom, #222222 0% , #121212 100% );

    // background:gray;
    .buttons{
      display:flex;
      align-items:center;
      .play{
      width: 56px;
      height: 56px;
      display: flex;
      align-items: center;
      justify-content: center;
        background: #1DB954;
        border-radius:50%;
        overflow:hidden;
        img{
          height: 28px;
          width: 28px;
          display: inline-block;
        }     
      }
      .heart{
        width: 2rem;
        height: 2rem;
        img{
          width: 100%;
          height: 100%;
        }
      }
    }

  }
</style>