import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '@/home/HomePage.vue';
import RoboBuilder from '@/build-bot/RoboBuilder.vue';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: HomePage,
  }, {
    path: '/build',
    name: 'Build',
    component: RoboBuilder,
  }],
});
