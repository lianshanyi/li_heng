<template>
<div>
  <div class="name-miaoshu-fengxiang">
    <div class="name-miaoshu">
      <div class="name">{{onegoods ? onegoods.name:[]}}</div>
      <div class="miaoshu">{{onegoods ?onegoods.introduce:[]}}</div>
    </div>
    <div class="fengxiang">
      <i class="iconfont icon-tubiao212"></i>
      <p>分享</p>
    </div>
  </div>
  <div class="price-oldprice">
    <p>
      <span>￥</span>
      <b>{{onegoods ?onegoods.newPrice:[]}}</b>
      <em>{{onegoods ?onegoods.unit:[]}}</em>
      <i>￥{{onegoods?onegoods.oldPrice:[]}}</i>
    </p>
  </div>
  <div class="delivery-time">
    <img src="../../assets/img/img-cart/time.jpg">
    <p>{{str}}<span>{{xx}}</span>送达（免运费）</p>
  </div>
  <div class="selected" @click="_toadd">
    <p>已选择<span>{{onegoods ?onegoods.standard:[]}}</span></p>
    <img src="../../assets/img/img-cart/go1.jpg"/>
  </div>
</div>
</template>

<script>
  import {mapGetters,mapActions} from 'vuex';
    export default {
        name: "JieShao",
      props:["onegoods"],
      data(){
          return{
            str:"",
            xx:""
          }
      },
      methods:{
        ...mapActions({
          _toadd:"TOADD"
        }),
        _time(){
          let nowtime=new Date();
          let n=nowtime.getHours();
          let mm=nowtime.getMinutes();
          console.log(mm);
          //let m=nowtime.getTime();
          if(n>8&&n<20){
            this.str="现在下单，最快今日";
            if(mm>30){
              this.xx=(n+1)+":00--"+(n+1)+":30"
            }else{
              this.xx=(n)+":30--"+(n+1)+":00"
            }
          }else if(n>20){
            this.str="现在下单，预计最快明日";
            this.xx=(8)+":00--"+(30)+":30"
          }else if(n<8){
            this.str="现在下单，最快今日";
            this.xx=(8)+":00--"+(30)+":30"
          }
        }
      },
      created(){
        this._time();
      },
      updated(){
        this._time();
      }
    }
</script>

<style scoped>
  .name-miaoshu-fengxiang{
    width:100%;
    height:0.68rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
  }
  .name-miaoshu-fengxiang .name-miaoshu{
    padding-left: 0.11rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height:100%;
  }
  .name-miaoshu-fengxiang .name-miaoshu .name{
    color:#272727;
    font-size: 0.16rem;
    font-weight: 600;
    padding-top:0.14rem;
  }
  .name-miaoshu-fengxiang .name-miaoshu .miaoshu{
    color:#828282;
    font-size: 0.12rem;
    padding-bottom: 0.14rem;
  }
  .name-miaoshu-fengxiang .fengxiang{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .name-miaoshu-fengxiang .fengxiang .icon-tubiao212{
    color:#8b8b8b;
    font-size: 0.19rem;
  }
  .name-miaoshu-fengxiang .fengxiang{
    padding-right: 0.11rem;
  }
  .name-miaoshu-fengxiang .fengxiang p{
    color:#676767;
    font-size: 0.11rem;
  }
  .price-oldprice{
    width:100%;
    height:0.36rem;
    background-color: #fff;
  }
  .price-oldprice p{
    color:#ff3c40;
    font-size: 0.13rem;
    border-bottom: 1px solid #f6f6f6;
    padding: 0 0.11rem;
    height: 100%;
  }
  .price-oldprice p span{
    font-size: 0.14rem;
  }
  .price-oldprice p b{
    font-weight: 600;
    font-size: 0.19rem;
  }
  .price-oldprice p em{
    color:#868686;
  }
  .price-oldprice p i{
    color:#c6c6c6;
    font-size: 0.11rem;
    text-decoration: line-through;
  }

  .delivery-time{
    width:100%;
    height:0.44rem;
    display: flex;
    align-items: center;
    background-color: #fff;
  }
  .delivery-time img{
    width:0.23rem;
    height:0.15rem;
    padding-left: 0.11rem;
    margin-right: 0.06rem;
  }
  .delivery-time p{
    font-size: 0.12rem;
    color:#151515;
    line-height: 0.15rem;
  }

  .selected{
    width:100%;
    height:0.4rem;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin:0.09rem 0;
  }
  .selected p{
    font-size: 0.12rem;
    color:#0a0a0a;
    padding-left: 0.12rem;
  }
  .selected img{
    width:0.04rem;
    height:0.07rem;
    margin-right: 0.17rem;
  }
</style>
