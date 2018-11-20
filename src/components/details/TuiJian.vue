<template>
    <div>
      <div class="tuijian">
        <div class="title">推荐</div>
        <ul class="guseeList">
          <tui-jian-one v-for="( guss , i ) in gusslist" :gus="guss"></tui-jian-one>
        </ul>
      </div>
    </div>
</template>

<script>
  import TuiJianOne from './TuiJianOne'
    export default {
        name: "TuiJian",
      components: {TuiJianOne},
      props:["gusslist"]
    }
</script>

<style scoped>
  .tuijian{
    width:100%;
    background-color: #fff;
    margin-top: 0.12rem;
  }
  .tuijian .title{
    color:#333333;
    font-size: 0.13rem;
    width:100%;
    height:0.39rem;
    text-align: center;
    line-height: 0.39rem;
  }
  .guseeList{
    width:100%;
    overflow: hidden;
  }
</style>
