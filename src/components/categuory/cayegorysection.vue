<template>
    <div class="acyegorysection">
      <section>
        <!--邀请好友分享链接部分-->
        <div class="fenXiAng">
          <router-link :to="{path:'/invite'}" tag="a" class="inviteFriends">
            <img src="../../assets/img/img-sort/yaoqing1.jpg" alt=""/>
          </router-link>
        </div>

        <!--商品类-->
        <div class="CommodityType">
          <!--新鲜水果-->
          <div class="commdsity" v-for="(baimg,ind) in sortName">
            <router-link :to="{path:'/ClassIfy',query:{gid:ind}}" tag="li">
              <img :src="baimg.pic" alt=""/>
              <span>{{baimg.className}}</span>
            </router-link>
          </div>

        </div>
      </section>
    </div>
</template>

<script>
    export default {
        name: "cayegorysection",
        props:["sortName","yaoqing"]
    }
</script>

<style scoped>
  .acyegorysection{
    width:100%;
    -webkit-flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    margin-top:0.44rem;
    margin-bottom: 0.65rem;
  }
  section{
    width: 100%;
    display: flex;
    flex-direction: column;
    -webkit-flex: 1;
    overflow-x: hidden;
    overflow-y: scroll;
  }
  section::-webkit-scrollbar{
    width: 0rem;
  }
  /*邀请好友分享链接部分*/

  .fenXiAng{
    width: 100%;
    height:1.21rem;
  }
  .fenXiAng a img{
    width: 100%;
    height:1.21rem;
  }


  /*商品类*/
  .CommodityType{
    width: 100%;
    display: -webkit-flex;
    -webkit-flex-wrap:wrap;
    background: white;
    padding: 0.15rem;
  }


  .commdsity{
    width: 1.15rem;
    font-size: 0.15rem;
    color: #343434;
    padding-top: 0.15rem;
    text-align: center;
  }
  .commdsity img{
    width: 1.15rem;
  }
</style>
