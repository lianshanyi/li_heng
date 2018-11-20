<template>
  <div class="CommodityTypesection">
    <!--<div class="gundong">-->
      <section>
        <!--顶部悬浮-->
        <div class="dingbuxuanfu">
          <a href="#">活动规则</a>
        </div>
        <!--底部滚动-->
        <div class="dibugundong">
          <ul>
            <li>f**6邀请t**5下单 获得15元App全场券</li>
            <!--<li>l**9邀请t**妹下单 获得15元App全场券</li>-->
            <!--<li>m**8邀请王**f下单 获得15元App全场券</li>-->
            <!--<li>d**5邀请赵**昭下单 获得15元App全场券</li>-->
            <!--<li>s**2邀请秦**鑫下单 获得15元App全场券</li>-->
            <!--<li>p**1邀请王**峰下单 获得15元App全场券</li>-->
            <!--<li>k**3邀请刘**坤下单 获得15元App全场券</li>-->
            <!--<li>l**4邀请沈**州下单 获得15元App全场券</li>-->
            <!--<li>e**7邀请李**根下单 获得15元App全场券</li>-->
            <!--<li>q**j邀请沈**宇下单 获得15元App全场券</li>-->
          </ul>
        </div>
      </section>

      <!--邀请好友部分-->
      <div class="yaoqing">
        <div class="giveme">
          <a href="#">
            <img src="../../assets/img/img-sort/lipinhe1.jpg" alt="">
            邀请可得
            <span>每邀请一位好友下单都将获得</span>
          </a>
          <div class="imgdiv">

          </div>
        </div>

        <div class="giveme">
          <a href="#">
            <img src="../../assets/img/img-sort/lipinhe1.jpg" alt="">
            好友可得
            <span>以好友所在城市的实际奖励为准</span>
          </a>
          <div class="imgdiv">

          </div>
        </div>
      </div>

      <!--立即分享-->
      <div class="fenxiangbufen">
        <div class="fenxiang">
          <a href="#">立即分享</a>
        </div>

      </div>

      <!--海报和当面邀请-->
      <div class="haibao">
        <a href="javascript:void(0);">
          生成海报
        </a>
        |
        <a href="javascript:void(0);">
          当面邀请
        </a>
      </div>

      <!--邀请及奖励-->
      <div class="jiangli">
        <div class="yiyaoqing">
          <a href="javascript:void(0);" @click="_cklick(0)" :class="{qin:sbs.includes(0)}">
            已邀请(13)
          </a>
          |
          <a href="javascript:void(0);" @click="_cklick(1)" :class="{qin:sbs.includes(1)}">
            获得奖励(5)
          </a>
        </div>

        <div class="yaoqingren" :item="item" idx="idx" v-for="(item,idx) in yaoqing.yiyaoqing">
          <!--1-->
          <div class="yaoqingxiangqing" >
            <div class="leftyaoqing">
              <div class="imgsdiv">
                <img :src="item.img" alt="">
              </div>
              <div class="namediv">
                <p>{{item.name}}</p>
                <span>{{item.time}}</span>
              </div>

            </div>


            <div class="rightyaoqing">
              <p :class="item.jieguo=='邀请成功' ? 'c':'b'">{{item.jieguo}}</p>
            </div>


          </div>

        </div>

        <div class="huodeyaoqing" :item="item" idx="idx" v-for="(item,idx) in yaoqing.yaoqingchenggong" style="display: none">
          <!--1-->
          <div class="yaoqingxiangqing">
            <div class="leftyaoqing">
              <div class="imgsdiv">
                <img :src="item.img" alt="">
              </div>
              <div class="namediv">
                <p>{{item.name}} <span>{{item.zhuangtai}}</span></p>
                <span>{{item.time}}</span>
              </div>

            </div>


            <div class="rightyaoqing">
              <p >{{item.jieguo}}</p>
            </div>


          </div>
        </div>

        </div>

      </div>


</template>

<script>
    export default {
        name: "CommodityTypesection",
        props:["yaoqing"],
        data(){
          return{
            "sb":0,
            "sbs":[0]
          }
        },
      methods:{
          _cklick(i){
            let one=document.getElementsByClassName("yaoqingren");
            let two =document.getElementsByClassName("huodeyaoqing");
            if(this.sbs.length>0){
              this.sbs=[];
            }
            this.sbs.push(i);
            this.sb=i;
            if(i==0){
              for(let j=0;j<one.length;j++){
                //console.log(j)
                one[j].style.display="block";
              }
              for(let k=0;k<two.length;k++){
                //console.log(k)
                two[k].style.display="none";
              }
            }
            else if(i==1){
              for(let j=0;j<one.length;j++){
                one[j].style.display="none";
              }
              for(let k=0;k<two.length;k++){
                two[k].style.display="block";
              }
            }

          }
      }
    }
</script>

