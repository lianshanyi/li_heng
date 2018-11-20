<template>
    <div>
      <div class="caipu">
        <div class="title">菜谱</div>
        <ul>
          <cai-pu-one v-for="(cc,dd) in cai" :ca="cc"></cai-pu-one>
        </ul>
      </div>
    </div>
</template>

<script>
  import CaiPuOne from './CaiPuOne';
    export default {
        name: "CaiPu",
      props:["cai"],
      components: {CaiPuOne}
    }
</script>

<style scoped>
  .caipu{
    width: 100%;
    background-color: #fff;
    margin-top:0.09rem;
  }
  .caipu .title{
    color:#333333;
    font-size: 0.13rem;
    width:100%;
    height:0.39rem;
    text-align: center;
    line-height: 0.39rem;
  }
</style>
