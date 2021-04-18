import Vue from 'vue'
import Vuex from 'vuex'

import mutations from "@/store/mutations";
import actions from "@/store/actions";
import getters from "@/store/getters"

// 安装插件
Vue.use(Vuex);

let state = {
  cartList: []
}

// 创建 store 对象
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});

// 挂在在 Vue 实例上
export default store;
