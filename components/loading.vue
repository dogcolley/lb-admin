<script setup lang="ts">
import { useLoadingStore } from '~~/stores/loading';
const stoLoading = useLoadingStore();
</script>

<template>
    <div class="loading" v-show="stoLoading.state">
        loading
    </div>
</template>

<style lang="scss" scoped>
    .loading{
        position: fixed;
        width:100%;
        height: 100%;
        background: rgba(0,0,0,1);
        left:0;
        top:0;
        z-index:999
    }

</style>