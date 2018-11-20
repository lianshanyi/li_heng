<template>
  <div>
    <div class="detalis">
      <router-link :to="{path:'/eatday'+ids}" tag="div" class="ex-001">
        <img :src="item.exBg" alt="">
      </router-link>
      <div class="sample">
        <ul class="sample-list">
          <sample :cont="sampleCon" v-for="sampleCon in item.goods"></sample>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import Sample from "./Sample.vue"
  export default {
    name: "Details",
    props:["item","ids"],
    components:{
        Sample
    }
  }
</script>

<style scoped>
.details{
    margin-top: 0.09rem;
}
.ex-001 img{
    width: 100%;
    height: 1.15rem;
}
.sample{
    width: auto;
    height: 1.7rem;
    background-color: #ffffff;
}
.sample-list{
    display: flex;
    overflow-x: scroll;
}
.sample-list::-webkit-scrollbar{
    width: 0;
}
</style>
