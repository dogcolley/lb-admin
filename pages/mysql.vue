<script lang="ts" setup>


    definePageMeta({
        middleware: ['mysql'],
    });


    onMounted(()=>{
        console.log('onMounted')
    })

    useFetch(() => `/api/test_mysql`).then((e)=>{
        console.log('useFetch test_mysql',e.data.value)
    })

    //console.dir(data)
</script>

<template>
    <div>
        {{data}}
    </div>
</template>