<style scoped>
  .c{
    color: #18b750;
  }
  .b{
    color: #9f9f9f;
  }
  .CommodityTypesection{
    width:100%;
    -webkit-flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    margin-top:0.44rem;
  }
  section{
    width: 100%;
    height: 1.8rem;
    background: url("../../assets/img/img-sort/yaoqing1.jpg") no-repeat left 0;
    background-size:100% 1.5rem;
    position: relative;
  }

  /*顶部悬浮*/
  .dingbuxuanfu{
    width: 0.65rem;
    height: 0.2rem;
    -webkit-border-radius: 0.1rem;
    -moz-border-radius: 0.1rem;
    border-radius: 0.1rem;
    background: #597969;
    background:rgba(0,0,0,0.5);
    position: absolute;
    top:0.12rem;
    right: 0.12rem;
  }
  .dingbuxuanfu a{
    font-size: 0.11rem;
    color: #fdffff;
    line-height: 0.2rem;
    text-align: center;
    position: absolute;
    left: 0.1rem;
  }

  /*底部滚动*/
  .dibugundong{
    width: 100%;
    height: 0.3rem;
    background: #fff9d7 ;
    position: absolute;
    bottom: 0;
  }
  .dibugundong ul li{
    height: 0.3rem;
    line-height: 0.3rem;
    font-size: 0.11rem;
    color: #756646;
    text-align: center;
  }


  /*邀请好友部分*/
  .yaoqing{
    background: #fffdfc;
    padding:0.11rem 0.57rem 0.13rem 0.57rem;
  }
  .giveme{
    margin: 0 auto;
  }
  .giveme:nth-child(2){
    padding-top:0.11rem;
    margin: 0 auto;
  }
  .giveme a{
    display: flex;
    text-align: center;
    font-size: 0.14rem;
    color: #252525;
  }
  .giveme a img{
    padding-right: 0.075rem;
    width: 0.17rem;
    height: 0.17rem;
  }
  .giveme a span{
    padding-top:0.02rem;
    padding-left:0.11rem;
    color: #aaaaaa;
    font-size: 0.08rem;
  }

  .imgdiv{
    margin-top:0.15rem;
    width: 100%;
    height: 0.69rem;
    background: url(../../assets/img/img-sort/youhuiquan1.jpg) no-repeat left center;
    -webkit-background-size: contain;
    background-size: contain;
  }


  /*立即分享*/
  .fenxiangbufen{
    width: 100%;
    background-color: #ffffff;
  }
  .fenxiang{
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.25rem;
    margin: 0 auto;
    width: 3rem;
    height: 0.45rem;
    background: #0aafff;
  }
  .fenxiang a{
    font-size: 0.14rem;
    color: #fffff2;
  }


  /*海报和当面邀请*/
  .haibao{
    display:flex;
    width: 100%;
    font-weight: 100;
    padding:0.2rem 0.35rem;
    color:#b4b4b4;
    font-size: 0.14rem;
    margin-bottom: 0.09rem;
    background-color: #ffffff;
  }
  .haibao a{
    display: block;
    width: 1.525rem;
    height: 0.2rem;
    text-indent: 0.58rem;
    background: url("../../assets/img/img-sort/xiaotupian1.jpg") no-repeat 0.34rem center;
    -webkit-background-size: contain;
    background-size: contain;
    font-size: 0.14rem;
    color: #949494;
  }
  .haibao a:nth-child(2){
    background: url("../../assets/img/img-sort/erweima1.jpg") no-repeat 0.34rem center;
    -webkit-background-size: contain;
    background-size: contain;
  }


  /*邀请及奖励*/
  .jiangli{
    background: #ffffff ;
    padding: 0 0.15rem;
  }
  .yiyaoqing{
    display:flex;
    width: 100%;
    height: 0.45rem;
    line-height: 0.45rem;
    font-weight: 100;
    color:#b4b4b4;
    font-size: 0.14rem;
    border-bottom: 1px solid #d5d5d5;
  }
  .jiangli .yiyaoqing a{
    display: block;
    margin: 0 auto;
    width: 0.8rem;
    text-align: center;
    line-height: 0.45rem;
    height: 0.43rem;
    color:#b4b4b4;
    font-size: 0.14rem;
  }
.qin{
  border-bottom: 0.02rem solid #2d2d2d;
  color: black;
}

  .yaoqingren{
    font-size: 0.16rem;

  }
  .yaoqingxiangqing{
    display: flex;
    height: 0.6rem;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #d5d5d5;
  }
  .yaoqingxiangqing:last-child{
    border:0;
  }
  .leftyaoqing{
    width: 50%;
    display: flex;
  }
  .leftyaoqing .imgsdiv{
    border-radius: 50%;
    width: 0.5rem;
    height: 0.5rem;
  }
  .imgsdiv img{
    margin: 0.1rem 0.1rem 0.1rem 0;
    border-radius: 50%;
    width: 0.4rem;
    height: 0.4rem;
  }
  .namediv p{
    color: black;
    padding-top:0.1rem;
  }
  .namediv span{
    color: #949494;
  }


  .rightyaoqing{
    color: #949494;
    font-size: 0.14rem;
  }

  .huodeyaoqing{
    font-size: 0.16rem;
    display: block;
  }
  .huodeyaoqing .namediv p{
    width:95%;
    white-space:nowrap;
    overflow: hidden;
  }
  .huodeyaoqing .rightyaoqing{
    color: #ff5e34;
  }
</style>
