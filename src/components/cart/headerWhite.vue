/**
*作者：李恒
*部位：白色购物车顶部
*功能：返回上一页，删除
*/
<template>
  <header class="carts-header">
    <img src="../../assets/img/img-cart/bank.jpg" @click="back"/>
    <h3>购物车</h3>
    <p @click="_delete" class="delete" id="delete">删除</p>
    <em v-if="tat" style="display: none"></em>
  </header>
</template>

<script>
  import {mapGetters,mapActions} from 'vuex';
    export default {
        name: "headerWhite",
      computed:{
        ...mapGetters({
          produ:"GETGOODS",
          tat:"GETTOTAL"
        })
      },
      methods:{
        ...mapActions({
          _delete:"TODELE"
        }),
        back(){
          window.history.back(-1);
        },
        _opac(){
          let count =0;
          let xy=document.getElementById("delete");
          //console.log(this.produ.length)
          for(let i=0;i<this.produ.length;i++){
            if(this.produ[i].isxuan){
              count++;
            }
          }
          if(count>0){
            xy.style.color="#000";
          }else{
            xy.style.color="#c4c4c4";
          }
        }
      },

      mounted(){
          this._opac();
      },
      updated(){
        this._opac();
      }
    }

</script>

<style scoped>
  .carts-header{
    display:flex;
    justify-content: space-between;
    align-items: center;
    height:0.44rem;
    width:100%;
    color:#000000;
    font-weight: 100;
    border-bottom:0.01rem solid #efefef;
    background-color: #fff;
    position: fixed;
    left:0;
    top:0;
  }
  .carts-header h3{
    color:#000000;
    font-size:0.16rem;
    font-weight: 100;
  }
  .carts-header img{
    display: block;
    height:0.16rem;
    width:0.09rem;
    margin-left: 0.24rem;
  }
  .carts-header p{
    color:#c4c4c4;
    font-size:0.13rem;
    padding-right: 0.18rem;
  }
</style>
