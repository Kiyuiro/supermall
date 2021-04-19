import Toast from "./Toast";

export default {
  install(Vue) {
    // console.log('install toast');
    // 创建组件构造器
    const toastConstructor = Vue.extend(Toast);
    // 创建组件对象
    const toast = new toastConstructor();
    // 将组件对象挂载到元素上
    toast.$mount(document.createElement('div'))
    // toast.$el 对应上一步创建的 div
    document.body.appendChild(toast.$el);

    Vue.prototype.$toast = toast;
  }
};
