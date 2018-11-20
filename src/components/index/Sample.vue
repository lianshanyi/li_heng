<template>
    <li class="sample-item">
        <a href="" class="sample-link">
            <div class="sample-cover">
                <img :src="cont['pic']" alt="">
            </div>
            <div class="sample-content">
                <div class="sample-title">{{cont.name}}</div>
                <div class="sample-desc">
                    <div class="sample-price">
                        <span class="sample-icon">￥</span>
                        <strong class="sample-num">{{cont["newPrice"]}}</strong>
                        <div class="sample-unit">{{cont['unit']}}</div>
                        <div class="sample-add"></div>
                    </div>
                </div>
            </div>
        </a>
    </li>
</template>

<script>
  export default {
    name: "Sample",
    props:["cont"]

  }
</script>

<style scoped>
.sample-item{
    width: 1rem;
}
.sample-item .sample-cover img{
    width: 1rem;
    height: 1.17rem;
}
.sample-link .sample-content .sample-desc .sample-price{
    color: #f8292f;
    font-size: 0.07rem;
    margin-bottom: 0.03rem;
    overflow: hidden;
    margin-left: 0.1rem;
}
.sample-link .sample-content .sample-desc .sample-icon{
    float: left;
}
.sample-link .sample-content .sample-desc .sample-num{
    font-size: 0.08rem;
    color: #f8292f;
    float: left;
}
.sample-link .sample-content .sample-title{
    color: #313131;
    font-size: 0.1rem;
    margin-left: 0.1rem;
}
.sample-link .sample-content .sample-desc .sample-unit{
    font-size: 0.08rem;
    color: #9b9b9b;
    float: left;
}
.sample-link .sample-content .sample-desc .sample-add{
    width: 0.165rem;
    height: 0.165rem;
    background: url(../../assets/img/img-index/add.png) no-repeat;
    background-size:0.165rem 0.165rem;
    float: right;
    cursor: pointer;
}
</style>
