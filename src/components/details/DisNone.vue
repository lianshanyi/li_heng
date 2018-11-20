<template>
  <div>
    <div class="masking" @click="_tojian"></div>
    <div :class="clas[i]">
      <div class="tan-top">
        <img :src="onegoods?onegoods.pic[0]:[]" class="main-pic"/>
        <div class="tan-top-right">
          <div class="clase-and-price">
            <p>
              <span>￥</span>
              <b>{{onegoods?onegoods.newPrice:[]}}</b>
              <em>{{onegoods?onegoods.unit:[]}}</em>
              <i>￥{{onegoods?onegoods.oldPrice:[]}}</i>
            </p>
            <img src="../../assets/img/img-cart/close.png" @click="_tojian"/>
          </div>
          <div class="repertory-num">
            <p>库存:<span>{{onegoods?onegoods.kucun:[]}}</span>盒</p>
            <p>已选:<span>{{onegoods?onegoods.num:[]}}</span>盒</p>
          </div>
        </div>
      </div>
      <div class="spec">
        <div class="for-border">
          <p>规格<span>{{onegoods?onegoods.standard:[]}}</span></p>
        </div>
      </div>
      <div class="purchase">
        <p>购买数量（盒）</p>
        <div class="num">
          <button @click="_sub">-</button>
          <input type="text" v-model="onegoods.num">
          <!--<em>{{onegoods.num}}</em>-->
          <button @click="_add">+</button>
        </div>
      </div>
      <div class="join-cart" @click="_tosend(onegoods)">
        加入购物车
      </div>
    </div>
    </div>
</template>

<script>
  import {mapGetters,mapActions} from 'vuex';
    export default {
        name: "DisNone",
      props:["onegoods"],
      data(){
        return {
          clas:["tanchu","xia"]
        }
      },
      methods:{
        ...mapActions({
          _tojian:"TOJIAN",
          _send:"INCGOODS"
        }),
        _tosend(gs){
          let good={
            "isxuan":true,
            "商品":gs
          }
          this._send(good);
          this._tojian();
        },
        _show(){
          let y =document.getElementsByClassName("masking");
          let x=document.getElementsByTagName("html");
            if(this.i==1){
                y[0].style.display="block"
              x[0].style.overflow="hidden"
            }else if(this.i==0){
              y[0].style.display="none"
              x[0].style.overflow="auto"
            }
        },
          _add(){
            this.onegoods.num++;
            if(this.onegoods.num>this.onegoods.kucun){
              this.onegoods.num=this.onegoods.kucun
            }
          },
        _sub(){
          this.onegoods.num--;
          if(this.onegoods.num<1){
            this.onegoods.num=1
          }
        },
        _change(){
           let buts= document.getElementsByTagName("button");
           if(this.onegoods.num>1){
             buts[0].style.color="#009de9"
           }else{
             buts[0].style.color="#d9d9d9"
           }
          if(this.onegoods.num>=this.onegoods.kucun){
            buts[1].style.color="#d9d9d9"
          }else{
            buts[1].style.color="#009de9"
          }
        }
      },
      updated(){
          this._change(),
            this._show()
      },
      computed:{
        ...mapGetters({
          i:"GETXX"
        })
      }
    }
</script>

<style scoped>
  .tanchu{
    width:100%;
    height:2.32rem;
    background-color: #fff;
    z-index: 10000;
    position: fixed;
    bottom:-2.48rem;
    left:0;
    transition: 0.5s;
  }
  .xia{
    width:100%;
    height:2.32rem;
    background-color: #fff;
    z-index: 10000;
    position: fixed;
    left:0;
    transition: 0.5s;
    bottom:0;
  }
   .tan-top{
    width:100%;
    height:0.86rem;
    position: relative;
  }
   .tan-top .main-pic{
    width:0.92rem;
    height:0.9rem;
    border-radius: 0.05rem;
    position: absolute;
    top:-0.16rem;
    left:0.11rem;
  }
   .tan-top .tan-top-right{
    width:2.735rem;
    height:0.86rem;
    float: right;
  }
   .tan-top .tan-top-right .clase-and-price{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
   .tan-top .tan-top-right .clase-and-price p{
    color:#ff3c40;
    font-size: 0.13rem;
    padding-left: 0.14rem;
    padding-top: 0.15rem;
  }
   .tan-top .tan-top-right .clase-and-price p span{
    font-size: 0.14rem;
  }
  .tanchu .tan-top .tan-top-right .clase-and-price p b{
    font-weight: 600;
    font-size: 0.19rem;
  }
   .tan-top .tan-top-right .clase-and-price p em{
    color:#868686;
  }
   .tan-top .tan-top-right .clase-and-price p i{
    color:#c6c6c6;
    font-size: 0.11rem;
    text-decoration: line-through;
  }
   .tan-top .tan-top-right .clase-and-price img{
    width:0.17rem;
    height:0.17rem;
    margin-right: 0.14rem;
  }
   .tan-top .tan-top-right .repertory-num p{
    color:#1b1b1b;
    font-size: 0.1rem;
    padding-left: 0.11rem;
  }
  .spec{
    width:100%;
    height:0.65rem;
  }
  .spec .for-border{
    border-top:1px solid #eeeeee;
    border-bottom:1px solid #eeeeee;
    height:100%;
    margin: 0 0.11rem;
  }
  .spec p{
    color:#252525;
    font-size: 0.12rem;
    padding-top: 0.16rem;
  }

  .purchase{
    width:100%;
    height:.41rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .purchase p{
    font-size: 0.12rem;
    color:#232323;
    padding-left:0.11rem;
  }
  .num{
    display: flex;
    height: 0.225rem;
    width:0.845rem;
    border:0.01rem solid #ececec;
    border-radius: 0.015rem;
    padding-right:0.11rem;
  }
  .num button{
    width:0.225rem;
    height: 0.225rem;
    background-color: #fafafa;
  }
  .num button:first-of-type{
    border-right: 0.01rem solid #ececec;
    color:#d9d9d9;
  }
  .num button:last-of-type{
    border-left: 0.01rem solid #ececec;
    color:#009de9;
  }
  .num input{
    width:0.39rem;
    height:100%;
    text-align: center;
  }
  .join-cart{
    color:#fff;
    width:100%;
    height:0.41rem;
    border-top:1px solid #78d7e9;
    background-color: #0ab0fe;
    font-size: 0.13rem;
    text-align: center;
    line-height: 0.41rem;
  }
  .masking{
    width:100%;
    height:100%;
    position: fixed;
    top:0;
    left:0;
    z-index: 9999;
    background-color: black;
    opacity: 0.7;
    display: none;
  }
</style>
