<template>
      <li>
        <a>
          <img :src="ca.pic"/>
          <div>
            <h3 class="name">{{ca?ca.name:[]}}</h3>
            <p class="time">{{ca?ca.time:[]}}</p>
            <p class="hard">{{ca?ca.hard:[]}}</p>
            <div class="shuoming">{{ca?ca.p:[]}}</div>
          </div>
        </a>
      </li>
</template>

<script>
    export default {
        name: "CaiPuOne",
      props:["ca"]
    }
</script>

<style scoped>
   li{
    height:1.07rem;
  }
   li a{
    display: flex;
    align-items: center;
    height:100%;
    margin:0 0.11rem;
    border-top: 0.01rem solid #f4f4f4;
  }
  li a img{
    width:1.065rem;
    height:0.8rem;
    margin-right:0.08rem;
  }
  li a div p{
    color:#777777;
    font-size: 0.11rem;
    line-height: 0.175rem;
    height: 0.175rem;
  }
   li a div h3{
    color:#000000;
    font-size: 0.13rem;
    line-height: 0.21rem;
    height: 0.21rem;
     width: 2.25rem;
     white-space: nowrap;
     overflow: hidden;
     text-overflow: ellipsis;
  }
   li a div div{
    color:#898989;
    font-size: 0.09rem;
    line-height: 0.25rem;
    height: 0.25rem;
  }
</style>
