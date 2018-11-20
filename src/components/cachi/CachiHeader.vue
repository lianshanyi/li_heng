<template>
  <header class="cachi">
    <img src="../../assets/img/img-cart/bank.jpg" class="back" @click="back">
    <p>{{tit?tit:[]}}</p>
    <div class="right">
      <router-link :to="{path:'/cart'}" tag="div" class="cart-num">
        <img src="../../assets/img/img-cart/cachi-cart.jpg" class="cart">
        <div class="num">{{len}}</div>
      </router-link>
      <img src="../../assets/img/img-cart/cachi-fenxiang.jpg">
    </div>
  </header>
</template>

<script>
  import {mapGetters,mapActions} from 'vuex';
    export default {
        name: "CachiHeader",
      props:["tit"],
      computed:{
        ...mapGetters({
          len:"GETNUM"
        })
      },
      methods:{
          back(){
            window.history.back(-1);
          }
      }
    }
</script>

<style scoped>
  .cachi{
    width:100%;
    height:0.44rem;
    background-color: #fff;
    display:flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #c1b5ab;
    position: fixed;
    top:0;
    left:0;
    z-index: 10;
  }
  .cachi img{
    width:0.09rem;
    height:0.16rem;
  }
  .cachi .back{
    margin-left: 0.24rem;
  }
  .cachi p{
    color:#0f0f0f;
    font-size:0.15rem ;
  }
  .cachi .right{
    display: flex;
    align-items: center;
    padding-right:0.22rem;
  }
  .cachi .right img{
    width:0.2rem;
    height:0.22rem;
  }
  .cachi .right .cart-num{
    position: relative;
    margin-right: 0.27rem;
  }
  .cachi .right .cart-num .num{
    position: absolute;
    font-size: 0.08rem;
    background-color: #e9372c;
    color:#fff;
    border-radius:0.1rem;
    line-height: 100%;
    padding: 0.04rem 0.06rem;
    left:0.11rem;
    top:-0.08rem;
  }
</style>
