<template>
  <div class="join-cart" @click="_tosend(send)">
    加入购物车
  </div>
</template>

<script>
  import {mapGetters,mapActions} from 'vuex';
    export default {
        name: "JoinCart",
      props:["send"],
      methods:{
        ...mapActions({
          _send:"INCGOODS"
        }),
        _tosend(gs){
          let good={
            "isxuan":true,
            "商品":gs
          };
          this._send(good);
        }
      }
    }
</script>

<style scoped>
  .join-cart{
    width:100%;
    background-color: #07bfff;
    height: 0.45rem;
    box-sizing: content-box;
    border-top: 1px solid #81d6f7;
    font-size: 0.125rem;
    color:#fff;
    text-align: center;
    line-height: 0.45rem;
    position: fixed;
    bottom: 0;
    left:0;
  }
</style>
