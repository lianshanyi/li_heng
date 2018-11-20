<template>
    <section>
        <!--顶部信息-->
        <div class="sec-top-wrap">
            <div class="sec-top">
                <div class="sec-top-detail">
                    <div class="sec-top-left">
                        <img  src="../../assets/img/img-me/tx.png" />
                        <span>lkrelaxing</span>
                    </div>
                    <div class="sec-top-right">
                        <img src="../../assets/img/img-me/hd-3.png" />
                        <img src="../../assets/img/img-me/hd-4.png" />
                    </div>
                </div>
                <ul class="sec-top-list">
                  <!--{{main.assets?main.assets.name:"xxx"}}-->
                  <!--<li v-if="main.assets" v-for="n in main.assets?main.assets.name:[]">{{n}}</li>-->
                    <li v-if="main" :item="item" :idx="idx" v-for="(item,idx) in main.assets ? main.assets.name:[]">
                        <a href="javascript:;">
                            <h4>{{ idx==1 ? main.assets.quantity[idx].toFixed(2) : main.assets.quantity[idx].toFixed(0)}}</h4>
                            <span >{{main.assets.name[idx]}}</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

      <!--我的订单-->
        <div class="sec-list-wrap sec-list-wrap-first">
            <div class="sec-list-top">
                <h2>我的订单</h2>
                <div >
                    <span>查看更多订单</span>
                    <img src="../../assets/img/img-me/arrows-1.png" />
                </div>
            </div>
            <ul>
                <li  v-for="(item,idx) in ordList.name" :item="item" :idx="idx">
                    <!--<a href="javascript:;">-->
                        <img :src="ordList.pic[idx]" />
                        <span >{{ordList.name[idx]}}</span>
                    <!--</a>-->
                </li>
            </ul>
        </div>
        <!--常用工具列表-->
        <div class="sec-list-wrap">
            <div class="sec-list-top">
                <h2>常用工具</h2>
            </div>
          <ul>
              <router-link tag="li" :to="{path:'/hema/me/shopList/'+[idx]}" :item="comm" :idx="idx" v-for="(item,idx) in comm.id" :key="item.id" >
                <!--<a href="javascript:;">-->
                  <img :src="comm.pic[idx]" />
                  <span >{{comm.name[idx]}}</span>
                  <i v-if="comm.info[idx]">{{comm.info[idx]}}</i>
                <!--</a>-->
              </router-link>
          </ul>
        </div>
        <!--猜你喜欢-->
        <div class="sec-list-pic-wrap">
          <router-link tag="a" :to="{path:'invite'}">
              <img src="../../assets/img/img-me/ban1.jpg" />
          </router-link>
            <p><em>猜你喜欢·</em><span>EXPLORE</span></p>
        </div>
        <!--推荐列表-->
        <div class="sec-recom-wrap" >
            <a v-for="(item,index) in recomList" href="javascript:;" >
                <recom :item="item"></recom>
            </a>
        </div>
    </section>
</template>

<script>
    import Recom from "./Recom"
    export default {
        name: "container",
        props:["main","recomList","ordList","comm","idx","routerInfo"],
        components:{
            Recom
        },
        mounted(){
           console.log()
        },
        methods:{
          n(){
            // document.querySelector(".sec-top-left").style.background=""
            console.log(this.main.assets);
          },
          s(){
              // document.querySelector(".sec-top-left").style.background="red"
          },
          t(){
            console.log(this.main.assets.quantity+"main")
            this.main.assets.quantity.forEach((item,index)=>{
              console.log(index+"idx")
            })

          }
      }
    }
</script>

