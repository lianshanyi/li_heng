/**
*作者：李恒；
*部位：购物车商品列表
*功能：无
**/
<template>
  <div>
    <ul class="goods-list">
      <li v-for="(pro,ins) in productList">
        <a>
          <div class="shop-one">
            <div class="shop-top">
              <div class="imgs">
                <img :src="pro.商品.xuan[pro.isxuan?0:1]" class="xuan" @click="_choose(ins)"/>
                <img :src="pro.商品.pic[0]" class="pic"/>
              </div>
              <div class="caozuo">
                <p class="title">{{pro.商品.name}}</p>
                <div class="guige-price-num">
                  <div class="guige-price">
                    <p class="guige">规格：<span>{{pro.商品.standard}}</span></p>
                    <p class="price">￥<span>{{pro.商品.newPrice}}</span><i></i></p>
                  </div>
                  <div class="num">
                    <button @click="_minus(ins)">-</button>
                    <input type="text" v-model="pro.商品.num" @change="_change(ins)"/>
                    <button @click="_add(ins)">+</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="shop-bottom">
              <p>
                小计：<span>￥<i>{{(pro.商品.newPrice*pro.商品.num).toFixed(2)}}</i></span>
              </p>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapGetters,mapActions} from 'vuex';
    export default {
        name: "goodsList",
      methods:{
        ...mapActions({
          _choose:"ISON",
          _add:"INNUM",
          _minus:"INSUB",
          _change:"TOVAA"
        })
      },
      computed:{
        ...mapGetters({
          productList:"GETGOODS"
        })
      }
    }
</script>

<style scoped>
  .goods-list{
    width:100%;
  }
  li{
    width:100%;
    background-color: #fff;
    height:1.335rem;
    margin-bottom: 0.09rem;
  }
  li a{
    display: block;
    width:100%;
    height: 100%;
  }
  li a .shop-one .shop-top{
    display: flex;
    justify-content: space-between;
  }
  li a .shop-one .shop-top .imgs{
    display:flex;
    align-items: center;
    justify-content: space-between;
  }
  li a .shop-one .shop-top .imgs .xuan{
    width:0.17rem;
    height:0.17rem;
    border-radius: 50%;
    margin-left: 0.1rem;
  }
  li a .shop-one .shop-top .imgs .pic{
    width:0.96rem;
    height:0.96rem;
    margin-left: 0.05rem;
  }
  li a .shop-one .shop-top .caozuo{
    width:100%;
    height:0.96rem;
    box-sizing: content-box;
    border-bottom: 1px solid #f8f8f8;
    margin: 0 0.09rem;
  }
  li a .shop-one .shop-top .caozuo .title{
    color:#323232;
    font-size: 0.11rem;
    padding-top: 0.12rem;
    margin-bottom: 0.2rem;
  }
  li a .shop-one .shop-top .caozuo .guige-price-num{
    display: flex;
    justify-content: space-between;
  }
  li a .shop-one .shop-top .caozuo .guige-price-num .guige-price .guige{
    color:#8d8d8d;
    font-size: 0.105rem;
  }
  li a .shop-one .shop-top .caozuo .guige-price-num .guige-price .price{
    color:#d12838;
    font-size: 0.11rem;
  }
  li a .shop-one .shop-top .caozuo .guige-price-num .guige-price .price i{
    color:#939393;
    font-size: 0.105rem;
  }
  li a .shop-one .shop-top .caozuo .guige-price-num .num{
    display: flex;
    height: 0.225rem;
    width:0.845rem;
    align-self: flex-end;
    border:0.01rem solid #ececec;
    border-radius: 0.015rem;
  }
  li a .shop-one .shop-top .caozuo .guige-price-num .num button{
    width:0.225rem;
    height: 0.225rem;
    background-color: #fafafa;
  }
  li a .shop-one .shop-top .caozuo .guige-price-num .num button:first-of-type{
    border-right: 0.01rem solid #ececec;
    color:#d9d9d9;
  }
  li a .shop-one .shop-top .caozuo .guige-price-num .num button:last-of-type{
    border-left: 0.01rem solid #ececec;
    color:#009de9;
  }
  li a .shop-one .shop-top .caozuo .guige-price-num .num input{
    width:0.39rem;
    height:100%;
    text-align: center;
  }
  li a .shop-one .shop-bottom{
    color:#8b8b8b;
    font-size: 0.115rem;
    text-align: right;
    height:0.37rem;
  }
  li a .shop-one .shop-bottom p{
    line-height: 0.37rem;
  }
  li a .shop-one .shop-bottom p span{
    color:#fa351c;
    padding-right: 0.10rem;
    font-size:0.12rem;
    font-weight: 600;
  }
</style>
