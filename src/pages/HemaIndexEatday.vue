<template>
    <div>
        <Header ></Header>
        <Section :eatDayData="eatDayData" :addBtn="addBtn" :countDown="countDown"></Section>
    </div>
</template>

<script>
    import Header from "../components/hema-index-eatday/Header"
    import Section from "../components/hema-index-eatday/Section"

    import {tools} from "../assets/js/public";
    import {parabolaTop} from "../assets/js/effect";
    export default {
        name: "HemaIndexEatday",
        data(){
            return{
                eatDayData:{},
                addBtn:[
                  "http://10.35.162.101:8080/static/img/img-eatday/add-1.png",
                 "http://10.35.162.101:8080/static/img/img-eatday/add-1-1.png"
                ],
                countDown:[]
            }
        },
        components:{
            Header,
            Section
        },
        created(){
            this._eatDayData();
          //setInterval(this._time,100)
        },
        updated(){
            this.addCart();

        },
      watch:{
        countDown:{
          handler(nu,ou){
            console.log(nu)
          },
          deep:true,
          immediate:true
        }

      },
        methods:{
          _time(){
            let arr=[];
              let day=new Date();
              let time=day.getTime();
              let str="2018/10/26 00:00:00:00";
              let endDate=new Date(str);
              var end =endDate.getTime();
              var left=end-time;
              var d,h,m,s,ms;
              if(left>=0){
                this.countDown[0] =Math.floor(left/1000/60/60/24);
                this.countDown[1]=Math.floor(left/1000/60/60%24);
                this.countDown[2]=Math.floor(left/1000/60%60);
                this.countDown[3]=Math.floor(left/1000%60);
                this.countDown[4]=Math.floor(left%1000/10);
                // console.log(this.countDown)
              }
          },
            _eatDayData(){
            const eatDayData="http://10.35.162.101:3000/api/index/eatday";
              tools(eatDayData,(data)=>{
                    this.eatDayData=data;
                })
            },
            addCart(){
            let addAllPic=document.querySelectorAll(".add-cart");
              let addCar=[];

              for(let i=0;i<addAllPic.length;i++){
                  if(addAllPic[i].src==this.addBtn[0]){
                      addCar.push(addAllPic[i]);
                  }

              }
            for(let j in addCar){
              addCar[j].onclick=parabolaTop;
            }
          }
        }
    }
</script>

<style scoped>

</style>
