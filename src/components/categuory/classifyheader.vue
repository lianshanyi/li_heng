<template>
    <div class="calssifyheader">
       <header>
        <div class="leftheader" @click="back">

        </div>
        <div class="centerheader">
          <p  @click="d">{{fenleimingcheng.classOne?fenleimingcheng.classOne.className:[]}}</p>
          <div class="sanjiao">

          </div>
        </div>
        <div class="rightheader">
          <a href="#">
          </a>
          <router-link :to="{path:'/cart'}" tag="a" style="position:relative">
            <em class="num" v-if="num">{{num}}</em>
          </router-link>
        </div>
      </header>
      <div class="list-wrap" style="display: none" @click="d"></div>
      <ul class="list">
        <li class="oneli" v-for="(fenle,ins) in fenleimingcheng">{{fenle?fenle.className:[]}}</li>
      </ul>
      </div>

</template>

<script>
  import {mapGetters,mapActions} from 'vuex'
    export default {
          name: "calssifyheader",
          props:["fenleimingcheng"],
          computed:{
            ...mapGetters({
              num:"GETNUM"
            })
          },
          methods:{
            back(){
                window.history.back(-1);
            },
            c(){
              let lis= document.getElementsByClassName("oneli");
              for(let i=0;i<lis.length;i++){
                lis[i].onclick=function () {
                  for(let j=0;j<lis.length;j++){
                    lis[j].style.color="black"
                    lis[j].style.backgroundImage="none"
                  }
                    this.style.color="#0eb1ff",
                    this.style.background="url(../../assets/img/img-cart/xuanze.jpg) no-repeat 2.275rem center";
                    this.style.backgroundSize="0.16rem 0.16rem"
                }

              }
            },
            d(){
                //三角旋转
                let sanjiao=document.getElementsByClassName("sanjiao");
                  if(sanjiao[0].className=="sanjiao xuan"){
                    sanjiao[0].className="sanjiao"
                  }else if(sanjiao[0].className=="sanjiao"){
                    sanjiao[0].className="sanjiao xuan"
                  }
                  let wrap=document.getElementsByClassName("list-wrap");
                      if(wrap[0].style.display=="none"){
                        wrap[0].style.display="block";
                      }else{
                        wrap[0].style.display="none";
                      }
                  let list =document.getElementsByClassName("list");
                     let x= this._getstyle(list[0],"height");
                      if(x == "0px"){
                        let y=0;
                        let timer=setInterval(()=>{
                          y+=10;
                          if(y>=389){
                            clearInterval(timer);
                            y=389;
                          }
                          list[0].style.height=y+"px";
                        },5)
                      }else{
                        let z=parseFloat(x);
                        let timer2=setInterval(()=>{
                          z-=10;
                          if( z<=0){
                            clearInterval(timer2);
                            z=0;
                          }
                          list[0].style.height=z+"px";
                        },5)
                      }

            },
            _getstyle(obj,attr){
              return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj,1)[attr];
            }
          },
          mounted(){
             this.c();
         }
     }
</script>

<style scoped>
  header{
    width: 100%;
    height: 0.44rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background:white;
    border-bottom: 1px solid #ebebeb;
    position: fixed;
  }
  .num{
    position: absolute;
    font-size: 0.08rem;
    background-color: #e9372c;
    color: #fff;
    border-radius: 0.1rem;
    line-height: 100%;
    padding: 0.03rem 0.04rem;
    left: 0.18rem;
    top: 0.01rem;
    display: block;
  }
  header .leftheader{
    width: 1.45rem;
    height: 0.44rem;
    background:url("../../assets/img/img-sort/bluefanhui.jpg") no-repeat 0.15rem center;
    background-size:0.165rem 0.215rem;
  }
  header .centerheader{
    width: 1.435rem;
    display: flex;
  }
  header .centerheader p{
    width: 0.68rem;
    text-align: center;
    font-size: 0.15rem;
    font-weight: 600;
    color: #000000;
    line-height: 0.44rem;
  }
  .list-wrap{
      width: 100%;
      height: 100%;
      z-index: 2;
      position: fixed;
      top: 0.44rem;
      background: rgba(0,0,0,.3);
  }
  .list{
    font-size: 0.15rem;
    width: 100%;
    background: #ffffff;
    overflow-x: hidden;
    overflow-y: scroll;
    height:0;
    position: absolute;
    top:0.44rem;
    z-index: 9999;
  }
  .list li{
    line-height: 0.525rem;
    text-align: center;
    border-bottom: 1px solid #e3e3e3;
    color: #2c2c2c;
  }
  .centerheader .sanjiao{
    width:0.085rem;
    height: 0.04rem;
    background-image:url("../../assets/img/img-sort/sanjiao.png");
    background-size:0.085rem 0.04rem;
    transition: 0.5s;
    margin-top: 0.23rem;
  }
  .centerheader .xuan{
    transform: rotate(180deg);
    transform-origin: center;
  }
  header .rightheader{
    display: flex;
  }
  header .rightheader a{
    display: block;
    width: 0.365rem;
    height: 0.44rem;
  }
  header .rightheader a:nth-child(1){
    background:url("../../assets/img/img-sort/bluefangda.jpg") no-repeat center center;
    -webkit-background-size: 0.22rem 0.22rem;
    background-size: 0.22rem 0.22rem;
  }
  header .rightheader a:nth-child(2){
    background:url("../../assets/img/img-sort/bluegouwuche.jpg") no-repeat center center;
    -webkit-background-size: 0.22rem 0.22rem;
    background-size: 0.22rem 0.22rem;
  }

</style>
