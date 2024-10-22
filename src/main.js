import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// 事件总线
Vue.prototype.$bus = new Vue();

// sendInfo事件
Vue.prototype.$message = (info, type) => {
  Vue.prototype.$bus.$emit('sendInfo', { info, type })
};

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
