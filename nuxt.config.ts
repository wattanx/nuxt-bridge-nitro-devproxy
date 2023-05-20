import { defineNuxtConfig } from "@nuxt/bridge";

export default defineNuxtConfig({
  bridge: {
    capi: true,
    meta: true,
    nitro: true,
  },
  ssr: false,
  nitro: {
    devProxy: {
      "/api": {
        target: "https://pokeapi.co/api/",
        changeOrigin: true,
      },
    },
  },
});
