import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'lib-flexible'
import './styles/base.css'
import './styles/iconfont.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
