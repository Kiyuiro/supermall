import Vue from 'vue'
import App from './App'
import router from "./router";
import store from "@/store";

import FastClick from "fastclick";
import VueLazyload from "vue-lazyload";

import toast from '@/components/common/toast'

Vue.config.productionTip = false;

Vue.prototype.$bus = new Vue();

// 安装 toast 插件
Vue.use(toast);

// 安装图片懒加载插件
Vue.use(VueLazyload, {
  error: require("@/assets/img/error.png"),
  loading: require("@/assets/img/loading.gif")
});

// 解决移动端 300ms 延迟
FastClick.attach(document.body);

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app');
