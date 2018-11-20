<template>
    <div class="cayegoryfooter">
      <footer>
        <div class="daohang">
          <img src="../../assets/img/img-sort/ft-1.png" alt="">
          <span>
            首页
        </span>
        </div>

        <div class="daohang">
          <img src="../../assets/img/img-sort/ft-2.png" alt="">
          <span>
            分类
        </span>
        </div>

        <div class="daohang">
          <img src="../../assets/img/img-sort/ft-3.png" alt="">
          <span>
            购物车
        </span>
        </div>


        <div class="daohang">
          <img src="../../assets/img/img-sort/ft-4.png" alt="">
          <span>
            我的
        </span>
        </div>
      </footer>
    </div>
</template>

<script>
    export default {
        name: "cayegoryfooter"
    }
</script>

<style scoped>
  footer{
    width: 100%;
    height: 0.49rem;
    background: white;
    display: -webkit-flex;
    -webkit-align-items:center;
    border-top: 1px solid #e6e6e6;
    position: fixed;
    bottom: 0;
  }
  .daohang{
    padding-top: 0.05rem;
    width: 25%;
    line-height: 0.175rem;
    text-align: center;
    font-size: 0.09rem;
  }
  .daohang img{
    margin: 0 auto;
    width: 0.25rem;
  }

</style>
