<template>
  <nav>
    <ul>
      <li v-for="(god,key) in gds" v-if="god" @click="_click(key)" class="lis">
        <a :class="{action:keys.includes(key)}">
          {{key}}
          <span v-if="key=='商品'" id="span"></span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
    export default {
        name: "TopNav",
      props:["gds"],
      data(){
          return{
            keys:["商品"],
            m:""
        }
      },
      methods:{
        _click(key){
          if(this.keys.length>0){
            this.keys=[];
          }
          this.keys.push(key);
          this.m=key;
        }
      },
      updated(){
        let span= document.getElementById("span");
        let lis=document.getElementsByClassName("lis");
        let kuai=document.getElementsByClassName("kuai");
        for(let i=0;i<lis.length;i++){
          lis[i].onclick=function () {
            var scrolltop=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;
            let ntop=0;
            for(let j=0;j<i;j++){
              ntop+=kuai[j].offsetHeight;
            }
            if(scrolltop>ntop){
              let step=(scrolltop-ntop)/50
              let mytimer=setInterval(()=>{
                scrolltop-=step;
                if(scrolltop<=ntop-80){
                  scrolltop=ntop-80;
                  clearInterval(mytimer)
                }
                document.documentElement.scrollTop=scrolltop;
                document.body.scrollTop=scrolltop;
              },10)
            }else{
              let step=(ntop-scrolltop)/50
              let mytimer=setInterval(()=>{
                scrolltop+=step;
                if(scrolltop>=ntop-80){
                  scrolltop=ntop-80;
                  clearInterval(mytimer)
                }
                document.documentElement.scrollTop=scrolltop;
                document.body.scrollTop=scrolltop;
              },10)
            }
            let left=span.offsetLeft
            //console.log(left)
            let x=(span.offsetWidth+24)*i;
            //console.log(x)
            if(x>left){
              let timer=setInterval(()=>{
                left+=10;
                if(left>=x){
                  left=x;
                  clearInterval(timer)
                }
                span.style.left=left+"px";
              },5)
            }else{
              let timer=setInterval(()=>{
                left-=10;
                if(left<=x){
                  left=x;
                  clearInterval(timer)
                }
                span.style.left=left+"px";
              },5)
            }
          }
        }
      }

    }
</script>

<style scoped>
   nav{
    width:100%;
    height:0.39rem;
    border-bottom: 1px solid #f0f0f0;
  }
   nav ul{
    width:100%;
    height:100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
   nav ul li span{
    height:0.01rem;
    width:100%;
    display: block;
    position: absolute;
    bottom:0;
    background-color: #3b96dc;
  }
   nav ul li{
    width:100%;
    height:100%;
    padding: 0 0.12rem;
  }
   nav ul li a{
    color:#6c6c6c;
    font-size: 0.12rem;
    display: block;
    width:100%;
    height:100%;
    text-align: center;
    line-height: 0.39rem;
    position: relative;
  }
  .action{
    color:#3b96dc;
  }
</style>
