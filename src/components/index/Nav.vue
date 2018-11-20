<template>
    <li class="nav-item">
      <router-link :to="{path:'ClassIfy',query:{gid:idx}}" tag="div">
            <a class="nav-cover" href="jsvascript:;">
                <img :src="item.pic" class="nav-image">
            </a>
            <p class="nav-title">{{item.className}}</p>
      </router-link>
    </li>
</template>

<script>

  export default {
    name: "Nav",
    props:["item","idx"]
  }
</script>

<style scoped>

.nav-item{
    display: block;
    float: left;
    width: 20%;
    overflow: hidden;
    background-color: #fff;
    cursor: pointer;
}
.nav-item .nav-cover{
    position: relative;
    width: 100%;
    padding-bottom: 100%;
}
.nav-item .nav-cover img{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.nav-item p{
    display: block;
    color: #7b7b7b;
    font-size: 0.1rem;
    padding-bottom: 0.025rem;
}
  a{
    display: block;
  }
</style>
