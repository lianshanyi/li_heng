<template>
  <div class="slider">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" :item="item" :idx="idx" v-for="(item,idx) in banner">
          <img :src="item">
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
    name: "Slider",
    props:["pic","banner"],
    updated(){
      new Swiper(".swiper-container",{
        autoplay:true,
        loop:true,
        effect:"loop",
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets'
        }
      })
    }
  }
</script>

<style scoped>
.slider{
    padding: 0 0.115rem;
    margin-top: 0.575rem;
    box-sizing:border-box;
    height: 1.425rem;
    width: 3.5rem;
    border: 1px solid #dbdfed;
}
 .swiper-container{
    width:100%;
    height:1.425rem;
  }
  .swiper-slide img{
    width:100%;
    height: 100%;
  }
  /*.swiper-pagination-fraction{*/
    /*width:0.43rem;*/
    /*height:0.32rem;*/
    /*border-radius: 0.16rem;*/
    /*background-color: #000;*/
    /*font-size: 0.13rem;*/
    /*color:#fff;*/
    /*opacity: 0.3;*/
    /*line-height: 0.32rem;*/
    /*text-align: center;*/
    /*position: absolute;*/
    /*bottom:0.17rem;*/
    /*right: 0.1rem;*/
  /*}*/
</style>
