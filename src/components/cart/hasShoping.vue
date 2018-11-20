
<template>
  <div>
    <div class="has-shoping">
        <activity v-if="num"></activity>
        <goods-list></goods-list>
    </div>
  </div>
</template>

<script>
  import activity from "./activity";
  import goodsList from "./goodsList";

  import {mapGetters,mapActions} from 'vuex';
    export default {
        name: "hasShoping",
      components: {goodsList, activity},
      data(){
          return{
              isexceed:false,
              diff:0
          }
      },
      computed:{
        ...mapGetters({
          tat:"GETTOTAL",
          num:"GETNUM"
        })
      }
    }
</script>

<style scoped>
  .has-shoping{
    width:100%;
    margin-top: 0.53rem;
  }
</style>
