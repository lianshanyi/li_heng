<template>   
    <div class="example">
        <a href="" class="recommend-cover">
            <img src="img/img-index/grape.png" alt="">
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
</template>

<script>
  export default {
    name: ""
  }
</script>

<style scoped>
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
