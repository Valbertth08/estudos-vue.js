/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from './vuetify'
import router from '@/presentation/router'
import { VueQueryPlugin } from '@tanstack/vue-query'

export function registerPlugins (app) {
  app
    .use(vuetify)
    .use(router)
    .use(VueQueryPlugin)
}
