// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  components: true,
  app: {
    //pageTransition: { name: "page", mode: "out-in" },
    head: {
      title: "จังหวัดอุทัยธานี",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "theme-color", content: "#FFFFFF" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "แนะนำสถานที่ท่องเที่ยวจังหวัดอุทัยธานี",
        },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [
        {
          hid: "shortcut-icon",
          rel: "shortcut icon",
          href: "/icons/icon_64x64.073081.png",
        },
        {
          hid: "apple-touch-icon",
          rel: "apple-touch-icon",
          href: "/icons/icon_512x512.073081.png",
          sizes: "512x512",
        },
        { hid: "manifest", rel: "manifest", href: "/manifest.json" },
      ],
    },
  },
  css: ["@/assets/css/main.css"],
  experimental: {
    reactivityTransform: false,
  },
  build: {
    transpile: ["@headlessui/vue"],
  },
  modules: ["@pinia/nuxt","@vueuse/nuxt", "@nuxt/image-edge", "@nuxtjs/color-mode"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vueuse: {
    ssrHandlers: true,
  },
  colorMode: {
    classSuffix: "",
  },
  vite: {},
  nitro: {
    compressPublicAssets: true,
  },
  image: {
    provider: "imgix",
    imgix: {
      baseURL: "",
    },
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      "2xl": 1536,
    },
  },
});
