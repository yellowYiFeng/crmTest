import Vue from 'vue';
import Router from 'vue-router';
import Pos from '@/views/Pos';
import Clue from '@/views/clue';
import Business from '@/views/business';
import Customer from '@/views/customer';
// import '../js/utils.js';
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/',
      component: Clue
    },
    {
      path: '/clue',
      component: Clue
    },
    {
      path: '/business',
      component: Business
    },
    {
      path: '/customer',
      component: Customer
    },
  ]
});
