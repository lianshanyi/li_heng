<template>
    <header>
        <div class="icon-site">
            <a href="">
                <img src="../../assets/img/img-index/site.png" alt="">
            </a>
        </div>
        <div class="search">
            <a href="">
                <img src="../../assets/img/img-index/search.png" alt="">
                <p>牛排</p>
            </a>
        </div>
        <div class="icon-qrCode">
            <a href="">
                <img src="../../assets/img/img-index/qrCode.png" alt="">
            </a>
        </div>
        <div class="icon-message">
            <a href="">
                <img src="../../assets/img/img-index/message.png" alt="">
            </a>
        </div>
    </header>
</template>

<script>
export default {
    name:"IndexHeader"
}
</script>


<style scoped>
    header{
    height: 0.44rem;
    width: 100%;
    background: -moz-linear-gradient(left, #0ac9ff 0%, #08affe 100%);
    background: -webkit-linear-gradient(left, #0ac9ff 0%,#08affe 100%);
    background: -o-linear-gradient(left, #0ac9ff 0%,#08affe 100%);
    background: -ms-linear-gradient(left, #0ac9ff 0%,#08affe 100%);
    background: linear-gradient(to right, #0ac9ff 0%,#08affe 100%);
    display: -webkit-flex;
    align-items: center;
    justify-content: space-around;
    border-bottom: #94eaff 1px solid;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
}
header img{
    width: 100%;
    height: 100%;
}
header .icon-site{
    width: 0.175rem;
    height: 0.2rem;
}
header .search{
    width: 2.54rem;
    height: 0.275rem;
    background-color: #ffffff;
    border-radius:0.14rem;

}
header .search a{
    width: 100%;
    height: 100%;
    display: -webkit-flex;
    align-items: center;
    padding-left: 0.12rem;
}
header .search a img{
    width: 0.13rem;
    height: 0.13rem;
}
header .icon-qrCode a{
    width: 0.19rem;
    height: 0.19rem;
}
header .icon-message a{
    width: 0.20rem;
    height: 0.19rem;
}
header p{
    font-size: 0.11rem;
    line-height: 0.275rem;
    color: #cccccc;
    flex: 1;
    margin-left: 0.1rem;
}
  a{
    display: block;
  }
</style>
