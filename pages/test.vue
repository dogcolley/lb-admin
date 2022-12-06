<script setup lang="ts">
import {useTestStore} from '~/stores/test'
const route = useRoute()
const stoTest = useTestStore()

const cnt = useState('cnt',()=>0);

const ref_cnt = ref<Number>(0);
const ref_cnt2 = ref<Number>(0);

const reactive_cnt = reactive({
    cnt:0
})

const name = ref<string>('');
const cookie_tests = useCookie<{name:string}>('cookie_tests')

const setCookie_test =() => {
    cookie_tests.value = {name:name.value}
}

function resetCookie_test(){
    cookie_tests.value = null
}

watch(ref_cnt,()=>{
    ref_cnt2.value = ref_cnt.value * 2
})

definePageMeta({
  middleware: ['test','auth'],
});

const { data } = await useFetch(() => `/api/`)

onMounted(async()=>{
})


</script>

<template>
    <div>
        {{stoTest.test}}
    </div>

    <hr/>
    
    <div>
        useState <br>
        {{cnt}}
        <button @click="cnt++">+</button>
        &ensp;
        <button @click="cnt--">-</button>
    </div>

    <hr/>

    <div>
        useRefs + watch<br>
        {{ref_cnt}}, ref_cnt's double : {{ref_cnt2}}
        <button @click="ref_cnt++">+</button>
        &ensp;
        <button @click="ref_cnt--">-</button>
    </div>
    <hr/>

    <div>
        useReactive <br>
        {{reactive_cnt.cnt}}
        <button @click="reactive_cnt.cnt++">+</button>
        &ensp;
        <button @click="reactive_cnt.cnt--">-</button>
    </div>

    <hr/>

    <div>
        getFetch <br>
        data : {{data}}
    </div>

    <hr/>
    
    <div>
        cookie <br>
        <div v-if="cookie_tests">
            {{cookie_tests}}
            <button type="button" @click="resetCookie_test">reset</button>
        </div>
        <div v-else>
            <input type="text" v-model="name">
            <button type="button" @click="setCookie_test">set</button>
        </div>
    </div>
</template>