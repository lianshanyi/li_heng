<template>
  <div class="Commodity">
      <Commoditytypeheader></Commoditytypeheader>
      <Commoditytypesection :yaoqing="yaoqing"></Commoditytypesection>
  </div>

</template>

<script>
  const urlone="http://localhost:3000/qin"
  import Commoditytypeheader from '../components/categuory/Commoditytypeheader'
  import Commoditytypesection from '../components/categuory/Commoditytypesection'
    export default {
        name: "Commodity",
      data(){
          return {
            yaoqing:{
              yiyaoqing: [],
              yaoqingchenggong:[]
            }
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
                  this.yaoqing.yiyaoqing=data.yiyaoqing;
                  this.yaoqing.yaoqingchenggong=data.yaoqingchenggong;
                }
              })
            })
          }
      },
        components:{
          Commoditytypeheader,
          Commoditytypesection
        }
    }
</script>

<style scoped>
.Commodity{
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
