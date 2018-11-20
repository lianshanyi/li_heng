<template>
    <div>
      <div class="details">
        <div class="tatle">详情</div>
        <ul>
          <li v-for="(pro,ind) in fuwu" v-if="ind !='介绍'">
            <span>{{ind}}</span> <span>{{pro}}</span>
          </li>
          <div>
            <img src="../../assets/img/img-cart/jiashao.jpg">
          </div>
        </ul>
      </div>
      <div class="fuwu">
        <img src="../../assets/img/img-cart/fuwu.jpg"/>
      </div>
    </div>
</template>

<script>
    export default {
        name: "FuWu",
      props:["fuwu"]
    }
</script>

<style scoped>
  .details{
    width:100%;
    background-color: #fff;
  }
  .details .tatle{
    width:100%;
    height:0.40rem;
    text-align: center;
    line-height: 0.4rem;
    font-size: 0.11rem;
    color:#262626;
  }
  .details ul{
    border-top:0.01rem solid #f8f8f8;
    border-bottom: 1px solid #e7faff;
    padding-bottom: 0.12rem;
  }
  .details ul li{
    overflow: hidden;
    line-height: 0.42rem;
  }
  .details ul li span{
    color:#0a0a0a;
    font-size: 0.115rem;
    float:left;
  }
  .details ul li span:first-of-type{
    padding-left: 0.11rem;
    width:0.6rem;
    margin-right: 0.52rem;
  }
  .details ul div img{
    width:100%;
  }

  .fuwu{
    width:100%;
  }
  .fuwu img{
    width:100%;
  }
</style>
