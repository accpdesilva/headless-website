import './assets/theme/sass/vendors/vendors.scss';
import './assets/theme/css/icon.min.css';
import './assets/theme/sass/icon/icon.scss';
import './assets/theme/sass/style.scss';
import './assets/theme/sass/responsive.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';

const app = createApp(App);
app.use(createPinia());

app.mount('#app');

// Load external scripts after app is mounted
function loadScript(src) {
  return new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = src;
    s.async = true;
    s.onload = resolve;
    s.onerror = reject;
    document.body.appendChild(s);
  });
}

 loadScript('/js/jquery.js')
    .then(() => loadScript('/js/vendors.js'))
    .then(() => loadScript('/js/main.js'))
    .catch(err => console.error('Script load failed:', err));