/**
*作者：李恒；
*部位：白色购物车；
**/
<template>
  <div>
    <header-white></header-white>
    <has-shoping v-if="produstList.length"></has-shoping>
    <cart-empty v-else></cart-empty>
    <gusee></gusee>
    <gusee-list :gusee="gusee"></gusee-list>
    <div id="m-b-0">
      <tatal v-if="produstList.length"></tatal>
    </div>

  </div>
</template>

<script>
  //Tatal, GuseeList, Gusee, HasShoping, CartEmpty,
  const urltwo="http://localhost:3000/recommend";
  import {mapGetters,mapActions} from 'vuex';
  import headerWhite from "../components/cart/headerWhite";
  import hasShoping  from "../components/cart/hasShoping";
  import cartEmpty from "../components/cart/cartEmpty";
  import gusee from "../components/cart/gusee";
  import guseeList from "../components/cart/guseeList";
  import tatal from "../components/cart/tatal";
    export default {
        name: "whiteCart",
      components: {headerWhite,hasShoping,cartEmpty,gusee,guseeList,tatal},
      data(){
        return{
          tatalMonry:0,
          gusee:[]
        }
      },
      created(){
        this._initData()
      },
      methods:{
        _initData(){
          fetch(urltwo).then(response=>{
            response.json().then(data=>{
              if(response.ok){
                this.gusee=data;
              }
            })
          })
        }
      },
      computed:{
        ...mapGetters({
          produstList:"GETGOODS"
        })
      }
    }
</script>

<style scoped>
  *{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    width: 100%
  }
  body{
    background-color: #f5f5f5;
  }
  #m-b-0{
    margib-bottom:0;
    position: fixed;
    bottom: 0;
  }
  #m-b-0 div{
    margin-bottom: 0;
  }
</style>
