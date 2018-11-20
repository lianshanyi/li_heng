<template>
  <div>
    <ul class="guseeList">
      <gusee-list-one v-for="(gus,ind) in gusee" :gus="gus" :pro="produ" :ind="ind"></gusee-list-one>
    </ul>
  </div>
</template>

<script>
  import guseeListOne from "./guseeListOne"
    export default {
        name: "guseeList",
      components: {guseeListOne},
      props:["gusee","produ"]
    }
</script>

<style scoped>
  .guseeList{
    width:100%;
    overflow: hidden;
    margin-bottom: 1rem;
  }
</style>
