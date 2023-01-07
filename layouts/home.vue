<script setup>
import { useCounterStore } from '@/stores/counter'
const counter = useCounterStore();

</script>
<template>
    <div class="">
        <Header />
        <div :class="counter.menu ? 'lg:pl-[20rem]' : ''" class="pt-14 lg:pt-20  min-h-[85vh] transition-all">
            <slot />
            <Footer />
        </div>
       
    </div>
</template>