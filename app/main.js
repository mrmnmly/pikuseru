import Vue from 'vue'
import App from 'App'
import ElementUI from 'element-ui';
import store from './store/index'
import "vueify/lib/insert-css" // required for .vue file <style> tags

Vue.use(ElementUI);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    ...App,
    store,
    render: h => h(App)
}).$mount('#app')
