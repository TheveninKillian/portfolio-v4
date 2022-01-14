import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'
import App from './App.vue'

import './styles/main.scss'

const app = createApp(App)

const routes = setupLayouts(generatedRoutes)
const router = createRouter({ history: createWebHistory(), routes })
app.use(router)

app.mount('#app')
