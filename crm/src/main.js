// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App';
import router from './router';
import axios from 'axios';
import Vuex from 'vuex';
import storeConfig from './store/store.js';
import commonJs from './js/common.js';
global.commonJs = commonJs;
import EasyScroll from 'easyscroll';
Vue.use(EasyScroll);

var instance = axios.create({
	baseURL : 'http://devinner.yunxuetang.com.cn/crmapi/',
	headers : {'Source' : '705','token':'AAAAAGY6QoEqujLvyCv64VoHjmjm9Mpdyvgg8EEUor4Pk6GBBwD0vf9nWvw_YLmQ-2eCI1b5e-7PjgplUMd61ebc2nyBClb90mKLRw2gsLdBndjOFmA6PuLHQ3imsUfLRyjOmpc8zbzDr3Cf0yQZNExuSVw',
	Accept :'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8','OrgId':'18f923a7-5a5e-426d-94ae-a55ad1a4b240'
	},
});
Vue.prototype.$axios = instance;// 将axios挂载到prototype上
// axios 配置
axios.defaults.baseURL = 'http://devinner.yunxuetang.com.cn/crmapi/';

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(Vuex);

/* eslint-disable no-new */
new Vue({	
  el: '#app',
  router,
  storeConfig,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
