<script setup>
import { useCounterStore } from '@/stores/counter'
const { data } = useCounterStore();
</script>

<template>
    <div>
        <div class="block  py-2">
            <div class="text-center p-2 text-xl font-bold rounded">
                แนะนำสถานที่ท่องเที่ยวจังหวัด อุทัยธานี
            </div>
            <div class="p-2 flex flex-wrap">
                <NuxtLink :to="'/Travel/'+i" class="block mx-auto lg:m-2 bg-[var(--color)] text-[var(--textcolor)] rounded-md  m-2  cursor-pointer hover:shadow-md transition-all  h-72 w-72 "
                    v-for="(row, i) in data" :key="i">
                    <div>
                        <nuxt-img format="webp" class=" m-auto h-56" :src="row.img || '/img1.jpeg'" :alt="row.title" />
                    </div>
                    <div class="break-all truncate  w-full p-1">
                        <span class="font-bold">{{ row.title }}</span>
                    </div>
                    <div class="truncate text-sm w-full p-1">
                        <span>{{ row.description }}</span>
                    </div>

                </NuxtLink>
            </div>

        </div>
    </div>
</template>