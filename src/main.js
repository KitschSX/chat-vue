import './assets/main.css'

import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
const app = createApp(App);

import {getapi} from '@/apis/testapi.js'
getapi().then(res => {console.log(res)})

app.use(router);

app.mount('#app');