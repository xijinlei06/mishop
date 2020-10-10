import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import '@/assets/css/reset.css'
import '@/assets/css/style.css'
import '@/assets/js/rem.js'


Vue.config.productionTip = false;
//下载安装axios
import axios from 'axios'
Vue.prototype.$axios = axios
//下载安装swiper
import "swiper/swiper-bundle.css";
import Swiper from "swiper/swiper-bundle";
//下载安装配置vant
import { Button } from 'vant';
import 'vant/lib/index.css';

Vue.use(Button);
//下载安装配置ly-tab// 之后便可在全局使用了
import LyTab from 'ly-tab'
Vue.use(LyTab)

new Vue({
  router,
  store,
  Swiper,
  render: h => h(App)
}).$mount("#app");
