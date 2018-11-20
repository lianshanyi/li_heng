<template>
  <div class="nav">
    <ul class="nav-list">
        <nav-con :item="navItem" :idx="index" v-for="(navItem,index) in list"></nav-con>
    </ul>
    <div class="headlines">
      <div class="icon-headlines">
          <img src="../../assets/img/img-index/dazuitoutiao2.png" alt="">
      </div>
      <router-link :to="{path:'/dazui'}" tag="div" class="headlines-content">
        <p class="headlines-desc">
          <span class="headlines-title">盒马精选</span>
          |
          <span class="headlines-message">一碗叫Poke的夏威夷炒冷饭为何红了？</span>
        </p>
      </router-link>
      <div class="desc-cover">
        <img src="../../assets/img/img-index/headline01.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  import NavCon from './Nav.vue'
  export default {
    name: "NavList",
    props:["list"],
    components:{
      NavCon
    }
  }
</script>

<style scoped>
  .nav{
    height:2.52rem;
    width:100%;
    background-color:#fff;
    padding:0 0.1rem;
  }
.nav-list{
    text-align: center;
    overflow: hidden;
}
.nav .headlines{
    box-sizing: border-box;
    width: 100%;
    height: 0.73rem;
    display: flex;
    justify-content: space-between;
}
.nav .headlines .icon-headlines{
    width: 0.71rem;
    height: 0.73rem;
}
.nav .headlines .desc-cover{
    width: 0.73rem;
    height: 0.73rem;
}
.nav .headlines img{
    width: 100%;
    height: 100%;
}
.nav .headlines .headlines-content{
    display: flex;
    align-items: center;
    height: 0.73rem;
  background-color: #fff;
}
.nav .headlines span{
    width: 0.52rem;
    color: #4f4f4f;
    font-size: 0.1rem;
    font-weight: bolder;
}
.nav .headlines p,.nav .headlines .headlines-message{
    color: #676767;
    font-size: 0.1rem;
    padding-top: 0.02rem;
}
</style>
