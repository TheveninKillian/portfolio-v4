import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'

import './styles/main.scss'

import AOS from 'aos'
import 'aos/dist/aos.css'

import App from './App.vue'

const aos = AOS.init({
  duration: 1000,
  once: true,
})

const app = createApp(App)

app.use(aos)

const routes = setupLayouts(generatedRoutes)
const router = createRouter({ history: createWebHistory(), routes })
app.use(router)

app.mount('#app')
