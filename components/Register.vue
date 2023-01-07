<script setup>
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
} from '@headlessui/vue'

const isOpen = ref(false)
const check = ref(false)
function closeModal() {
    isOpen.value = false
}
function openModal() {
    isOpen.value = true
}

const formdata = ref(
    {
        Name: {
            data: '',
            error: [
                { type: 0, texterror: 'ห้ามกรอกภาษาอังกฤษรวมกับภาษาไทย' },
                { type: 0, texterror: 'ห้ามกรอกข้อมูลตัวเลข' },
                { type: 0, texterror: 'ห้ามกรอกค่าว่างหรือ specbar' },
                { type: 0, texterror: 'ห้ามกรอกอักษรพิเศษ' },
                { type: 0, texterror: 'ชื่อ - นามสกุลใช้ภาษาไม่ตรงกัน' },
            ]
        }
        , lastName: {
            data: '',
            error: [
                { type: 0, texterror: 'ห้ามกรอกภาษาอังกฤษรวมกับภาษาไทย' },
                { type: 0, texterror: 'ห้ามกรอกข้อมูลตัวเลข' },
                { type: 0, texterror: 'ห้ามกรอกค่าว่างหรือ specbar' },
                { type: 0, texterror: 'ห้ามกรอกอักษรพิเศษ' },
                { type: 0, texterror: 'ชื่อ - นามสกุลใช้ภาษาไม่ตรงกัน' },
            ]
        }
        , Bank: {
            datavalue: '',
            data: 0,
            error: [
                { type: 0, texterror: 'เลือกธนาคารทำเป็นตัวเลือก (กรุงเทพ, กสิกร, ไทยพาณิช)' },
                { type: 0, texterror: 'เฉพาะตัวเลข ไม่เกิน 10 ตัว' },
            ]
        }
    }
);

const bankdata = ref([
    {
        Name: 'กรุงเทพ',
        Img: 'กรุงเทพ.png'
    },
    {
        Name: 'กสิกรไทย',
        Img: 'กสิกรไทย.png'
    },
    {
        Name: 'ไทยพาณิช',
        Img: 'ไทยพาณิช.png'
    }
]);
const Validate_Name = () => {
    let Name = formdata.value.Name;
    var regexTh = /[^\u0E00-\u0E7F]/g;
    var regexEng = /[^a-zA-Z]/g;
    var regexThEng = /[^\u0E00-\u0E7F-a-zA-Z]/g;
    // Name
    if (regexThEng.test(Name.data)) {

        Name.data = Name.data.replace(regexThEng, "");
    }

    if (!regexTh.test(Name.data.substring(0, 1))) {
        if (regexTh.test(Name.data)) {
            Name.error[0].type = 1;
        } else {
            Name.error[0].type = 0;
        }
        return 'TH';
    } else {
        if (regexEng.test(Name.data)) {
            Name.error[0].type = 1;
        } else {
            Name.error[0].type = 0;
        }
        return 'ENG';
    }
    //
}

const Validate_lastName = () => {
    let lastName = formdata.value.lastName
    var regexTh = /[^\u0E00-\u0E7F]/g;
    var regexEng = /[^a-zA-Z]/g;
    var regexThEng = /[^\u0E00-\u0E7F-a-zA-Z]/g;
    // lastName
    if (regexThEng.test(lastName.data)) {
        console.log(1)
        lastName.data = lastName.data.replace(regexThEng, "");
    }

    if (!regexTh.test(lastName.data.substring(0, 1))) {
        if (regexTh.test(lastName.data)) {
            lastName.error[0].type = 1;
        } else {
            lastName.error[0].type = 0;
        }
        return 'TH';
    } else {
        if (regexEng.test(lastName.data)) {
            lastName.error[0].type = 1;
        } else {
            lastName.error[0].type = 0;
        }
        return 'ENG';
    }
    //
}

