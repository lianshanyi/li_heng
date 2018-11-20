import Vue from 'vue'
import Vuex from 'vuex';
import Router from 'vue-router'
import whiteCart from '../pages/whiteCart'
import deta from '../pages/deta'
import cateGory from '../pages/cateGory'
import ClassIfy from '../pages/ClassIfy'
import CommoDityType from '../pages/CommoDityType'
import cachi from '../pages/cachi'
import HemaMe from '../pages/HemaMe'
import HemaMeShopList from '../pages/HemaMeShopList'
import HemaIndexEatday from '../pages/HemaIndexEatday'
import BlueCart from '../pages/BlueCart'
import index from '../pages/index'
import dazui from '../pages/dazui'
Vue.use(Router)
Vue.use(Vuex)
export default new Router({
  routes: [
    {
      path: '/dazui',
      name: 'dazui',
      component: dazui
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/cart',
      name: 'whiteCart',
      component: whiteCart
    },
    {
      path: '/blue',
      name: 'BlueCart',
      component: BlueCart
    },
    {
      path: '/deta',
      name: 'deta',
      component: deta
    },
    {
      path: '/sort',
      name: 'cateGory',
      component: cateGory
    },
    {
      path: '/ClassIfy',
      name: 'ClassIfy',
      component: ClassIfy
    },
    {
      path: '/invite',
      name: 'CommoDityType',
      component: CommoDityType
    },
    {
      path: '/cachi',
      name: 'cachi',
      component: cachi
    },
    {
      path: '/me',
      name: 'HemaMe',
      component: HemaMe
    },
    {
      path: '/hema/me/shopList/1',
      name: 'HemaMeShopList',
      component: HemaMeShopList,
      params:{
        id:432
      }
    },
    {
      path: '/eatday0',
      name: 'HemaIndexEatday',
      component: HemaIndexEatday,
      params:{
        id:456
      }
    }
  ]
})
