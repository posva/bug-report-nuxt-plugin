import { fileURLToPath } from 'node:url'
import { defineNuxtConfig } from 'nuxt/config'
import MyModule from '../'

export default defineNuxtConfig({
  app: {
    pageTransition: false,
    layoutTransition: false,
  },

  modules: [MyModule],
})
