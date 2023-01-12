# Nuxt 3 Minimal Starter

ระบบแนะนำสถานที่ท่องเที่ยวจังหวัดอะไรก็ได้
สร้าง Components ตามนี้
- Header
- Sidebar
- Footer
- อื่นๆ ตามเหมาะสม
สร้าง Layout
- Login
- Guest
- Home
- อื่นๆ ตามเหมาะสม
สามารถเปลี่ยนสีธีมได้ 3 สี
- ธีมแดงดำ
- ธีมฟ้าขาว
- ธีมดำทอง
สร้างหน้าตามกำหนดดังนี้
Validate โชว์ข้อความแจ้งเตือน error ใต้ input ***
  Login
    - Validate Username (example : 0998765432) 
    - เบอร์โทรขึ้นต้นด้วย 06, 08, 09 เท่านั้น
    - เฉพาะตัวเลข ไม่เกิน 10 ตัว
    - ห้ามกรอกอักษรพิเศษ
    - Validate Password (example : Aa123456)
    - อักษรตัวแรกต้องเป็นตัวพิมพ์ใหญ่
    - ห้ามพิมพ์ภาษาไทย
    - ห้ามกรอกอักษรพิเศษ
  Register
    - Validate Name (ชื่อ) - lastName (นามสกุล)
    - ถ้าชื่อเป็นภาษาไทย นามสกุลต้องเป็นภาษาไทย เช่น ชื่อสมหมาย นามสกุล Hello ไทยก็ไทย อังกฤษก็อังกฤษทั้งหมด
    - ห้ามกรอกภาษาอังกฤษรวมกับภาษาไทย
    - ห้ามกรอกข้อมูลตัวเลข
    - ห้ามกรอกค่าว่างหรือ specbar
    - ห้ามชกรอกอักษรพิเศษ
    - Validate Bank Account (บัญชีธนาคาร)
    - เลือกธนาคารทำเป็นตัวเลือก (กรุงเทพ, กสิกร, ไทยพาณิช)
    - เฉพาะตัวเลข ไม่เกิน 10 ตัว
แสดงข้อมูลที่กรอกทั้งหมดเป็น Modal หลังจาก Submit


Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
