<template>
  <div>
    <div class="couple">
      <div class="recommend">
        <div class="example">
          <a href="" class="recommend-cover">
            <img src="../../assets/img/img-index/grape.png" alt="">
            <div class="recommend-content">
              <strong class="recommend-title">新疆无核白葡萄</strong>
              <p class="price">
                <span class="icon-price">￥</span>
                <span class="price-num">9</span>
                <span class="price-unit">元/盒</span>
              </p>
              <p class="old-price">
                <span class="icon-price">￥</span>
                <span class="oldPrice-num">9</span>
              </p>
            </div>
          </a>
        </div>
        <div class="example">
          <a href="" class="recommend-cover">
            <img src="../../assets/img/img-index/orange.png" alt="">
            <div class="recommend-content">
              <strong class="recommend-title">澳洲袋鼠橙2个装</strong>
              <p class="price">
                <span class="icon-price">￥</span>
                <span class="price-num">9.9</span>
                <span class="price-unit">元/盒</span>
              </p>
              <p class="old-price">
                <span class="icon-price">￥</span>
                <span class="oldPrice-num">18.80</span>
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "CoupleList"
    }
</script>

<style scoped>
.couple{
    width: 100%;
    height: 1.3rem;
    background: url(../../assets/img/img-index/bg-cont.png) no-repeat;
    background-size: 100% 100%;
    display: flex;
    justify-content: center;
    border-bottom: 0.08rem solid #f5f5f5;
    background-color: #ffffff;
}
.couple .recommend{
    margin-top: 0.33rem;
    width: 3.525rem;
    height: 0.87rem;
    background-color: #ffffff;
    border: 1px solid #f7bab5;
    border-radius: 0.05rem;
    display: flex;
}
.example:first-child{
    border-right: 0.01rem solid #e4e2e3;
}
.example{
    flex: 1;
}
.example .recommend-cover{
    display: flex;

}
.example img{
    width: 0.69rem;
    height: 0.69rem;
    padding: 0.06rem;
}
.recommend-title{
    font-size: 0.12rem;
    color: #383634;
}
.price .icon-price{
    color: #f18242;
}
.price .price-num{
    font-size: 0.16rem;
    font-weight: bolder;
    color: #f18242;
}
.price .price-unit{
    float: right;
    padding-top: 0.06rem;
}
.recommend-content{
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.recommend-content .price{
    font-size: 0.09rem;
    color: #aeacad;
    margin-right: 0.14rem;
}
.old-price{
    font-size: 0.09rem;
    color: #aeacad;
    text-decoration: line-through;
}
.old-price .oldPrice-num{
    font-size: 0.11rem;
}
</style>
