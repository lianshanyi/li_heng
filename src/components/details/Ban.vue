<template>
  <div class="banner">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" :item="item" :idx="idx" v-for="(item,idx) in pic" style="width:100%">
          <img :src="pic[idx]">
        </div>
      </div>
      <div class="swiper-pagination swiper-pagination-fraction" ></div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.min.css';
    export default {
        name: "Ban",
      props:["pic"],
      updated(){
        new Swiper(".swiper-container",{
          effect:"loop",
          pagination: {
            el: '.swiper-pagination',
            type: 'fraction'
          }
        })
      }
    }
</script>

<style scoped>
  .banner{
    width:100%;
    height:3.75rem;
  }
  .swiper-container{
    width:100%;
    height:3.75rem;
  }
  .swiper-slide img{
    width:100%;
    height: 100%;
  }
  .swiper-pagination-fraction{
    width: 0.4rem;
    height: 0.28rem;
    border-radius: 0.16rem;
    background-color: #000;
    font-size: 0.1rem;
    color: #fff;
    opacity: 0.3;
    line-height: 0.28rem;
    text-align: center;
    position: absolute;
    bottom: 0.17rem;
    left: 3.1rem;
  }
</style>
