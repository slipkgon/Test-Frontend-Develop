<script setup>
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
} from '@headlessui/vue'

const isOpen = ref(false)

function closeModal() {
    isOpen.value = false
}
function openModal() {
    isOpen.value = true
}

const check = ref(false)
const formdata = ref(
    {
        Username: {
            data: '',
            error: [
                { type: 0, texterror: 'เบอร์โทรขึ้นต้นด้วย 06, 08, 09 เท่านั้น' },
                { type: 0, texterror: 'เฉพาะตัวเลข ไม่เกิน 10 ตัว' },
                { type: 0, texterror: 'ห้ามกรอกอักษรพิเศษ' }
            ]
        }
        , Password: {
            data: '',
            error: [
                { type: 0, texterror: 'อักษรตัวแรกต้องเป็นตัวพิมพ์ใหญ่' },
                { type: 0, texterror: 'ห้ามพิมพ์ภาษาไทย' },
                { type: 0, texterror: 'ห้ามกรอกอักษรพิเศษ' }
            ]
        }
    }
);

const formsubmit = () => {
    var username = formdata.value.Username;
    var password = formdata.value.Password;
    const numcheck = /^[0-9]/g;

    
    if (!numcheck.test(username.data)) {
        username.error[2].type = 1;
        username.data = username.data.replace(/[^0-9]/g, "");
    }

    if (username.data.substring(0, 2) != '06' && username.data.substring(0, 2) != '08' && username.data.substring(0, 2) != '09') username.error[0].type = 1;
    else username.error[0].type = 0;

    if (isNaN(Number(username.data)) || Number(username.data).toString().length > 10) username.error[1].type = 1;
    else username.error[1].type = 0;

    if ((password.data.substring(0, 1).match(/[A-Z]/g) || []).length != 1) password.error[0].type = 1;
    else password.error[0].type = 0;

    let validate_user = username.error[0].type == 0 && username.error[1].type == 0 && username.error[2].type == 0;
    let validate_password = password.error[0].type == 0 && password.error[1].type == 0 && password.error[2].type == 0;

    if (validate_user && validate_password) {
        check.value = true;
        isOpen.value = true;
    } else {
        check.value = false;
        isOpen.value = true;
    }
}

const checkNumber = (event) => {
    var aCode = event.which ? event.which : event.keyCode;
    if (aCode > 31 && (aCode < 48 || aCode > 57)) {
        formdata.value.Username.error[1].type = 1;
        window.event.preventDefault();
    } else {
        formdata.value.Username.error[1].type = 0;

    }
}

const Thaicheck = (event) => {
    var regex = /[\u0E00-\u0E7F]/g;
    let result = regex.test(event.key);
    if (result) {
        formdata.value.Password.error[1].type = 1;
        window.event.preventDefault();
    } else {
        formdata.value.Password.error[1].type = 0;

    }
}

const containsSpecialChars = (event, type) => {
    const specialChars = /[^a-zA-Z0-9-\u0E00-\u0E7F]/g;
    let result = specialChars.test(event.key);
    if (result && type == 1) {
        formdata.value.Username.error[2].type = 1;
        window.event.preventDefault();
    } else {
        formdata.value.Username.error[2].type = 0;

    }

    if (result && type == 2) {
        formdata.value.Password.error[2].type = 1;
        window.event.preventDefault();
    } else {
        formdata.value.Password.error[2].type = 0;

    }
}


</script>

<template>
    <div>

        <div class="flex items-center bg-transparent  p-4 text-[var(--textcolor)]">
            <div class="  m-auto p-4 w-full max-w-sm bg-[var(--color)] rounded-lg   sm:p-6 md:p-8 ">
                <form class="space-y-6" @submit.prevent="formsubmit">
                    <h5 class="text-xl text-center font-semibold ">
                        ล็อคอิน
                    </h5>
                    <div class="block">
                        <div style="margin-top:0px;">
                            <label for="id" class="block mb-2 text-sm font-medium ">รหัสเข้าใช้งาน</label>
                            <input v-model="formdata.Username.data" autocomplete="off" type="text" name="id" id="email"
                                aria-required="true" aria-label="Username" aria-invalid="true"
                                @keypress="checkNumber($event), containsSpecialChars($event, 1)"
                                class="border border-[var(--bg)]  bg-[var(--color)] focus:ring-[var(--bg)] focus:border-[var(--bg)] text-sm rounded-lg  block w-full p-2.5"
                                required />
                        </div>
                        <div class="">
                            <div v-for="row in formdata.Username.error" :key="row.texterror">
                                <div v-if="row.type == 1" class="p-1 bg-red-500 shadow rounded m-1 text-gray-100">
                                    <li class="text-xs">{{ row.texterror }}</li>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="block">
                        <div style="margin-top:10px;">
                            <label for="password" class="block mb-2 text-sm font-medium ">พาสเวิร์ด</label>
                            <input v-model="formdata.Password.data" autocomplete="off" type="password" name="password"
                                id="password" aria-label="Password"
                                @keypress="Thaicheck($event), containsSpecialChars($event, 2)"
                                class="border border-[var(--bg)]  bg-[var(--color)] focus:ring-[var(--bg)] focus:border-[var(--bg)] text-sm rounded-lg  block w-full p-2.5"
                                required />
                        </div>
                        <div class="">
                            <div v-for="row in formdata.Password.error" :key="row.texterror">
                                <div v-if="row.type == 1" class="p-1 bg-red-500 shadow rounded m-1 text-gray-100">
                                    <li class="text-xs">{{ row.texterror }}</li>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="text-right">
                        <NuxtLink to="/Register" class="select-none text-sm hover:underline">
                            สมัครสมาชิก</NuxtLink>
                    </div>
                    <button type="submit"
                        class="w-full text-white  focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-[var(--button)]">
                        เข้าสู่ระบบ
                    </button>
                </form>
            </div>
        </div>

        <TransitionRoot appear :show="isOpen" as="template">
            <Dialog as="div" @close="closeModal" class="relative z-50">
                <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0"
                    enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
                    <div class="fixed inset-0 bg-black bg-opacity-25" />
                </TransitionChild>

                <div class="fixed inset-0 overflow-y-auto">
                    <div class="flex min-h-full items-center justify-center p-4 text-center">
                        <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                            enter-to="opacity-100 scale-100" leave="duration-200 ease-in"
                            leave-from="opacity-100 scale-100" leave-to="opacity-0 scale-95">
                            <DialogPanel
                                class="w-full max-w-md transform overflow-hidden rounded-2xl bg-[var(--color)] text-[var(--textcolor)] p-6 text-left align-middle shadow-xl transition-all">
                                <DialogTitle as="h3" class="text-lg font-bold  leading-6">
                                    แสดงข้อมูล
                                </DialogTitle>

                                <div class="block p-2">

                                    <div>
                                        <b>Username : </b> {{ formdata.Username.data }}
                                    </div>
                                    <div>
                                        <b>Password : </b> {{ formdata.Password.data }}
                                    </div>
                                    <div class="mt-2">
                                        <b>Status : </b> <span :class="check ? 'bg-green-500 ' : 'bg-red-500 '"
                                            class="p-2 rounded-md text-gray-100 shadow">{{
                                                check?'Pass': 'Not Pass'
                                            }}</span>
                                    </div>
                                </div>

                                <div class="mt-4 text-center">
                                    <button type="button"
                                        class="inline-flex justify-center rounded-md border border-transparent bg-[var(--button)] px-4 py-2 text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--bg)] focus-visible:ring-offset-2"
                                        @click="closeModal">
                                        ตกลง
                                    </button>
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </TransitionRoot>



    </div>
</template>