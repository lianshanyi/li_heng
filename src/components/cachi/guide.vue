<template>
  <div class="guide">
    <div class="guide-title">
      <img :src="gu">
    </div>
    <ul>
      <li v-for="(pro,ins) in guls">
        <a>
          <img :src="pro.pic[1]" class="pic">
          <h3>{{pro?pro.name:[]}}</h3>
          <p style="display: flex;height:0.15rem"><i class="tejia" v-if="pro.special">{{pro?pro.special:[]}}</i><em style="display:block"></em></p>
          <p class="old-price"><i v-if="pro.oldPrice">￥</i>{{pro?pro.oldPrice:[]}}</p>
          <p class="new-price">￥<span>{{pro?pro.newPrice:[]}}</span><em>/盒</em></p>
          <img src="../../assets/img/img-cart/add.png" class="add" @click="_tosend(pro)">
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapGetters,mapActions} from 'vuex'
    export default {
        name: "guide",
      props:["gu","guls"],
      methods:{
        ...mapActions({
          _send:"INCGOODS"
        }),
        _tosend(gs){
          let good={
            "idxuan":true,
            "商品":gs
          };
          this._send(good)
        }

      }
    }
</script>

<style scoped>
  .guide{
    width:100%;
    background-color: #e5d2c4;
  }
  .guide .guide-title img{
    width:100%;
  }
  .guide ul{
    padding:0 0.12rem;
    width:100%;
    display: flex;
    flex-wrap: wrap;
  }
  .guide ul li{
    background-color:#fff;
    width:1.15rem;
    height: 1.9rem;
    margin-right: 0.03rem;
    margin-bottom: 0.03rem;
    border-radius: 0.02rem;
  }
  .guide ul li:nth-of-type(3n){
    margin-right: 0;
  }
  .guide ul li a{
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
  }
  .guide ul li a .pic{
    width:1.15rem;
    height:0.95rem;
  }
  .guide ul li a h3{
    height: 0.32rem;
    color:#000;
    font-size: 0.11rem;
    margin-bottom: 0.09rem;
    margin-left: 0.08rem;
    font-weight: 100;
  }
  .guide ul li a .tejia{
    color:#e63027;
    font-size: 0.085rem;
    border:0.01rem solid #e63027;
    line-height: 0.11rem;
    text-align: center;
    border-radius: 0.02rem;
    margin-left: 0.08rem;
    display: block;
  }
  .guide ul li a .old-price{
    color:#b9b9b9;
    font-size: 0.09rem;
    text-decoration: line-through;
    line-height: 0.2rem;
    margin-left: 0.08rem;
    height: 0.2rem;
  }
  .guide ul li a .new-price{
    font-size: 0.075rem;
    color:#e52e25;
    float: left;
    margin-left: 0.08rem;
  }
  .guide ul li a .add{
    width:0.225rem;
    height: 0.225rem;
    border-radius: 50%;
    right: 0.05rem;
    bottom: 0.05rem;
    position: absolute;

  }
</style>
