<template>
        <section>
            <header>
                <!--倒计时-->
                <ul class="count-down">
                    <li v-for="(tim,z) in times" >
                        <em>{{tim}}</em>
                    </li>
                </ul>
            </header>
            <!--食物类型-->
            <div class="container" :item="item" idx="idx" v-for="(item,idx) in eatDayData">
                <div class="banner-con" >
                        <img   v-for="pic in item.pic ? item.pic:[]" :src="pic"/>
                </div>
                <!--食物列表-->
                <ul class="goodslist">
                    <li v-for="(it,idxt) in item.foods">
                        <em>{{it.repertory ==1 ?'':'已售完'}}</em>
                        <!--<a href="javascript:;">-->
                      <!--<div>{{it.repertory}}</div>-->

                            <img  :src="it.foodsPic"/>

                            <h3>{{it.title}}</h3>
                            <span>
                        <span :class="it.discountInfo ? 'show' : 'hide'">{{it.discountInfo}}</span><i></i>
                    </span>
                            <i :class="it.costPrice ? 'show' : 'hide'">￥{{it.costPrice}}</i>
                            <p>
                                <span>￥{{it.currentPrice}}<span>/{{it.unit}}</span></span>
                                <img :src="it.repertory ==1 ? addBtn[0]:addBtn[1]" class="add-cart"/>
                            </p>
                        <!--</a>-->
                    </li>
                </ul>
            </div>
        </section>

</template>

<script>
    // import {countDown,parabola} from "../../assets/js/effect";
    export default {
        name: "Section",
        props:["eatDayData","addBtn","countDown"],
      data(){
          return{
            times:[],
          }
      },
      created(){
          setInterval(this._time,10000)
      },
        methods:{
          _time(){
            this.times=[];
            let day=new Date();
            let time=day.getTime();
            let str="2018/10/26 00:00:00:00";
            let endDate=new Date(str);
            var end =endDate.getTime();
            var left=end-time;
            if(left>=0){
              this.times.push(Math.floor(left/1000/60/60/24));
              this.times.push(Math.floor(left/1000/60/60%24));
              this.times.push(Math.floor(left/1000/60%60));
              this.times.push(Math.floor(left/1000%60));
              this.times.push(Math.floor(left%1000/10));
            }
          }
        },
        mounted(){
            //countDown();
            console.log(this.xx);
          setInterval(this._time,100)
        }
    }
</script>

<style scoped>
  .show{
    opacity: 1;
  }
  .hide{
    opacity: 0;
  }
  section{
    margin-top: .53rem;
  }
  section header {
    position: relative;
    height: 3.34rem;
    background: url("../../assets/img/img-eatday/bg-top-1.jpg");
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%; }
  section header ul {
    height: .32rem;
    position: absolute;
    left: .72rem;
    bottom: .56rem;
    /*left: .7rem;*/
    /*bottom: .52rem;*/
    display: flex; }
  section header ul li {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: .15rem;
    /*margin-right: .13rem;*/
    width: .34rem;
    height: .34rem;
    border-radius: .02rem;
    background: #412851;
    /*background: blue;*/
  }
  section header ul li em {
    font-size: .15rem;
    color: #fff; }
  section .container .banner-con  img {
    width: 100%;
    /*height: 1.32rem; */
  }
  section .container ul {
    display: flex;
    /*justify-content: space-between;*/
    padding: .05rem .12rem 0;
    background: #fe7b2b;
    width: 100%;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    flex-wrap: wrap; }
  section .container ul li {
    position: relative;
    padding: 0 .08rem .08rem;
    margin-bottom: .05rem;
    width: 32.2%;
    margin-right: 1.7%;
    background: #fff;
    border-radius: .03rem;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box; }
  section .container ul li:nth-of-type(3n){
    margin-right: 0;
  }
  section .container ul li em {
    width: 100%;
    position: absolute;
    top: .72rem;
    left: 0;
    font-size: .12rem;
    line-height: .19rem;
    color: #f4f4f4;
    background: #000;
    opacity: .32;
    text-align: center; }
  section .container ul li  {
    display: flex;
    flex-direction: column; }
  section .container ul li  img {
    width: 100%;
    height: .95rem; }
  section .container ul li  h3 {
    font-size: .12rem;
    color: #030303;
    font-weight: 400;
    margin-top: -.02rem;
    height: .36rem;
    overflow: hidden;
    line-height: .18rem; }
  section .container ul li  > span {
    margin-top: .05rem;
    color: #e62625;
    font-size: .1rem; }
  section .container ul li  > span > span {
    margin: 0 .02rem;
    border-radius: .02rem;
    border: .01rem solid #e62625; }
  section .container ul li  i {
    color: #cbcbcb;
    margin-top: .05rem;
    font-size: .1rem;
    text-decoration: line-through; }
  section .container ul li  p {
    display: flex;
    justify-content: space-between;
    align-items: flex-end; }
  section .container ul li  p span {
    color: #f65646;
    font-weight: bold;
    font-size: .11rem; }
  section .container ul li  p span span {
    font-weight: 100;
    font-size: .09rem;
    color: #8d8c8b; }
  section .container ul li  p img {
    width: .24rem;
    height: .24rem; }
</style>
