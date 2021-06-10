<template>
    <footer class="player">
        <div class="music-info">
            <img :src="music.image" alt="Music image" class="music-image">
            <div>
                <p class="music-name">{{ music.name }}</p>
                <span class="artist-name">{{ music.artist }}</span>
            </div>
        </div>
        <div class="audio-controls">
            <div class="audio-buttons">
                <button class="play-button" @click="startAudio">Play</button>
            </div>
            <div class="audio-progress">
                <audio @timeupdate="updateTime()" ref="audio" :src="music.file"></audio>
                <span class="time-span">{{ currentTimeText }}</span>
                <progress @mousedown="isMouseDown = true" @mouseup="isMouseDown = false" @mousemove="handleAudioDrag($event)" @click="handleAudioProgressChange($event)" :value="current" :max="duration"/>
                <span class="time-span">{{ durationText }}</span>
            </div>
        </div>
        <div>
            <progress ref="volume" @mousedown="isMouseDown = true" @mouseup="isMouseDown = false" @mousemove="handleVolumeDrag($event)" @click="handleVolumeProgressChange($event)" max="100" value="100"/>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
    @import './MusicPlayer.scss';
</style>

<script lang="ts">
    import Vue from 'vue';
    import { Music } from './Music';
    import { calculateCurrentValue, convertTime } from '@/lib/timeLibrary';

    const music: Music = { 
        id: '1',
        name: '56 | El Trading y las 2 sencillas apps',
        artist: 'Paco Montoya',
        file: '/true-damage.mp3',
        image: '/img/trading.jpg'
    }

    export default Vue.extend({
        data(){
            return {
                isMouseDown: false,
                music,
                currentTimeText: '0',
                durationText: '0',
                current: 0,
                duration: 0,
            }
        },
        methods: {
            startAudio(){
                const audio = this.$refs?.audio as HTMLAudioElement;
                this.duration = audio.duration;
                this.durationText = convertTime(audio.duration);
                if(!audio.paused){
                    audio.pause();
                    return
                }
                audio.play();
            },
            updateTime(){
                const audio = this.$refs?.audio as HTMLAudioElement;
                this.current = audio.currentTime;
                this.currentTimeText = `${convertTime(audio.currentTime)}`;
            },
            handleAudioProgressChange(event: MouseEvent){
                const audio = this.$refs?.audio as HTMLAudioElement;
                audio.currentTime = calculateCurrentValue(event, this.duration);
            },
            handleAudioDrag(event: MouseEvent){
                this.isMouseDown && this.handleAudioProgressChange(event);
            },
            handleVolumeDrag(event: MouseEvent){
                this.isMouseDown && this.handleVolumeProgressChange(event);
            },
            handleVolumeProgressChange(event: MouseEvent){
                const volume = this.$refs?.volume as HTMLProgressElement;
                const audio = this.$refs?.audio as HTMLAudioElement;
                const currentVolume = calculateCurrentValue(event, volume.max);
                
                audio.volume = currentVolume / 100;
                volume.value = currentVolume;
                
            }
        }
    })
</script>