<style scoped>
  .bg{
    background: red;
  }
  section {
    background: #f3f3f3;
    /*猜你喜欢*/
    /*推荐列表*/ }
  section .sec-top-wrap {
    margin: 0 .15rem;
    position: relative;
    top: -.61rem;
    color: #0dcdf5;
    background: #0dcaff;
    border-radius: .04rem;
    padding-bottom: .07rem; }
  section .sec-top-wrap .sec-top {
    border-top-left-radius: 0.04rem;
    border-top-right-radius: 0.04rem;
    background: #fefefe; }
  section .sec-top-wrap .sec-top .sec-top-detail {
    display: flex;
    justify-content: space-between;
    padding: 0 .15rem; }
  section .sec-top-wrap .sec-top .sec-top-detail div:nth-of-type(1) {
    display: flex;
    align-items: center; }
  section .sec-top-wrap .sec-top .sec-top-detail div:nth-of-type(1) img {
    width: .7rem;
    height: .7rem;
    margin-right: .12rem;
    margin-top: -.1rem; }
  section .sec-top-wrap .sec-top .sec-top-detail div:nth-of-type(1) span {
    font-weight: bold;
    font-size: .13rem; }
  section .sec-top-wrap .sec-top .sec-top-detail div:nth-of-type(2) {
    display: flex;
    align-items: center; }
  section .sec-top-wrap .sec-top .sec-top-detail div:nth-of-type(2) img {
    width: .3rem;
    height: .3rem; }
  section .sec-top-wrap .sec-top .sec-top-detail div:nth-of-type(2) img:nth-of-type(1) {
    margin-right: .3rem; }
  section .sec-top-wrap .sec-top .sec-top-list {
    color: #9d9d9d;
    display: flex;
    justify-content: space-between;
    padding: 0 .37rem; }
  section .sec-top-wrap .sec-top .sec-top-list li a {
    display: flex;
    flex-direction: column;
    align-items: center; }
  section .sec-top-wrap .sec-top .sec-top-list li a h4 {
    margin-top: .16rem;
    margin-bottom: .09rem;
    color: #000;
    font-size: .16rem;
    line-height: .16rem; }
  section .sec-top-wrap .sec-top .sec-top-list li a span {
    color: #9d9d9d;
    font-size: .14rem;
    line-height: .14rem;
    margin-bottom: .13rem; }
  section .sec-list-wrap {
    margin-top: 0;
    margin-bottom: .1rem;
    background: #fff;
    padding: 0 .15rem; }
  section .sec-list-wrap .sec-list-top {
    display: flex;
    justify-content: space-between;
    padding: .15rem 0;
    border-bottom: 1px solid #eeeeee; }
  section .sec-list-wrap .sec-list-top h2 {
    letter-spacing: .012rem;
    font-size: .15rem; }
  section .sec-list-wrap .sec-list-top div {
    display: flex;
    align-items: center;
    letter-spacing: .01rem; }
  section .sec-list-wrap .sec-list-top div span {
    margin-right: .08rem; }
  section .sec-list-wrap .sec-list-top div img {
    width: .07rem;
    height: .13rem; }
  section .sec-list-wrap ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%; }
  section .sec-list-wrap ul  li {
    width: 25%; }
  section .sec-list-wrap ul  li  {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: .2rem; }
  section .sec-list-wrap ul  li  a{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  section .sec-list-wrap ul  li  img {
    margin-top: .2rem;
    margin-bottom: .1rem;
    width: .3rem;
    height: .3rem;
    color: #0cb4fc; }
  section .sec-list-wrap ul  li  span {
    font-size: .14rem;
    line-height: .14rem;
    margin-bottom: .1rem; }
  /*section .sec-list-wrap ul router-link{*/
    /*width: 100%;*/
  /*}*/
  section .sec-list-wrap ul  li  i {
    font-size: .12rem;
    color: #fd5d2a; }
  section .sec-list-wrap-first {
    margin-top: -.51rem; }
  section .sec-list-pic-wrap {
    padding: 0 .15rem; }
  section .sec-list-pic-wrap a img {
    width: 100%;
    height: .88rem; }
  section .sec-list-pic-wrap p {
    letter-spacing: .015rem;
    padding: .12rem 0;
    display: flex;
    justify-content: center;
    font-size: .14rem;
    color: #575757; }
  section .sec-list-pic-wrap p em {
    font-size: .15rem;
    line-height: .1rem;
    display: flex;
    align-items: center; }
  section .sec-list-pic-wrap p em:before {
    display: block;
    content: "";
    height: .015rem;
    width: .28rem;
    background: #7a7a7a;
    margin-right: .05rem; }
  section .sec-list-pic-wrap p span {
    display: flex;
    align-items: center;
    color: #74c0fe; }
  section .sec-list-pic-wrap p span:after {
    display: block;
    content: "";
    height: .015rem;
    width: .28rem;
    background: #74c0fe;
    margin-left: .05rem; }
  section .sec-recom-wrap {
    padding-top: .13rem;
    padding-left: .15rem;
    background: #fff; }
  section .sec-recom-wrap a {
    padding-top: .1rem;
    display: flex; }
  section .sec-recom-wrap a div img {
    width: 1.17rem;
    height: 1.17rem; }
  section .sec-recom-wrap a ul {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-left: .15rem;
    border-bottom: .01rem solid #efefef; }
  section .sec-recom-wrap a ul li {
    font-size: .13rem;
    line-height: .26rem;
    color: #8d8d8d; }
  section .sec-recom-wrap a ul li h4 {
    width: 1.6rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: .16rem;
    color: #0b0b0b;
    line-height: .27rem; }
  section .sec-recom-wrap a ul li em {
    border: 1px solid #b5542a;
    font-size: .1rem;
    line-height: .3rem;
    color: #db4605;
    border-radius: .03rem; }
  section .sec-recom-wrap a ul li span {
    font-weight: 400;
    font-size: .13rem;
    color: #f6251a;
    margin-left: -.02rem; }
  section .sec-recom-wrap a ul li b {
    color: #9d9d9d; }
  section .sec-recom-wrap a ul li b:before {
    margin-left: .08rem;
    content: "/";
    color: #dfdfdf; }
  section .sec-recom-wrap a ul li:last-of-type {
    justify-self: flex-end;
    display: flex;
    justify-content: space-between; }
  section .sec-recom-wrap a ul li:last-of-type img {
    height: .22rem;
    width: .22rem;
    margin-right: .15rem; }
  section .sec-recom-wrap a:last-of-type {
    margin-bottom: 1rem; }
</style>
