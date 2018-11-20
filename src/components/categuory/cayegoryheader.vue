<template>
    <div class="cayegoryheader">
      <header>
        <a href="javascript:void(0);" class="hot">{{fenlei.name}}</a>
      </header>
    </div>
</template>

<script>
    export default {
        name: "cayegoryheader",
        //注册
        props:["fenlei"]
    }
</script>

<style scoped>
  header{
    width: 100%;
    height: 0.44rem;
    background: #50aef8;
    background: #50aef8 url("../../assets/img/img-sort/fangda.jpg") no-repeat 3.3rem 0.1rem;
    -webkit-background-size: 0.225rem 0.235rem;
    display: -webkit-flex;
    -webkit-justify-content:center;
    -webkit-align-items:center;
    position:fixed;
    top:0;

  }

  .hot{
    width: 100%;
    display: block;
    font-size:0.17rem;
    border-top-left-radius: 12px;
    border-bottom-left-radius:12px;
    color:#fcfdf8;
    margin:0 auto;
    text-align: center;
  }

</style>
