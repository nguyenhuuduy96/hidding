import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import Antd from 'ant-design-vue';
import store from './store';
import VueLazyload from 'vue3-lazyload';
import { createHead } from '@vueuse/head';
import 'ant-design-vue/dist/reset.css';
import './assets/styles/base.scss';
import './assets/styles/common.scss';
import 'aos/dist/aos.css';
// Import Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
// Thêm các biểu tượng vào thư viện
library.add(fas, faFacebook, faTwitter, faInstagram, faYoutube);
import loadimage from './assets/loading-image.gif';
import errorimage from './assets/default-image.avif';

const app = createApp(App);
const head = createHead();
app.use(VueLazyload, {
  error: errorimage,
  loading: loadimage,
});
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router);
app.use(head);
app.use(Antd);
app.use(store);
app.mount('#app');

