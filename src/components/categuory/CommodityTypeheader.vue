<template>
  <div class="CommodityTypeheader">
      <header>
        <a href="javascript:void(0)" @click="bank">
          <img src="../../assets/img/img-sort/fanhui1.jpg" alt="">
        </a>
        <a href="javascript:void(0)">邀请好友得福利</a>
        <a href="javascript:void(0)">
          <img src="../../assets/img/img-sort/fenxiang1.jpg" alt="">
        </a>
      </header>
  </div>

</template>

<script>
    export default {
        name: "CommodityTypeheader",
      methods:{
          bank(){
            window.history.back(-1);
          }
      }
    }
</script>

<style scoped>
  header{
    width: 100%;
    height: 0.44rem;
    background: #ffffff;
    display: flex;
    -webkit-justify-content: space-between;
    -webkit-align-items:center;
    position: fixed;
    z-index:999;
  }
  header a{
    font-size: 0.15rem;
    color: #000000;
  }
  header a img{
    width: 0.4rem;
    height: 0.425rem;
  }


</style>
