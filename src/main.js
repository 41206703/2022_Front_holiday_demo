/*
 * @Author: your name
 * @Date: 2022-01-15 15:26:59
 * @LastEditTime: 2022-01-17 11:55:09
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * 
 * @FilePath: \2022For study\task\src\main.js
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import  VueJsonp  from  'vue-jsonp'

Vue.config.productionTip = false;
import axios from 'axios'

Vue.prototype.$http=axios;

// Vue.use(VueJsonp);
Vue.use(ElementUI);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
