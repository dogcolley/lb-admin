<script setup lang="ts">
import Loading from '~/components/loading.vue'
import { useLoadingStore } from './stores/loading';
const stoLoading = useLoadingStore();

onMounted(()=>{
  stoLoading.loadingEnd()
})


</script>

<template>
  <component :is="Loading"></component>
  <div class="admin">
  	<NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
 .admin{
    padding-top : 80px;
    box-sizing  : border-box;
 }
</style>