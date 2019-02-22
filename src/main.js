import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import axios from "axios";
import qs from "qs";
import VueScroller from 'vue-scroller'
// import pageShare from '@utils/pageShare'
// pageShare(router)
let WebUrl = window.location.href;
let WebRootStr = WebUrl.split('/cet_home')[0].split('://')[1].split('.cet0570.com')[0];
let APIRoot = 'https://cet.cet0570.com/'

switch (WebRootStr) {
    case "cet":
        APIRoot = 'https://cet.cet0570.com/'
        break;
    case "cqt":
        APIRoot = 'https://cqt.cet0570.com/'
        break;
    case "t.wx":
        APIRoot = 'http://t.wx.cet0570.com/'
        break;
}
const host = process.env.NODE_ENV == 'development' ? 'http://t.wx.dev.cet0570.com/newindex.php' : APIRoot + 'newindex.php'
const host_qqt = process.env.NODE_ENV == 'development' ? 'http://t.wx.dev.cet0570.com/newqqtindex.php' : APIRoot + 'newqqtindex.php'

const instance = axios.create({
    baseURL: host,
})
const instance_qqt = axios.create({
    baseURL: host_qqt,
})
localStorage.setItem('G_host', host);
Vue.prototype.$axios = instance
Vue.prototype.$axios_qqt = instance_qqt
Vue.prototype.$qs = qs
Vue.use(VueScroller);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
