<template>
  <div>
    <header class="trade-top">
      <div class="header" id="trtop">
        <header-title></header-title>
        <top-nav :gds="goods"></top-nav>
      </div>
      <div class="nono">
          <div class="back">
            <i class="iconfont icon-back" @click="back"></i>
          </div>
        <router-link :to="{path:'/cart'}" tag="div" class="shop-cart">
            <i class="iconfont icon-gouwuche"></i>
            <div class="count" v-if="num">{{num}}</div>
        </router-link>
      </div>
    </header>
  </div>
</template>

<script>
  import {mapGetters,mapActions} from 'vuex';
  import HeaderTitle from './HeaderTitle';
  import TopNav from './TopNav'
    export default {
        name: "DetailsHeader",
      props:["goods"],
      data(){
          return {
            count:0
          }
      },
      components: {TopNav, HeaderTitle},
      computed:{
        ...mapGetters({
          num:"GETNUM"
        })
      },
      methods:{
          back(){
              window.history.back(-1);
          },
        handleScroll(){
          var scrollTop=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;
          let he=document.getElementById('trtop');
          if(he==null||he=="undefind"){
            return
          }
          let y=1/375;
          //console.log(scrollTop*y)
          let ops=0;
          ops+=scrollTop*y;
          if(ops>1){
            ops=1
          }
          //console.log(he.style)
          he.style.opacity=ops;
        }
      },
      mounted(){
        window.addEventListener("scroll",this.handleScroll)
      }
    }
</script>

<style scoped>
  .trade-top{
    width:100%;
    height:0.83rem;
    position: fixed;
    top:0;
    left:0;
    z-index: 100;
  }
   .header{
    width:100%;
    height:100%;
    opacity: 0;
     background-color: #fff;
  }
  .trade-top .back{
    position: relative;
    width:0.315rem;
    height: 0.315rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 0.07rem;
    z-index: 999;
    background-color: #ccc;
    top:0;
  }
  .back .icon-back{
    font-size: 0.19rem;
    color:#fff;
  }
  .nono{
    width:100%;
    height: 0.44rem;
    position: absolute;
    top:0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .shop-cart{
    position: relative;
    width:0.315rem;
    height: 0.315rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 0.07rem;
    z-index: 999;
    background-color: #ccc;
  }
  .shop-cart .icon-gouwuche{
    font-size: 0.19rem;
    color:#fff;
  }
  .shop-cart .count{
    position: absolute;
    padding:0.02rem 0.04rem;
    border-radius: 0.08rem;
    background-color: #ee3721;
    line-height: 100%;
    color:#fff;
    font-size: 0.08rem;
    right:-0.02rem;
    top:-0.02rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
