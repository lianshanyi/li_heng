<template>
  <div>
    <header-blue></header-blue>
    <has-shoping v-if="produstList.length"></has-shoping>
    <cart-empty v-else></cart-empty>
    <gusee></gusee>
    <gusee-list :gusee="gusee"></gusee-list>
    <tatal v-if="num"></tatal>
    <cart-footer></cart-footer>
  </div>
</template>

<script>
  const urltwo="http://localhost:3000/recommend";
  import {mapGetters,mapActions} from 'vuex';
  import headerBlue from "../components/cart/headerBlue";
  import hasShoping  from "../components/cart/hasShoping";
  import cartEmpty from "../components/cart/cartEmpty";
  import gusee from "../components/cart/gusee";
  import guseeList from "../components/cart/guseeList";
  import tatal from "../components/cart/tatal";
  import CartFooter from '../components/cart/CartFooter'
  import {parabolaBottom} from "../assets/js/effect";

  export default {
        name: "BlueCart",
      components: {CartFooter, headerBlue,hasShoping,cartEmpty,gusee,guseeList,tatal},
      data(){
        return{
          tatalMonry:0,
          gusee:[]
        }
      },
      created(){
        this._initData()
      },
      updated(){
        this.cartE()
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
        },
        cartE(){
          let cartE=document.querySelectorAll(".shopG")
          for(let i=0;i<cartE.length;i++){
            cartE[i].onclick=parabolaBottom;
          }
        }
      },
      computed:{
        ...mapGetters({
          produstList:"GETGOODS",
          num:"GETNUM"
        })
      }
    }
</script>

<style scoped>

</style>
