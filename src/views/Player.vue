<template>
  <MusicPlayer />
</template>

<script>
import Vue from 'vue';
import MusicPlayer from '@/components/MusicPlayer.vue';

export default Vue.extend({
    name: 'Player',
    components: {
        MusicPlayer,
    }
});
</script>

<style>

</style>