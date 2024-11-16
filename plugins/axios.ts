// plugins/axios.ts
import axios from 'axios'

export default defineNuxtPlugin((nuxtApp) => {
    const instance = axios.create({
        baseURL: 'http://localhost:9999'
    })

    nuxtApp.vueApp.provide('axios', instance)
})