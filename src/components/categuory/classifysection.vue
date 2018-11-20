<template>
  <div class="classifysection">
      <section>
        <div class="leftsection">
          <ul>
            <li v-for="(se,ins) in sect?sect.goodClass:[]" @click="_click(ins)" :class="{fff:n.includes(ins)}">
              <p :class="{active:n.includes(ins)}">{{se}}</p>
            </li>
          </ul>
        </div>
        <div class="rightsection">
          <router-link :to="{path:'/cachi'}" tag="div" class="tupian">
            <img :src="sect.recommend?sect.recommend.pic:[]" alt="">
          </router-link>
          <div class="fenleidian">
            <p v-for="(x,ins) in sect?sect[m]:[]" v-if="x" @click="_clicktwo(ins)">{{x}}</p>
          </div>
          <div class="xiangxi">
            <p class="xiangxip">{{(sect?sect[m]:[])?sect[m][m1]:[]}}</p>
            <router-link :to="{path:'/deta',query:{gid:m1,id:i}}" tag="div" class="youhuixiangqing" v-for="(goods,i) in sect?sect[m1]:[]">
              <div class="leftxiangqing">
                <img :src="goods.商品?goods.商品.pic[0]:[]" alt="">
              </div>
              <div class="rightxiangqing">
                <p>{{goods.商品?goods.商品.name:[]}}</p>
                <p>{{goods.商品?goods.商品.introduce:[]}}</p>
                <p style="display: flex"><i>{{goods.商品?goods.商品.special:[]}}</i><i v-if="goods.商品?goods.商品.tomorrow:[]">明日达</i></p>
                <p><i v-if="goods.商品?goods.商品.oldPrice:[]">￥</i>{{goods.商品?goods.商品.oldPrice:[]}}</p>
                <p>
                  <a href="javascript:void(0);"><span>￥{{goods.商品?goods.商品.newPrice:[]}}</span>/盒</a>
                  <a href="javascript:void(0);" @click="_tosend(goods.商品)"></a>
                </p>
              </div>
            </router-link>
          </div>
        </div>
      </section>
  </div>

</template>

<script>
  import {mapGetters,mapActions} from 'vuex'
    export default {
        name: "classifysection",
      data(){
          return {
              "n":["one"],
              "m":"one",
              "m1":"sale",
              "keys":[]
          }
      },
      props:["sect"],
      methods:{
        ...mapActions({
            _send:"INCGOODS"
        }),
        _tosend(gs){
          let good={
            "isxuan":true,
            "商品":gs
          }
          //console.log(gs)
          this._send(good)
        },
        _click(index){
          this.keys=[];
          if(this.n.length>0){
            this.n=[];
          }
          this.n.push(index);
          this.m=index;
          //console.log(index)
          //console.log(this.sect[index]);
          for(let key in this.sect[index]){
              this.keys.push(key)
          }
          this.m1=this.keys[0];
          //console.log(this.m);
          //console.log(this.m1)
        },
        _clicktwo(index){
          this.m1=index;
        }
      }
    }
</script>

<style scoped>
  .classifysection{
    width:100%;
    -webkit-flex: 1;
    overflow: hidden;
    margin-top:0.44rem;
  }
  section{
    display: flex;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: #ffffff;
  }
  .leftsection{
    width: 0.8rem;
    background-color: #f7f7f7;
    position: fixed;
    left:0;
  }
  .leftsection ul li{
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #eeeeee;
  }
  .leftsection ul li:last-child{
    border: 0;
  }
  .leftsection ul li p{
    width: 100%;
    height: 0.25rem;
    font-size: 0.12rem;
    line-height: 0.25rem;
    text-align: center;
    color: #6b6b6b;
    margin: 0.125rem 0;
  }
  .active{

    border-left: 0.04rem solid #0db0f4;
  }
.fff{
  background:#ffffff;
}
  .leftsection ul li:nth-child(1) p{
    background: url("../../assets/img/img-sort/bao.jpg") no-repeat 0.07rem center;
    background-size:0.13rem 0.13rem;
    padding-left: 0.22rem;
  }
  .leftsection ul li:nth-child(3) p{
    padding-left: 0.22rem;
    background: url("../../assets/img/img-sort/tuijian.jpg") no-repeat 0.07rem center;
    background-size:0.13rem 0.13rem;
  }



  .rightsection{
    -webkit-flex: 1;
    overflow: hidden;
    overflow-y: auto;
    margin-left: 0.8rem;
  }
  .rightsection .tupian{
    padding: 0.1rem;
  }
  .rightsection .tupian img{
    width: 2.76rem;
    height: 0.88rem;
  }



  .fenleidian{
    padding-left: 0.1rem;
    display: flex;
    padding-bottom: 0.09rem;
    border-bottom: 1px solid #ececec;
  }
  .fenleidian p{
    width: 0.57rem;
    height: 0.225rem;
    font-size: 0.12rem;
    line-height: 0.225rem;
  }


  .xiangxi{
    padding:0.1rem 0 0 0.1rem;
    width: 100%;
  }
  .xiangxip{
    font-size: 0.11rem;
    line-height: 0.19rem;
    width: 100%;
    background: #fafafa;
    color: #616161;
  }


  .youhuixiangqing{
    display: flex;
    border-bottom: 1px solid #f6f6f6;
    padding-top:0.08rem;
  }
  .leftxiangqing{
    width: 0.78rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .leftxiangqing img{
    width:0.715rem;
    height: 0.77rem;
  }
  .youhuixiangqing p:nth-child(1){
    font-size: 0.12rem;
    line-height: 0.25rem;
    color: #343434;
  }
  .youhuixiangqing p:nth-child(2){
    font-size: 0.1rem;
    line-height: 0.13srem;
    color: #868686;
    width: 2rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .youhuixiangqing p:nth-child(3) i{
    font-size: 0.004rem;
    margin:0.04rem 0;
    color: #ff1e2c;
    background: #ebfefe;
    border: 1px solid #e5b8bb;
    -webkit-border-radius: 0.05rem;
    -moz-border-radius: 0.05rem;
    border-radius: 0.05rem;
    margin-right: 0.05rem;
  }
  .youhuixiangqing p:nth-child(4){
    font-size: 0.1rem;
    line-height: 0.17rem;
    color: #c6c6c6;
    text-decoration:line-through;
  }
  .youhuixiangqing p:nth-child(5){
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.09rem;
    color: #959595;
    margin-bottom: 0.11rem;
  }
  .youhuixiangqing p:nth-child(5) a:nth-child(1){
    color: #979797;
  }
  .youhuixiangqing p:nth-child(5) span{
    font-size: 0.09rem;
    color: #ff5a4b;
  }
  .youhuixiangqing p:nth-child(5) a:nth-child(2){
    display: block;
    width: 0.23rem;
    height: 0.23rem;
    background:url("../../assets/img/img-sort/addgouwuche.jpg") no-repeat left center;
    background-size: contain;
  }
</style>
