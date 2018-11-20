<template>
    <li class="guess-item">
        <div class="guess-link">
            <div class="guess-cover">
                <img :src="item.pic">
            </div>
            <div class="guess-content">
                <div class="guess-top">
                    <span class="guess-title">{{item.guessTitle}}</span>
                    <span class="guess-intro">{{item.guessIntro}}</span>
                </div>
                <div class="sub-title">
                    <div class="sub-ex">
                        <span class="guess-title">{{item.subTitle1}}</span>
                        <span class="guess-intro">{{item.subIntro1}}</span>
                    </div>
                    <span class="sub-line">|</span>
                    <div class="sub-ex">
                        <span class="guess-title">{{item.subTitle2}}</span>
                        <span class="guess-intro">{{item.subIntro2}}</span>
                    </div>
                </div>
                <div class="guess-price">
                    <div>
                        <span class="guess-icon">￥</span>
                        <strong class="guess-num">{{item.newPrice}}</strong>
                        <div class="guess-unit">{{item.unit}}</div>
                    </div>
                    <div class="guess-add"></div>
                </div>
            </div>
        </div>
    </li>
</template>

<script>
  export default {
    name: "",
    props:["item"]
  }
</script>

<style scoped>
.guess-item{
        width: 100%;
    }
    .guess-item:last-child{
        margin-bottom: 0.65rem;
    }
    .guess-link{
        display: flex;
        height: 1.39rem;
    }
    .guess-link .guess-cover img{
        width: 1.125rem;
        height: 1.39rem;
    }
    .guess-link .guess-content{
        display: flex;
        flex-direction: column;
        margin-top: 0.3rem;
        border-bottom: 0.015rem solid #f2f2f2;
      width: 70%;
    }
    .guess-link .guess-content span{
        display: block;
    }
    .guess-link .guess-content .guess-top .guess-title{
        color: #212121;
        font-size: 0.14rem;
    }
    .guess-link .guess-content .guess-top .guess-intro,.guess-link .guess-content .sub-title .guess-intro{
        color: #9a9a9a;
        font-size: 0.09rem;
    }
    .guess-link .guess-content .sub-line{
        font-size: 0.3rem;
        color: #ebebeb;
    }
    .guess-link .guess-content .sub-title{
        display: flex;
        align-items: center;
        margin-top: 0.02rem;
    }
    .guess-link .guess-content .sub-title .guess-title{
        color: #3a3a3a;
        font-size: 0.15rem;
        font-weight: bolder;
    }
    .guess-link .guess-content .guess-price{
        color: #f8292f;
        font-size: 0.07rem;
        display: flex;
        justify-content: space-between;
        margin-top: 0.06rem;
        width: 100%;
    }
    .guess-link .guess-content .guess-price .guess-num{
        font-size: 0.08rem;
        color: #f8292f;
        float: left;
    }
    .guess-link .guess-content .guess-price .guess-icon{
        float: left;
    }
    .guess-link .guess-content .guess-price .guess-unit{
        font-size: 0.08rem;
        color: #9b9b9b;
        float: left;
    }
    .guess-link .guess-content .guess-price .guess-add{
        width: 0.165rem;
        height: 0.165rem;
        background: url(../../assets/img/img-index/add.png) no-repeat;
        background-size:0.165rem 0.165rem;
        cursor: pointer;
      margin-right: 0.06rem;
    }
</style>
