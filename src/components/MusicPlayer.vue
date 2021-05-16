<template>
    <footer class="player">
        <h1>{{ name }}</h1>
    </footer>
</template>
<style scoped>
    .player{
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        background-color: #181818;
        color: #fff;
    }
</style>

<script lang="ts">
    import Vue from 'vue'
    export default Vue.extend({
        data(){
            return {
                name: "David",
                lastName: "Mora Montero"
            }
        }
    })
</script>