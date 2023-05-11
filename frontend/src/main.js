import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './axios'

import './assets/main.css'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Vue3Editor from 'vue3-editor'

const app = createApp(App)

app.component("font-awesome-icon", FontAwesomeIcon)

app.use(Vue3Editor)

app.use(router)

app.mount('#app')
