/**
*作者：李恒；
*部位：蓝色购物车顶部
*功能：有删除功能
**/
<template>
  <header class="carts-header-blue">
    <div>
      <h3>购物车</h3>
    </div>
    <p @click="_delete" class="delete" id="delete">删除</p>
    <em v-if="tat" style="display: none"></em>
  </header>
</template>

<script>
  import {mapGetters,mapActions} from 'vuex';
  export default {
        name: "headerBlue",
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
  .carts-header-blue{
    width:100%;
    height:0.44rem;
    background-color: #09bcff;
    overflow: hidden;
    position: relative;
  }
  .carts-header-blue h3{
    color:#fff;
    font-size: 0.16rem;
    font-weight: 100;
  }
  .carts-header-blue p{
    color:#fff;
    font-size: 0.13rem;
    opacity: 0.5;
    float: right;
    line-height: 0.44rem;
    padding-right: 0.18rem;
  }
  .carts-header-blue div{
    width:100%;
    height:100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
  }.carts-header-blue{
     width:100%;
     height:0.44rem;
     background-color: #09bcff;
     overflow: hidden;
     position: fixed;
    top:0;
    left: 0;
   }
  .carts-header-blue h3{
    color:#fff;
    font-size: 0.16rem;
    font-weight: 100;
  }
  .carts-header-blue p{
    color:#fff;
    font-size: 0.13rem;
    opacity: 0.5;
    float: right;
    line-height: 0.44rem;
    padding-right: 0.18rem;
  }
  .carts-header-blue div{
    width:100%;
    height:100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
