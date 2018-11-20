<template>
  <div>
    <div class="content">
      <slider :banner="banner"></slider>
      <NavList :list="navName"></NavList>
      <couple-list></couple-list>
      <daliy></daliy>
      <DetailsList :details="details"></DetailsList>
      <GuessArea :guess="guess"></GuessArea>
    </div>
  </div>
</template>

<script>
  import Slider from "./Slider"
  import NavList from './NavList.vue'
  import Daliy from './Daliy.vue'
  import BgOne from "./BgOne.vue"
  import DetailsList from './DetailsList.vue'
  import GuessArea from './GuessArea.vue'
  import CoupleList from "./CoupleList";
  export default {
    name: "IndexContent",
    components:{
      Slider,
      CoupleList,
      NavList,
      Daliy,
      DetailsList,
      GuessArea,
      BgOne
    },
    props:["navName","details","guess","banner"]
  }
</script>

<style scoped>
 .content{

 }
</style>
