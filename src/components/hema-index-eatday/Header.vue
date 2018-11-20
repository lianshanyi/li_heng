<template>
      <header>
          <a href="javascript:;">
              <img src="../../assets/img/img-eatday/arrows-left-1.png" @click="_back"/>
          </a>
          <h2>盒马吃货日</h2>
          <div>
            <router-link :to="{path:'cart'}" tag="a">
                  <img src="../../assets/img/img-eatday/cart-1.png" class="cart" v-if="show" @click="_back()"/>
                  <em class="num" v-if="num">{{num}}</em>
            </router-link>
              <a href="javascript:;">
                  <img src="../../assets/img/img-eatday/share-1.png" />
              </a>
          </div>

      </header>
</template>

<script>
  import {mapGetters,mapActions} from "vuex"
    export default {
        name: "Header",
        data(){
            return{
                show:true
            }
        },
      methods:{
          _back(){
            window.history.back(-1);
          }
      },
      computed:{
        ...mapGetters({
          num:"GETNUM"
        })
      }
    }
</script>

<style scoped>
  header {
    position: fixed;
    top: 0;
    width: 100%;
    background: #fff;
    box-sizing: border-box;
    z-index: 9;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .13rem .2rem; }
  header a img {
    width: .27rem;
    height: .27rem; }
  header h2 {
    color: #000;
    letter-spacing: .01rem;
    margin-left: .32rem;
    font-weight: 400;
    font-size: .2rem; }
  header div {
    display: flex; }
  header div a:nth-of-type(1){
    position: relative;
  }
  .num{
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -.09rem;
    right: .1rem;
    color: #fff;
    background: #ff2c2c;
    font-size: .11rem;
    line-height: .11rem;
    padding: .034rem .05rem;
    border-radius: .16rem;
  }

  header div a:nth-of-type(1) img {
    margin-right: .17rem; }

</style>
