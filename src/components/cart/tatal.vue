/**
*作者：李恒；
*部位：购物车结算；
*功能：全选，未选择变背景
**/
<template>
  <div class="tatal" id="m-b-0">
    <div class="all-click">
      <img id="allimg" src="../../assets/img/img-cart/weixuan.png" @click="_all"/>
      <p>全选</p>
    </div>
    <div class="heji-go">
      <div class="heji">
        <p>
          合计：<span>￥<em>{{tat}}</em></span>（免运费）
        </p>
      </div>
      <div class="go-buy" id="go-buy">
        去结算
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters,mapActions} from 'vuex';
    export default {
        name: "tatal",
      props:["tatal"],
      computed:{
        ...mapGetters({
          tat:"GETTOTAL",
          productList:"GETGOODS"
        })
      },
      methods:{
        ...mapActions({
          _all:"ALL"
        }),
        _ISALL(){
          let count =0;
          let xy=document.getElementById("allimg");
          let zz=document.getElementById('go-buy');
          for(let i=0;i<this.productList.length;i++){
            if(this.productList[i].isxuan){
                count++;
            }
          }
          if(count==this.productList.length){
              xy.src="http://localhost:3000/./img/img-cart/yixuan.png"
          }else{
            xy.src="http://localhost:3000/./img/img-cart/weixuan.png"
          }
          if(count>0){
              zz.style.backgroundColor="#09b3ff";
          }else{
            zz.style.backgroundColor="#ccc";
          }
        }
      },
      mounted(){
          this._ISALL()
      },
      updated(){
        this._ISALL()
      }
    }
</script>

<style scoped>
  .tatal{
    width:100%;
    height:0.45rem;
    background-color: #fff;
    border-top:1px solid #ededed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    left:0;
    bottom: 0;
    margin-bottom: 0.64rem;
  }
  .tatal .all-click{
    display: flex;
    padding-left: 0.1rem;
  }
  .tatal .all-click img{
    width:0.17rem;
    height:0.17rem;
    border-radius: 50%;
  }
  .tatal .all-click p{
    color:#363636;
    font-size: 0.12rem;
    margin-left: 0.08rem;
  }
  .tatal .heji-go{
    display: flex;
  }
  .tatal .heji-go .heji p{
    color:#969696;
    font-size: 0.105rem;
    line-height: 0.45rem;
  }
  .tatal .heji-go .heji p span{
    color:#ff3739;
    font-size: 0.125rem;
    font-weight: 600;
  }
  .tatal .heji-go .go-buy{
    width:1.025rem;
    height:0.45rem;
    background-color: #09b3ff;
    color:#fff8fb;
    font-size: 0.14rem;
    text-align: center;
    line-height: 0.45rem;
  }
</style>
