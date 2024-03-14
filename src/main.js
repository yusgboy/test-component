import Vue from 'vue'
import AlertModal from '@/components/Alert/alert'
import App from './App.vue'
import router from './router'
import store from './store'
import eChartFn from '@/components/Chart/index'
import 'normalize.css'

Vue.config.productionTip = false
Vue.prototype.$eChartFn = eChartFn
Vue.use(AlertModal)
new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app')
