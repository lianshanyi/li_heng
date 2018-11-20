<template>
  <div>
    <cachi-header :tit="shujiu.title"></cachi-header>
    <bg-img :im="shujiu.bgimg"></bg-img>
    <shan-xi :sxi="shujiu.shanxi" :sxli="shujiu.shanxigoods"></shan-xi>
    <guide :gu="shujiu.chihuo" :guls="shujiu.chihugoods"></guide>
  </div>
</template>

<script>
  const urlone="http://localhost:3000/cachi"
  import CachiHeader from '../components/cachi/CachiHeader';
  import BgImg from '../components/cachi/BgImg';
  import ShanXi from '../components/cachi/ShanXi';
  import guide from '../components/cachi/guide'
  import {parabolaTop} from "../assets/js/effect";

  export default {
        name: "cachi",
      components: {guide, ShanXi, BgImg, CachiHeader},
      data(){
          return {
            shujiu:{}
          }
      },
      methods:{
          _initData(){
            fetch(urlone).then(response=>{
                if(response.ok){
                  response.json().then(data=>{
                    this.shujiu=data;
                    console.log(this.shujiu)
                  })
                }
            })
          },
          cartE(){
            let addE=document.querySelectorAll(".add");

            for(let i=0;i<addE.length;i++){
              addE[i].onclick=parabolaTop;
            }

          }
      },
      created(){
          this._initData();
      },
      updated(){
          this.cartE()
      }
    }
</script>

<style scoped>

</style>
