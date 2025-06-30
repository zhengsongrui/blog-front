import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import editor from "mavon-editor";
import "mavon-editor/dist/css/index.css";

import 'highlight.js/styles/atom-one-dark.css'

const pinia = createPinia();
const app = createApp(App);

app.config.globalProperties.$toHtml = (code:string)=> (editor.mavonEditor as any).getMarkdownIt().render(code)

app.use(pinia);
app.use(router);
app.use(ElementPlus);
app.use(editor);
app.mount("#app");
