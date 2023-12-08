import './styles/base.scss'
import './styles/root.scss';
import VueLazyload from 'vue-lazyload';
import { createPinia } from 'pinia' 


import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
const app = createApp(App)
app.use(VueLazyload);
app.use(router)
.use(createPinia()) 
app.mount('#app')
