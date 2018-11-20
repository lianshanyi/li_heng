<template>
  <div class="daliy">
        <div class="daliy-sale">
            <div class="sale-left">
                <div class="daliySale-title">超盒算</div>
                <div class="daliySale-desc">每日必买</div>
                <img src="../../assets/img/img-index/sale.png" alt="">
            </div>
            <div class="sale-right">
                <p class="sale-theme">
                    ￥39元
                </p>
                <div class="sale-content">
                    <strong class="sale-desc">买1赠1</strong>
                </div>
            </div>
        </div>
        <div class="daliy-right">
            <a href="">
                <img src="../../assets/img/img-index/takeout.png" alt="">
            </a>
            <a href="">
                <img src="../../assets/img/img-index/hema100.png" alt="">
            </a>
        </div>
    </div>
</template>

<script>
  export default {
    name: "Daliy"
  }
</script>

<style scoped>
.daliy{
    width: 3.525rem;
    height: 1.83rem;
    background-color: #ffffff;
    margin: 0 0.12rem;
    margin-top: 0.09rem;
    display: flex;
    justify-content: center;
}
.daliy-sale{
    width: 1.75rem;
    height: 1.75rem;
    margin-right: 0.03rem;
    background-color: #fff7f8;
    display: flex;
}
.daliy-sale .sale-left{
    margin-top: 0.085rem;
    flex: 1;
}
.daliy-sale .daliySale-title{
    font-size: 0.145rem;
    color: #ea6e22;
    line-height: 0.21rem;
    margin-left: 0.1rem;
    font-weight: bolder;
}
.daliy-sale .daliySale-desc{
    font-size: 0.11rem;
    color: #8e8387;
    margin-left:0.1rem;
}
.daliy-sale img{
    width: 0.76rem;
    height: 1.3rem;
}
.daliy-sale .sale-right{
    width: 0.63rem;
    height: 0.57rem;
    background-color: #ff925d;
    border-radius: 0.06rem;
    margin-right: 0.09rem;
    margin-top: 0.1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.daliy-sale .sale-right .sale-theme{
    font-size: 0.09rem;
    color: #ffffff;
    margin-left: 0.04rem;
}
.sale-content{
    width: 0.58rem;
    height: 0.36rem;
    margin-left: 0.03rem;
    background-color: #fd8e3d;
    display: flex;
    border-radius: 0.06rem;
    align-items: center;
    justify-content: center;
    box-shadow: 0.01rem 0.01rem gray;
}
.sale-content .sale-desc{
    font-size: 0.12rem;
    color: #ffffff;
}
.daliy-right img{
    width: 1.75rem;
    height: 0.855rem;
}
.daliy-right img:first-child{
    margin-bottom: 0.025rem;
}
</style>