const formsubmit = () => {
    let Name = formdata.value.Name;
    let lastName = formdata.value.lastName;
    let Bank = formdata.value.Bank;
    Validate_lastName();
    Validate_Name();

    if (Validate_lastName() == Validate_Name()) {
        Name.error[4].type = 0;
        lastName.error[4].type = 0;
    } else {
        Name.error[4].type = 1;
        lastName.error[4].type = 1;
    }

    const numcheck = /^[0-9]/g;

    if (!numcheck.test(Bank.datavalue)) {
        username.error[2].type = 1;
        Bank.datavalue = Bank.datavalue.replace(/[^0-9]/g, "");
    }

    if (isNaN(Number(Bank.datavalue)) || Number(Bank.datavalue).toString().length > 10) Bank.error[1].type = 1;
    else Bank.error[1].type = 0;


    if (Bank.data == '') Bank.error[0].type = 1;
    else Bank.error[0].type = 0;

    let validate_Name = Name.error[0].type == 0 && Name.error[1].type == 0 && Name.error[2].type == 0 && Name.error[3].type == 0 && Name.error[4].type == 0;
    let validate_lastName = lastName.error[0].type == 0 && lastName.error[1].type == 0 && lastName.error[2].type == 0 && lastName.error[3].type == 0 && lastName.error[4].type == 0;
    let validate_Bank = Bank.error[0].type == 0 && Bank.error[1].type == 0;

    if (validate_Name && validate_lastName && validate_Bank) {
        check.value = true;
        isOpen.value = true;
    } else {
        check.value = false;
        isOpen.value = true;
    }

}


const checkNumber = (event, type) => {
    const regex = /[0-9]/g;
    let result = regex.test(event.key);
    if (result && type == 1) {
        formdata.value.Name.error[1].type = 1;
        window.event.preventDefault();
    } else {
        formdata.value.Name.error[1].type = 0;
    }

    if (result && type == 2) {
        formdata.value.lastName.error[1].type = 1;
        window.event.preventDefault();
    } else {
        formdata.value.lastName.error[1].type = 0;
    }


    if (!result && type == 3) {
        formdata.value.Bank.error[1].type = 1;
        window.event.preventDefault();
    } else {
        formdata.value.Bank.error[1].type = 0;
    }
}

const checkBlank = (event, type) => {
    const regex = /[ ]/g;
    let result = regex.test(event.key);
    if (result && type == 1) {
        formdata.value.Name.error[2].type = 1;
        window.event.preventDefault();
    } else {
        formdata.value.Name.error[2].type = 0;
    }

    if (result && type == 2) {
        formdata.value.lastName.error[2].type = 1;
        window.event.preventDefault();
    } else {
        formdata.value.lastName.error[2].type = 0;
    }

}



const containsSpecialChars = (event, type) => {
    const specialChars = /[^a-zA-Z0-9-\u0E00-\u0E7F ]/g;
    let result = specialChars.test(event.key);
    if (result && type == 1) {
        formdata.value.Name.error[3].type = 1;
        window.event.preventDefault();
    } else {
        formdata.value.Name.error[3].type = 0;
    }

    if (result && type == 2) {
        formdata.value.lastName.error[3].type = 1;
        window.event.preventDefault();
    } else {
        formdata.value.lastName.error[3].type = 0;
    }
}


</script>

