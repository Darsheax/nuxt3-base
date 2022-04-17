import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    buildModules: [
        '@pinia/nuxt',
    ],
    typescript: {
        strict: true
    },
    app: {
        head: {
            link: [
                {rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css'}
            ]
        }
    },
    publicRuntimeConfig: {
        API_URL: process.env.API_URL,
        APP_URL: process.env.APP_URL
    }
})
