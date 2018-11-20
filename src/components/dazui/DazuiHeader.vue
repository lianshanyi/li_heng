<template>
    <header>
        <a href="javascript:;" class="back" @click="back">
            <img src="../../assets/img/img-index/back.png" alt="">
        </a>
        <div class="logo"></div>
        <a href="" class="fenxiang">
            <img src="../../assets/img/img-index/fenxiang.png" alt="">
        </a>
    </header>
</template>

<script>
export default {
    name:"DazuiHeader",
  methods:{
      back(){
        window.history.back(-1);
      }
  }
}
</script>


<style scoped>
   header{
    width: 100%;
    height: 0.44rem;
    background-color: #ffffff;
    border-bottom: 0.01rem solid #ececec;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
}
header .logo{
    background: url(../../assets/img/img-index/dazuilog.png) no-repeat;
    background-size: 0.715rem 0.44rem;
    width: 0.715rem;
    height:0.44rem ;
}
header .back img{
    width: 0.08rem;
    height: 0.155rem;
}
header .back{
    margin-left: 0.24rem;
}
header .fenxiang{
    margin-right: 0.2rem;
}
header .fenxiang img{
    width: 0.17rem;
    height: 0.18rem;
}
</style>
