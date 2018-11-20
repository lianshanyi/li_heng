<template>
    <div>
      <index-header></index-header>
      <index-content :navName="navName" :guess="guess" :details="details" :banner="banner"></index-content>
      <IndexOrder></IndexOrder>
      <cart-footer></cart-footer>
    </div>
</template>

<script type="text/ecmascript-6">
    const urltwo="http://localhost:3000/banner";
    const urlone="http://localhost:3000/indexNav";
    const urlthree="http://localhost:3000/details";
    const urlfour="http://localhost:3000/guess";
    import IndexHeader from "../components/index/IndexHeader.vue";
    import IndexContent from "../components/index/IndexContent.vue";
    import IndexOrder from "../components/index/IndexOrder.vue";
    import CartFooter from '../components/index/CartFooter'
    //import IndexFooter from "../components/index/IndexFooter.vue";
    export default {
        name:"index",
        data(){
            return {
                navName:{},
                guess:{},
                details:[],
              banner:[]
            }
        },
        components:{
          CartFooter,
            IndexHeader,
            IndexContent,
            IndexOrder
        },
        methods:{
           _initData(){
               fetch(urlone).then(response=>{
                   response.json().then(data=>{
                       if(response.ok){
                           this.navName=data;
                           //console.log(data)
                       }
                   })
               });
             fetch(urltwo).then(response=>{
               response.json().then(data=>{
                 if(response.ok){
                   this.banner=data;
                   //console.log(data)
                 }
               })
             });
               fetch(urlthree).then(response=>{
                   response.json().then(data=>{
                       if(response.ok){
                           this.details=data;
                         //console.log(data)
                       }
                   })
               })
               fetch(urlfour).then(response=>{
                   response.json().then(data=>{
                       if(response.ok){
                           this.guess=data;
                         //console.log(data)
                       }
                   })
               })
           }
        },
        created(){
            this._initData()
        }
    }
</script>

<style scoped>

</style>
