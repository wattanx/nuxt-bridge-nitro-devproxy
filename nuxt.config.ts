import { defineNuxtConfig } from '@nuxt/bridge';

export default defineNuxtConfig({
  bridge: {
    capi: true,
    meta: true,
    nitro: true,
  },
  nitro: {
    devProxy: {
      '/api': 'https://pokeapi.co/api/v2/',
    },
  },
});
