<template>
    <div>
        <Details v-bind:item="detailsEx" :ids="i" v-for="(detailsEx,i) of details"></Details>
    </div>

</template>

<script>
  import Details from "./Details.vue"
  export default {
    name: "DetailsList",
    props:["details"],
    components:{
        Details
    }
  }
</script>

<style scoped>

</style>
