<template>
  <div>
    <details-header :goods="shopOne"></details-header>
    <div class="kuai">
      <ban :pic="pics"></ban>
      <jie-shao :onegoods="shopOne.商品"></jie-shao>
    </div>
    <div class="kuai">
      <fu-wu :fuwu="shopOne.详情"></fu-wu>
    </div>
    <div class="kuai">
      <cai-pu v-if="shopOne.菜谱" :cai="shopOne.菜谱"></cai-pu>
    </div>
    <div class="kuai">
      <tui-jian :gusslist="gusses"></tui-jian>
    </div>
    <join-cart :send="shopOne.商品"></join-cart>
    <dis-none :onegoods="shopOne.商品"></dis-none>
  </div>
</template>

<script>
  const urlone="http://localhost:3000/one";
  const urltwo="http://localhost:3000/recommend";
  import DetailsHeader from '../components/details/DetailsHeader';
  import Ban from '../components/details/Ban';
  import JieShao from '../components/details/JieShao';
  import FuWu from '../components/details/FuWu';
  import CaiPu from '../components/details/CaiPu';
  import TuiJian from '../components/details/TuiJian';
  import JoinCart from '../components/details/JoinCart';
  import DisNone from '../components/details/DisNone'
    export default {
        name: "deta",
      components: {DisNone, JoinCart, TuiJian, CaiPu, FuWu, JieShao, DetailsHeader,Ban},
      data(){
          return{
            ll:"",
            aa:"",
            shopOne:{},
            gusses:[],
            pics:[]
          }
      },
      methods:{
          _initdata(){
              fetch(urlone).then(response=>{
                response.json().then(data=>{
                  if(response.ok){
                    this.ll=  this.$route.query.gid;
                    this.aa=this.$route.query.id;
                    console.log(this.ll);
                    console.log(this.aa);
                      this.shopOne=data.classOne[this.ll][this.aa];
                      this.pics=this.shopOne.商品.pic;
                  }
                })
              });
            fetch(urltwo).then(response=>{
              response.json().then(data=>{
                if(response.ok){
                  this.gusses=data;
                }
              })
            });
          }
      },
      created(){
          this._initdata();
      }
    }
</script>

<style scoped>

</style>
