<template>
    <div class="recom">
      <div>
        <img  :src="item.pic[0]"/>
      </div>
      <ul>
        <li><h4>{{item.name}}</h4></li>
        <li><strong>{{item.introduce}}</strong></li>
        <li><em :class="item.special ? 'bordervisible':'borderhidden' " >{{item.special}}</em></li>
        <li>
          <span>￥{{item.newPrice}}<b>{{item.unit}}</b></span>
          <img src="../../assets/img/img-me/cart1.jpg" class="add-cart" @click="_tosend(item)"/>
        </li>
      </ul>
    </div>
</template>
<script>
  import {mapGetters,mapActions} from 'vuex';
    export default {
        name: "Recom",
        props:["item","idx"],
      methods:{
        ...mapActions({
          _send:"INCGOODS"
        }),
        _tosend(gs){
          let good={
            "isxuan":true,
            "商品":gs
          };
          this._send(good)
        }
      }
    }
</script>

<style scoped>
  .recom{
    width: 100%;
    display: flex;
  }
  .recom div img {
    width: 1.17rem;
    height: 1.17rem; }
  .recom ul {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-left: .15rem;
    border-bottom: .01rem solid #efefef; }
  .recom ul li {
    font-size: .13rem;
    line-height: .26rem;
    color: #8d8d8d; }
  .recom ul li h4 {
    width: 1.6rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: .16rem;
    color: #0b0b0b;
    line-height: .27rem; }
  .recom ul li em {
    border: 1px solid #b5542a;
    font-size: .1rem;
    line-height: .3rem;
    color: #db4605;
    border-radius: .03rem; }
  .recom ul li span {
    font-weight: 400;
    font-size: .13rem;
    color: #f6251a;
    margin-left: -.02rem; }
  .recom ul li strong{
    display: block;
    width:2rem;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    height:0.26rem;
  }
  .recom ul li b {
    color: #9d9d9d; }
  .recom ul li b:before {
    margin-left: .08rem;
    content: "/";
    color: #dfdfdf; }
  .recom ul li:last-of-type {
    /*justify-self: flex-end;*/
    display: flex;
    justify-content: space-between; }
  .recom ul li:last-of-type img {
    height: .22rem;
    width: .22rem;
    margin-right: .15rem; }
  .bordervisible{
    /*border:0;*/
    /*opacity: 1;*/
    visibility: visible;
  }
  .borderhidden{
    /*opacity: 0;*/
    visibility: hidden;
  }
  /*.recom:last-of-type {*/
    /*margin-bottom: 1rem; }*/
</style>