<template>
    <div>

        <div class="flex items-center bg-transparent  p-4 text-[var(--textcolor)]">
            <div class="  m-auto p-4 w-full max-w-sm bg-[var(--color)] rounded-lg  sm:p-6 md:p-8 ">
                <form class="space-y-6" @submit.prevent="formsubmit">
                    <h5 class="text-xl text-center font-semibold ">
                        สมัครสมาชิก
                    </h5>

                    <div class="block">
                        <div style="margin-top:0px;">
                            <label for="Name" class="block mb-2 text-sm font-medium ">ชื่อ</label>
                            <input v-model="formdata.Name.data" autocomplete="off" type="text" name="Name" id="Name"
                                aria-required="true" aria-label="Username" aria-invalid="true"
                                @keypress="checkNumber($event, 1), checkBlank($event, 1), containsSpecialChars($event, 1)"
                                class="border border-[var(--bg)]  bg-[var(--color)] focus:ring-[var(--bg)] focus:border-[var(--bg)] text-sm rounded-lg  block w-full p-2.5"
                                required />
                        </div>
                        <div class="">
                            <div v-for="row in formdata.Name.error" :key="row.texterror">
                                <div v-if="row.type == 1" class="p-1 bg-red-500 shadow rounded m-1 text-gray-100">
                                    <li class="text-xs">{{ row.texterror }}</li>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="block">
                        <div style="margin-top:0px;">
                            <label for="lastName" class="block mb-2 text-sm font-medium ">นามสกุล</label>
                            <input v-model="formdata.lastName.data" autocomplete="off" type="text" name="lastName"
                                id="lastName" aria-required="true" aria-label="Username" aria-invalid="true"
                                @keypress="checkNumber($event, 2), checkBlank($event, 2), containsSpecialChars($event, 2)"
                                class="border border-[var(--bg)]  bg-[var(--color)] focus:ring-[var(--bg)] focus:border-[var(--bg)] text-sm rounded-lg  block w-full p-2.5"
                                required />
                        </div>
                        <div class="">
                            <div v-for="row in formdata.lastName.error" :key="row.texterror">
                                <div v-if="row.type == 1" class="p-1 bg-red-500 shadow rounded m-1 text-gray-100">
                                    <li class="text-xs">{{ row.texterror }}</li>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="block">
                        <div style="margin-top:0px;" class="block">
                            <label for="Bank" class="block mb-2 text-sm font-medium ">ธนาคาร</label>
                            <input v-model="formdata.Bank.datavalue" autocomplete="off" type="number" name="Bank"
                                id="Bank" aria-required="true" aria-label="Username" aria-invalid="true"
                                @keypress="checkNumber($event, 3)"
                                class="border border-[var(--bg)]  bg-[var(--color)] focus:ring-[var(--bg)] focus:border-[var(--bg)] text-sm rounded-lg  block w-full p-2.5"
                                required />
                            <div v-for="row in formdata.Bank.error" :key="row.texterror">
                                <div v-if="row.type == 1" class="p-1 bg-red-500 shadow rounded m-1 text-gray-100">
                                    <li class="text-xs">{{ row.texterror }}</li>
                                </div>
                            </div>
                            <div v-for="(row, i) in bankdata" :key="row.Name" @click="formdata.Bank.data = i + 1"
                                :class="formdata.Bank.data == i + 1 ? 'bg-[var(--textcolor)] text-[var(--color)]' : ''"
                                class="mt-2 mx-1 flex shadow p-2 rounded-md items-center hover:bg-[var(--textcolor)] hover:text-[var(--color)] cursor-pointer select-none">
                                <div class="w-fit mr-2">
                                    <nuxt-img format="webp" class="rounded-lg m-auto h-10 shadow " :src="row.Img"
                                        :alt="row.Name" />
                                </div>
                                <div>
                                    <span>{{ row.Name }}</span>
                                </div>
                            </div>
                        </div>



                    </div>

                    <button type="submit"
                        class="w-full text-white  focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-[var(--button)]">
                        สมัครสมาชิก
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
                                        <b>Name : </b> {{ formdata.Name.data }}
                                    </div>
                                    <div>
                                        <b>lastName : </b> {{ formdata.lastName.data }}
                                    </div>

                                    <div>
                                        <b>ธนาคาร : {{ formdata.Bank.data ? '' : 'ยังไม่ทำการเลือก' }}</b>
                                    </div>
                                    <div class="mt-2 mx-1 flex shadow p-2 rounded-md items-center  select-none"
                                        v-if="formdata.Bank.data">
                                        <div class="w-fit mr-2">
                                            <nuxt-img format="webp" class="rounded-lg m-auto h-10 shadow "
                                                :src="bankdata[formdata.Bank.data - 1].Img"
                                                :alt="bankdata[formdata.Bank.data - 1].Name" />
                                        </div>
                                        <div>
                                            <span>{{ bankdata[formdata.Bank.data - 1].Name }}</span>
                                        </div>
                                    </div>
                                    <div class="mt-4">
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