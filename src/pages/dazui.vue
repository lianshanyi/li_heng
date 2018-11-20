<template>
  <div>
    <dazui-header></dazui-header>
    <div class="content">
      <dazui-con :dazui="dazuione" idx="key" v-for="(dazuione,key) in dazui"></dazui-con>
    </div>
    </div>
</template>

<script>
const urlone="http://localhost:3000/dazui";
import DazuiHeader from '../components/dazui/DazuiHeader';
import DazuiCon from '../components/dazui/DazuiCon';
export default {
    name: "deta",
    components: {DazuiHeader, DazuiCon},
    data(){
        return{
            dazui:[]
        }
    },
    methods:{
        _initdata(){
            fetch(urlone).then(response=>{
                response.json().then(data=>{
                    if(response.ok){
                        this.dazui=data;
                        console.log(data)
                    }
                })
            })
        }
    },
        created(){
            this._initdata();
        }
    }
</script>

<style scoped>
  .content{
    background-color: #eeeeee;
    margin-top: 0.44rem;
  }
</style>
