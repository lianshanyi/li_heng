<template>
      <header>
          <img src="../../assets/img/img-shoplist/arrows-left.png" @click="back"/>
          <h2>盒马门店</h2>
          <img src="../../assets/img/img-shoplist/share.png" />
      </header>
</template>

<script>
    export default {
        name: "Header",
      methods:{
        back(){
          window.history.back(-1);
        }
      }
    }
</script>

<style scoped>
  header {
    padding: .16rem .11rem .16rem .2rem;
    display: flex;
    align-items: center;
    justify-content: space-between; }
  header img {
    width: .22rem;
    height: .22rem; }
</style>
