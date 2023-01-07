<script setup>
const props = defineProps(['menu']);
const { $colorMode } = useNuxtApp();

const modedata = [
    {
        mode: 'red-dark', namemode: 'แดง-ดำ'
    },
    {
        mode: 'blue-white', namemode: 'ฟ้า-ขาว'
    },
    {
        mode: 'dark-gold', namemode: 'ดำ-ทอง'
    }
]
</script>


<template>
    <div style="z-index: 100" class="max-w-8xl mx-auto px-3">
        <div class="">
            <div :class="menu ? '' : 'hidden'"
                class="rounded w-full  text-[var(--bgx)] bg-[var(--color)]  fixed z-20 inset-0 top-[3.5rem]  right-auto lg:w-[20rem] pb-[2rem] px-2 overflow-y-auto">
                <nav id="nav" class=" select-none lg:text-sm lg:leading-6 relative " style="z-index: 80">

                    <ColorScheme placeholder="" tag="div" class="mt-4">  
                        <div class="px-1 py-1 text-center mt-4">
                            <span class="text-[var(--textcolor)] text-base font-bold">
                                ธีม
                            </span>
                        </div>
                        <div class="px-1 py-1 border-t border-[var(--textcolor)]">
                            <div v-for="row in modedata" :key="row.mode">
                                <button @click="$colorMode.preference = `${row.mode}`"
                                    :class="$colorMode.preference == row.mode ? 'bg-[var(--textcolor)] text-[var(--color)]' : 'text-[var(--textcolor)]'"
                                    class="flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-[var(--textcolor)] hover:text-[var(--color)]">
                                    {{ row.namemode }}
                                </button>
                            </div>
                        </div>
                    </ColorScheme>
                </nav>
            </div>
        </div>
    </div>
</template>