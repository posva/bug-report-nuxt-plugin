import { fileURLToPath } from 'url'
import { addPlugin, createResolver, defineNuxtModule } from '@nuxt/kit'
import type { NuxtModule } from '@nuxt/schema'

export interface MyModuleNuxtModuleOptions {}

// Manual to avoid build error
const MyModule: NuxtModule<MyModuleNuxtModuleOptions> =
  defineNuxtModule<MyModuleNuxtModuleOptions>({
    meta: {
      name: 'my-module',
      configKey: 'my-module',
      compatibility: {
        nuxt: '^3.0.0',
      },
    },

    defaults: {},

    setup(options, nuxt) {
      const { resolve } = createResolver(import.meta.url)
      const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))

      nuxt.options.build.transpile.push(runtimeDir)

      addPlugin(resolve(runtimeDir, 'plugin'))
    },
  })

export default MyModule
