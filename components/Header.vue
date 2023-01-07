<script setup>
import { useCounterStore } from '@/stores/counter'
const counter = useCounterStore();
const router = useRouter();
</script>

<template>
    <nav class="fixed p-2  w-full flex items-center  z-50  bg-[var(--color)] ">
        <div class="w-full flex flex-wrap justify-between items-center mx-auto">
            <div class="flex items-center">
                <div @click="(counter.menu ? counter.menu = false : counter.menu = true)"
                    class="mr-2 block relative select-none h-10  z-10  m-auto    cursor-pointer  rounded-lg text-[var(--bgx)] hover:bg-[var(--textcolor)] hover:text-[var(--color)] ">
                    <svg width="40" height="40" viewBox="0 0 16 16" class="justify-center inline-block">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <path
                                :d="counter.menu ? 'M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z'
                                : 'M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z'"
                                fill="currentColor"></path>
                        </g>
                    </svg>
                </div>
                <div class=" cursor-pointer" @click="router.push('/')">
                    <span class="text-[var(--textcolor)] font-extrabold text-xl select-none">จังหวัดอุทัยธานี</span>
                </div>
            </div>
            <div>

                <!-- Center-->
            </div>
            <div>
                <!-- Left-->
                <div class=" flex item-center">
                    <UserPage class="text-right w-fit " />
                </div>
            </div>
        </div>
    </nav>
    <Sidebar :menu="counter.menu" />
</template>