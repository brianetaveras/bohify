<template>
     <div class="Banner">
         <div>
            <h1>La Música es vida</h1>
            <h3>Disfruta de la buena música</h3>
         </div>
    </div>

</template>

<style lang="scss">
   

.Banner {
    width: 100%;
    background-image: url(../assets/banner.png);
    height: 100vh;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    h1,h3{
        margin: 0;
        color: white;
    }
}

</style>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    
})
</script>