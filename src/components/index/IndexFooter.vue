<template>
    <footer>
    <ul>
        <li class="active">
            <a href="javascript:;">
                <img src="../../assets/img/img-index/ft-1-1.png" />
                <span>首页</span>
            </a>
        </li>
        <li>
            <a href="javascript:;">
                <img src="../../assets/img/img-index/ft-2.png" />
                <span>分类</span>
            </a>
        </li>
        <li>
            <a href="javascript:;">
                <img src="../../assets/img/img-index/ft-3.png" />
                <span>购物车</span>
            </a>
        </li>
        <li>
            <a href="javascript:;">
                <img src="../../assets/img/img-index/ft-4.png" />
                <span>我的</span>
            </a>
        </li>
    </ul>
</footer>
</template>

<script>
export default {
    name:"IndexFooter"
}
</script>


<style scoped>
    footer {
    border-top: 0.01rem solid #f0f0f0;
    background: #fff;
    width: 100%;
    position: fixed;
    bottom: 0;
      z-index: 9999;
}
footer ul {
    display: flex;
}
footer ul li {
    width: 25%;
}
footer ul .active span{
    color: #62b7ee;
}
footer ul li a {
    display: flex;
    flex-direction: column;
    align-items: center;
}
footer ul li a img {
    margin-top: .05rem;
    width: .3rem;
    height: .3rem;
}
footer ul li a span {
    font-size: .11rem;
    margin-bottom: .04rem;
    color:#a7a7a7;
}
footer ul a .active span{
    color: #62b7ee;
}
</style>
