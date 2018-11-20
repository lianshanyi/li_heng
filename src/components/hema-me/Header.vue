<template>
    <!--<div>-->
      <!--<router-link :to="{path:'/HemaMeShopList'}">-->
        <header>
          <div class="hd-top">
            <img src="../../assets/img/img-me/hd-1-2.png" />
            <img src="../../assets/img/img-me/hd-2.png" />
          </div>
        </header>
      <!--</router-link>-->

    <!--</div>-->
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
  header {
    height: 1.22rem;
    padding: 0 .15rem;
    background: url("../../assets/img/img-me/bg-top1.jpg") no-repeat center;
    border-bottom: 1px solid #cbedf7; }
  header .hd-top {
    display: flex;
    justify-content: space-between; }
  header .hd-top img {
    width: .3rem;
    height: .3rem;
    font-size: .25rem;
    margin: .15rem .12rem .2rem .12rem; }
</style>
