<template>
  <div class="guess-area">
        <div class="bg-002">
        </div>  
        <ul class="guess-list">
            <Guess :item="guessCon" v-for="guessCon in guess"></Guess>
        </ul>
    </div>
</template>

<script>
import Guess from "./Guess.vue"
  export default {
    name: "",
    props:["guess"],
    components:{
      Guess
    }
  }
</script>

<style scoped>
.bg-002{
    width: 100%;
    height: .33rem;
    background: url(../../assets/img/img-index/bg002.png) no-repeat center;
    background-size:100% .33rem; 
}
.guess-area{
    background-color: #ffffff;
}
</style>
