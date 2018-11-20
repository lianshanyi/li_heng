<template>
  <div class="bgimg">
    <img :src="im">
  </div>
</template>

<script>
    export default {
        name: "BgImg",
      props:["im"]
    }
</script>

<style scoped>
  .bgimg{
    width:100%;
    margin-top: 0.44rem;
  }
  .bgimg img{
    width:100%;
  }
</style>
