import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router';
import VueLazyload from 'vue-lazyload';
import fr from 'element-plus/es/locale/lang/fr'
import './assets/css/global.css';

const app = createApp(App);

app.use(router);
app.use(VueLazyload, {
    preLoad: 1.3,
    attempt: 1,
    observer: true,
    observerOptions: {
        rootMargin: '0px',
        threshold: 0.1,
        error: require('./assets/images/error.png'),
        loading: require('./assets/images/loading.gif')
    },
});
app.use(ElementPlus, {
    locale: fr
});
app.mount('#app');