<template>
  <div class="cateGory">
    <!--接口-->
    <cayegoryheader :fenlei="fenlei"></cayegoryheader>
    <cayegorysection :sortName="sortName" :yaoqing="yaoqing"></cayegorysection>
    <cay-footer></cay-footer>
  </div>

</template>

<script>
  const urlone="http://localhost:3000/classify";
  //import cayegoryfooter from '../components/categuory/cayegoryfooter'
  import cayegorysection from '../components/categuory/cayegorysection'
  import cayegoryheader from '../components/categuory/cayegoryheader'
  import CayFooter from '../components/categuory/CayFooter'
    export default {
        name: "cateGory",
      data(){
        return {
          //接口
          fenlei: {
             "name": "分类"
          },
          yaoqing:{
             "img":"../assets/img/img-sort/yaoqing1.jpg"
          },
          sortName:{}
        }

      },
      created(){
         this._initData()
      },
      methods:{
         _initData(){
           fetch(urlone).then(response=>{
             response.json().then(data=>{
               if(response.ok){
                 this.sortName=data.classify;
                 console.log(this.sortName)
               }
             })
           })
         }
      },
      components:{
        CayFooter,
        cayegoryheader,
        cayegorysection
        }
    }
</script>

<style scoped>
  .cateGory{
    display: flex;
    height: 100%;
    flex-direction: column;
  }
  html,body{
    height: 100%;
  }
  body{
    font-family:"微软雅黑",Arial;
    background: #f5f5f9;
    display: -webkit-flex;
    -webkit-flex-direction:column;
  }
</style>
