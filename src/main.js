// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './Router/main'; 
import './assets/utilities.css'
import 'ant-design-vue';
const app = createApp(App);

// Sử dụng router
app.use(router);

app.mount('#app');