import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false

console.log('mode', process.env.VUE_APP_BASE_URL)

/* https://www.jianshu.com/p/d4ffb5d2e2be 参考配置链接 */
// https://www.cnblogs.com/wangjae/p/12610490.html

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
