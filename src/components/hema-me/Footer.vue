<template>
    <footer>
        <ul>
          <router-link :to="{path:'/index'}" tag="li">
                <!--<a href="javascript:;">-->
                    <img src="../../assets/img/img-me/ft-1.png" />
                    <span>首页</span>
                <!--</a>-->
          </router-link>
          <router-link :to="{path:'/sort'}" tag="li">
                <!--<a href="javascript:;">-->
                    <img src="../../assets/img/img-me/ft-2.png" />
                    <span>分类</span>
                <!--</a>-->
          </router-link>
          <router-link :to="{path:'/blue'}" tag="li" id="cart">
                <!--<a href="javascript:;">-->
                    <img src="../../assets/img/img-me/ft-3.png" class="cart"/>
                    <em class="num" v-if="num">{{num}}</em>
                    <span>购物车</span>
                <!--</a>-->
          </router-link>
          <router-link :to="{path:'/me'}" tag="li">
                <!--<a href="javascript:;">-->
                    <img src="../../assets/img/img-me/ft-4-1.png" />
                    <span>我的</span>
                <!--</a>-->
          </router-link>
        </ul>
    </footer>
</template>

<script>
  import {mapGetters,mapActions} from "vuex"
    export default {
        name: "Footer",
      computed:{
        ...mapGetters({
          num:"GETNUM"
        })
      }
    }
</script>

<style scoped>
  #cart {
    position: relative;
  }
  .num{
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: .03rem;
    right: .25rem;
    color: #fff;
    background: #ff2c2c;
    font-size: .11rem;
    line-height: .11rem;
    padding: .036rem .05rem;
    border-radius: .16rem;
  }
  footer {
    border-top: 1px solid #b9b9b9;
    background: #fff;
    width: 100%;
    position: fixed;
    bottom: 0; }
  footer ul {
    display: flex; }
  footer ul li {
    width: 25%; }
  footer ul li  {
    display: flex;
    flex-direction: column;
    align-items: center; }
  footer ul li  img {
    margin-top: .08rem;
    width: .3rem;
    height: .3rem;
    margin-bottom: .06rem; }
  footer ul li  span {
    font-size: .11rem;
    margin-bottom: .04rem; }
  footer ul li:last-of-type span{
    color: #08beff;
  }
</style>
