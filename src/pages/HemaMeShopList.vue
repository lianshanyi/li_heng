<template>
    <div>
        <Header></Header>
        <Section :shopInfo="shopInfo"></Section>
    </div>
</template>

<script>
    import Header from '../components/hema-me-shoplist/Header'
    import Section from '../components/hema-me-shoplist/Section'

    import '../assets/css/common.css'
    import '../assets/css/hema-me-shoplist.css'

    import {tools} from "../assets/js/public";

    export default {
        name: "HemaMeShopList",
        data(){
            return{
                shopInfo:{}
            }
        },
        components:{
            Header,
            Section
        },
        created(){
            this._shopInfo()
        },
        methods:{
            _shopInfo(){
                const shopList="http://localhost:3000/api/me/shoplist"
                tools(shopList,(data)=>{
                    this.shopInfo=data;
                })
                // const shopList="../../static/json/shoplist.json"
                // // const shopList="../json/shoplist.json"
                // tools(shopList,(data)=>{
                //     console.log(data)
                //     this.shopInfo=data;
                // })

            }
        }
    }
</script>

<style scoped>

</style>
