<template>

    <router-view/>

</template>

<script>
  const urlone="http://localhost:3000/cart";
  import {mapGetters,mapActions} from 'vuex';
export default {
  name: 'App',
  methods:{
    ...mapActions({
      obtain:"OBTAIN",
      len:"GETNUM"
    }),
    _initData(){
      fetch(urlone).then(response=>{
        response.json().then(data=>{
          if(response.ok){
            this.obtain(data);
          }
        })
      })
    }
  },
  created(){
      this._initData()
  }
}
</script>

<style>
/*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
/*}*/
</style>
