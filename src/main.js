import { createApp } from 'vue'
import App from './App.vue'
import 'highlight.js/styles/stackoverflow-light.css'
import 'highlight.js/lib/common';
import hljsVuePlugin from "@highlightjs/vue-plugin";
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import elementComp from '@/components/elements/index.js'
library.add(fas)

// const app = createApp(App).mount('#app');
const app = createApp(App);
app.use(hljsVuePlugin);
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app');
app.use(elementComp);