import { createApp } from 'vue'

import './bootstrap'
import axiosInstance from './axios'


import App from './App.vue'

const app = createApp(App)
app.config.globalProperties.$axios = axiosInstance
app.mount('#app')
