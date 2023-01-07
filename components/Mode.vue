<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
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
    <Menu as="div" class=" relative text-center">
        <ColorScheme placeholder="" tag="div">
            <MenuButton aria-label="mode"
                class=" transition-all justify-center inline-flex rounded-full text-[var(--bgx)] p-2  cursor-pointer  select-none  z-10 hover:bg-[var(--textcolor)] hover:text-[var(--color)] animate-fade-in">
                <svg viewBox="0 0 16 16" class=" h-7 w-7">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <path
                            d="M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM5.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
                            fill="currentColor"></path>
                        <path
                            d="M16 8c0 3.15-1.866 2.585-3.567 2.07C11.42 9.763 10.465 9.473 10 10c-.603.683-.475 1.819-.351 2.92C9.826 14.495 9.996 16 8 16a8 8 0 1 1 8-8zm-8 7c.611 0 .654-.171.655-.176.078-.146.124-.464.07-1.119-.014-.168-.037-.37-.061-.591-.052-.464-.112-1.005-.118-1.462-.01-.707.083-1.61.704-2.314.369-.417.845-.578 1.272-.618.404-.038.812.026 1.16.104.343.077.702.186 1.025.284l.028.008c.346.105.658.199.953.266.653.148.904.083.991.024C14.717 9.38 15 9.161 15 8a7 7 0 1 0-7 7z"
                            fill="currentColor"></path>
                    </g>
                </svg>
            </MenuButton>
            <MenuItems
                class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-[var(--button)] rounded-md bg-[var(--color)] shadow-lg ring-1 ring-[var(--bg)] ring-opacity-5 focus:outline-none">
                <div class="px-1 py-1 text-center">
                    <span class="text-[var(--textcolor)] text-sm font-bold">
                        ธีม
                    </span>
                </div>
                <div class="px-1 py-1">
                    <MenuItem v-slot="{ active }" v-for="row in modedata" :key="row.mode">
                    <button @click="$colorMode.preference = `${row.mode}`" :class="[
                        active || $colorMode.preference == row.mode ? 'bg-[var(--textcolor)] text-[var(--color)]' : 'text-[var(--textcolor)]',
                        'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                    ]">
                        {{ row.namemode }}
                    </button>
                    </MenuItem>
                </div>
            </MenuItems>
        </ColorScheme>
    </Menu>
</template>