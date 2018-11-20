// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router';
import './assets/css/common.css';
import './assets/font/iconfont.css';

import Vuex from 'vuex';

import VueRouter from "vue-router";
import store from "./store"
Vue.use(VueRouter);
Vue.use (Vuex);

new Vue({
    el:"#app",
    store,
    router,
    render(h){
      return h(App)
    }
})
