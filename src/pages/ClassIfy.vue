<template>
  <div class="classify">
    <classifyheader :fenleimingcheng="fenleimingcheng"></classifyheader>
    <classifysection :sect="classOne"></classifysection>
  </div>

</template>

<script>
  const urlone="http://localhost:3000/classify";
  const urltwo="http://localhost:3000/one";
  import classifyheader from '../components/categuory/classifyheader'
  import classifysection from '../components/categuory/classifysection'
    export default {
      name: "ClassIfy",
      data() {
        return {
          yaoqing: {
            "img": "../../static/images/yaoqing1.jpg"
          },
          fenleimingcheng: {},
          classOne:{}
        }
      },
      methods:{
        _initData(){
          fetch(urlone).then(response=>{
            response.json().then(data=>{
              if(response.ok){
                this.fenleimingcheng=data.classify;
                //console.log(this.fenleimingcheng)
              }
            })
          });
          fetch(urltwo).then(response=>{
            response.json().then(data=>{
              if(response.ok){

                this.classOne=data.classOne;
                //console.log(this.classOne)
              }
            })
          })
        }
      },
      created(){
        this._initData()
      },
      components:{
        classifyheader,
        classifysection
      }
    }
</script>

<style scoped>
  .classify{
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
