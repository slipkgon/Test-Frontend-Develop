
<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
const router = useRouter();
const test = () => {
    console.log(MenuItems)
}
const userdata = [
    {
        name: 'เข้าสู่ระบบ', to: '/Login'
    },
    {
        name: 'สมัครสมาชิก', to: '/Register'
    }
]
</script>

<template>
    <Menu as="div" class="relative">
        <MenuButton aria-label="ปุ่ม User"
            class=" transition-all justify-center flex rounded-full text-[var(--bgx)] p-2 items-center select-none  z-10 hover:bg-[var(--textcolor)] hover:text-[var(--color)]">
            <div>
                <svg viewBox="0 0 16 16" class=" h-7 w-7">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <path
                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"
                            fill="currentColor"></path>
                    </g>
                </svg>
            </div>
            <div>
                <span class=" font-bold">เข้าสู่ระบบ</span>
            </div>
        </MenuButton>
        <MenuItems
            class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-[var(--button)] rounded-md bg-[var(--color)] shadow-lg ring-1 ring-[var(--bg)] ring-opacity-5 focus:outline-none">
            <div class="px-1 py-1">
                <MenuItem v-slot="{ active }" v-for="row in userdata" :key="row.name">
                <button @click="router.push(row.to)" aria-label="เมนู" :class="[
                active ? 'bg-[var(--textcolor)] text-[var(--color)]' : 'text-[var(--textcolor)]',
                'group flex w-full items-center rounded-md px-2 py-2 text-sm']">
                    {{ row.name }}
                </button>
                </MenuItem>
            </div>
        </MenuItems>
    </Menu>
</template>