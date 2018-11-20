//创建一个中央管理仓库
import Vue from 'vue';
import Vuex from 'vuex'
import productList from './modules/productList'
import num from './modules/num'
Vue.use(Vuex)



let store=new Vuex.Store({
  modules:{
    productList,
    num
  }
})


export default store;
