<template>
  <div class="title">
    <p>农夫山泉17.5澳橙4个装</p>
    <div>
      <i class="iconfont icon-tubiao212"></i>
    </div>
  </div>
</template>

<script>
    export default {
        name: "HeaderTitle"
    }
</script>

<style scoped>
   .title{
    width:100%;
    height:0.44rem;
    border-bottom: 0.01rem solid #e5e5e5;
   position: relative;
  }
   .title div{
     position: absolute;
     right: 0.4rem;
     top: 0;
  }
   .title div .icon-tubiao212{
     display: block;
    color:#000;
    font-size: 0.18rem;
     margin-right: 0.07rem;
     line-height: 0.44rem;
  }
   .title p{
    font-size: 0.15rem;
    color:#000000;
     line-height: 0.44rem;
     text-align: center;
  }
</style>
