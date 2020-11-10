import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";

import "element-ui/lib/theme-chalk/index.css";
import css from './css/reset.css';
import router from "./router";
import store from "./store";




Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(css)


new Vue({
    el: "#app",
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");