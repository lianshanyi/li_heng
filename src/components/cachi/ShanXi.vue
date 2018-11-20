<template>
  <div class="shanxi">
    <div class="title">
      <img :src="sxi">
    </div>
    <ul class="shop-list">
      <li class="shop-one" v-for="(sxlione,i) in sxli">
        <a>
          <div class="left">
            <img :src="sxlione.pic[1]">
            <div class="piao">
             {{sxlione?sxlione.biao:[]}}
            </div>
          </div>
          <div class="right">
            <h3>{{sxlione?sxlione.name:[]}}</h3>
            <p>{{sxlione?sxlione.introduce:[]}}</p>
            <div class="price-add">
              <p>￥<span>{{sxlione?sxlione.newPrice:[]}}</span><em>{{sxlione?sxlione.unit:[]}}</em></p>
              <img src="../../assets/img/img-cart/add.png" @click="_hi(sxlione)" class="add"/>
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
        name: "ShanXi",
      props:["sxi","sxli"],
      methods:{
        ...mapActions({
          _send:"INCGOODS"
        }),
        _hi(hi){
          let good={
            "isxuan":true,
            "商品":hi
          };
          this._send(good);
        }
      }
    }
</script>

<style scoped>
  .shanxi{
    width:100%;
    background-color: #e8d0c3;
  }
  .shanxi .title{
    width: 100%;
    height:0.5rem;
  }
  .shanxi .title img{
    width:100%;
  }
  .shanxi ul li a .left{
    position: relative;
    margin-right: 0.06rem;
  }
  .shanxi ul li a .left .piao{
    position: absolute;
    left:0;
    top:0;
    font-size: 0.09rem;
    color:#fff;
    width:0.51rem;
    height:0.15rem;
    background-color: #7a31c3;
    text-align: center;
    line-height: 0.15rem;
    border-radius: 0.04rem 0 0.04rem 0;

  }
  .shanxi ul li{
    background-color: #fff;
    height:1.21rem;
    margin: 0 0.11rem;
    border-radius: 0.05rem;
    margin-bottom: 0.06rem;
  }
  .shanxi ul li:last-of-type{
    margin-bottom: 0;
  }
  .shanxi ul li a{
    display: flex;
    border-radius: 0.05rem;
  }
  .shanxi ul li a img{
    width:1.21rem;
    height:1.21rem;
    border-radius: 0.05rem 0 0 0.05rem;
  }
  .shanxi ul li a .right{
    width:100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .shanxi ul li a .right h3{
    font-size: 0.14rem;
    color:#000000;
    margin-top: 0.1rem;
  }
  .shanxi ul li a .right p{
    color:#7c7c7c;
    font-size: 0.11rem;
  }
  .shanxi ul li a .right .price-add{
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.1rem;
  }
  .shanxi ul li a .right .price-add p{
    color:#e52e25;
    font-size: 0.07rem;
  }
  .shanxi ul li a .right .price-add p span{
    font-size: 0.11rem;
  }
  .shanxi ul li a .right .price-add p em{
    font-size: 0.095rem;
    color:#8b8b8b;
  }
  .shanxi ul li a .right .price-add img{
    width:0.225rem;
    height: 0.225rem;
    border-radius: 50%;
    margin-right: 0.1rem;
  }
</style>
