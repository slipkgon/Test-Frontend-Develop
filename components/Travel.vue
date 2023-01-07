<script setup>
import { useCounterStore } from '@/stores/counter'

const { id } = useRoute().params;
const { data } = useCounterStore();

useHead({
    title: data[id].title,
    meta: [
        {
            hid: "description",
            name: "description",
            content: "แนะนำสถานที่เที่ยว จังหวัดอุทัยธานี "+data[id].title,
        },
    ],
})
</script>

<template>
    <div>
        <div>
            <nuxt-img format="webp" class=" m-auto max-h-[32rem] rounded-none  lg:rounded-md" :src="data[id].img || '/img1.jpeg'" :alt="data[id].title" />
        </div>
        <div class="text-center mt-2">
            <span class="font-bold text-xl">{{ data[id].title }}</span>
        </div>
        <div class="p-4">
            <p class="font-bold text-base  indent-8">{{ data[id].description }}</p>
        </div>
    </div>
</template>