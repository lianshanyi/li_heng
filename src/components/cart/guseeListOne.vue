/**
*作者：李恒；
*部位：购物车推荐商品
*功能：加入购物车
**/
<template>
  <li>
    <a href="javascript:void(0);" class="guseeListA">
      <div class="pic">
        <img :src="gus.pic[0]">
      </div>
      <div class="shopJieshao">
        <p class="shopName">{{gus.name}}</p>
        <div class="shopMaG">
          <div class="shopM">
            <em class="fuhao">￥</em>
            <span class="price">{{gus.newPrice}}</span>
            <em class="danwei">{{gus.unit}}</em>
          </div>
          <div class="shopG " @click="_send(guss)">
          </div>
        </div>
      </div>
    </a>
  </li>
</template>

<script>
  import {mapGetters,mapActions} from 'vuex';
    export default {
        name: "guseeListOne",
      props:["gus","pro","ind"],
      data(){
          return {
            guss:{
              "isxuan":true,
              "商品":this.gus
            }
          }
      },
      methods:{
        ...mapActions({
          _send:"INCGOODS"
        })
      }
    }
</script>

<style scoped>
  li{
    width:1.87rem;
    height:2.19rem;
    float:left;
    background-color: #fff;
    margin-bottom: 0.025rem;
  }
  li:nth-of-type(2n-1){
    float:left;
    border-right:0.005rem solid #f5f5f5;
  }
  li:nth-of-type(2n){
    float:right;
    border-left:0.005rem solid #f5f5f5;
  }
  li .pic{
    width:1.86rem;
    height:1.45rem;
    margin:0 auto;
  }
  li .pic img{
    width:1.86rem;
    height:1.45rem;
  }
  li .guseeListA{
    display: block;
  }
  li .guseeListA .shopJieshao{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height:0.74rem;
    padding: 0 0 0.08rem 0.08rem;
  }
  li .guseeListA .shopJieshao .shopName{
    color:#1b1b1b;
    font-size:0.13rem;
  }
  li .guseeListA .shopJieshao .shopMaG{
    display: flex;
    justify-content: space-between;
    padding-right: 0.1rem;
  }
  .shopMaG em,.shopMaG span,.shopMaG i{
    display:block;
    font-style: normal;
  }
  li .guseeListA .shopJieshao .shopMaG .shopM{
    color:#ef3a40;
    font-size: 0.1rem;
    display: flex;
  }
  li .guseeListA .shopJieshao .shopMaG .shopM .danwei{
    font-size:0.1rem;
    color:#878787;
  }
  li .guseeListA .shopJieshao .shopMaG .shopG{
    width:0.21rem;
    height:0.21rem;
    border-radius: 50%;
    background-image: url(../../assets/img/img-cart/cart.png);
    background-size: 100%;
  }
</style>
