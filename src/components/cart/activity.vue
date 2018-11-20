/**
*作者：李恒；
*部位：购物车不为空；上部；
*功能：显示距离满足活动还差多少钱；或者以满足；当没事选择的商品时消失
**/
<template>
  <div class="cart-activity">
    <a href="javascript:(void)=0;" v-if="isex">
      <p class="left">
        <span>换购</span>已购满<em>39.00</em>元，可换购超值商品
      </p>
      <p class="right">
        <span>去选择</span>
        <img src="../../assets/img/img-cart/go.jpg"/>
      </p>
    </a>
    <a href="javascript:(void)=0;" v-else>
      <p class="left">
        <span>换购</span>购满<em>39.00</em>元，可换购超值商品<i>，还差<em>{{diff}}</em>元</i>
      </p>
      <p class="right">
        <span>查看活动</span>
        <img src="../../assets/img/img-cart/go.jpg"/>
      </p>
    </a>
    <em v-if="tat" style="display: none"></em>
  </div>
</template>

<script>
  import {mapGetters,mapActions} from 'vuex';
    export default {
        name: "activity",
      //props:["isex","diff"],
      computed:{
        ...mapGetters({
          tat:"GETTOTAL"
        })
      },
      data(){
         return {
           isex:false,
           diff:0
         }
      },
      methods:{
        _judeg(){
          //console.log(this.tat);
          if(this.tat>=39){
            this.isex=true;
          }else{
            this.diff=(39-this.tat).toFixed(2);
            this.isex=false;
          }
        }
      },
      updated(){
          this._judeg()
      },
      mounted(){
        this._judeg()
      }
    }
</script>

<style scoped>

  .cart-activity{
    width:100%;
    height:0.34rem;
    margin: 0.09rem 0;
    background-color: #fef9f3;
  }
  .cart-activity a{
    width:100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
   .cart-activity a .left{
    color:#0d0a0a;
    font-size: 0.1rem;
    display: flex;
    line-height: 100%;
    padding-left: 0.09rem;
    align-items: center;
  }
  .cart-activity a .right{
    color:#268ac9;
    font-size: 0.1rem;
    display: flex;
    align-items: center;
    line-height: 100%;
    padding-right: 0.09rem;
  }
  .cart-activity a .left span{
    display: block;
    color:#e53c54;
    font-size: 0.09rem;
    border: 1px solid #faa8b9;
    border-radius: 0.015rem;
    padding:0 0.01rem;
    line-height: 100%;
    margin-right: 0.05rem;
  }
   .cart-activity a .right img{
    width:0.04rem;
    height:0.07rem;
    margin-left:0.05rem;
  }
</style>
