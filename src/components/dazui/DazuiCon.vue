<template>
        <ul class="news-list">
            <li class="news-item">
                <div class="news-content">
                    <div class="news-top">
                        <div class="top-title">
                            <div class="top-icon"><img src="img/img-index/news-icon001.png" alt=""></div>
                            <div class="top-label">{{dazui?dazui.medul:[]}}</div>
                        </div>
                        <div class="top-source">{{dazui?dazui.zuozhe:[]}}</div>
                    </div>
                    <div class="news-cover">
                        <img :src="dazui.pic" alt="">
                    </div>
                    <div class="news-desc">
                        <div class="news-intro">{{dazui?dazui.name:[]}}</div>
                        <div class="news-article">{{dazui?dazui.p.name:[]}}
                            提到椰子油，可以说是"毁誉参半"！有人将椰子视为"超级食物
                            "，但是，也有的人认为椰子油会伤"心"，到底应该怎么看待椰子
                        </div>
                    </div>
                </div>
            </li>
        </ul>
</template>

<script>
export default {
    name:"DazuiCon",
    props:["dazui","idx"]
}
</script>


<style scoped>

.news-item{
    width: 100%;
    height: 3.24rem;
    margin-bottom: 0.1rem;
    background-color: #ffffff;
}
.news-content{
    width: 3.455rem;
    margin: 0 0.15rem;
}
.news-content .news-top{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 0.39rem;
}
.news-content .news-top .top-title{
    overflow: hidden;
}
.news-content .news-top .top-icon{
    float: left;
}
.news-content .news-top .top-icon img{
    width: 0.2rem;
    height: 0.2rem;
}
.news-content .news-top .top-label{
    margin-left: 0.07rem;
    color: #202020;
    font-size: 0.13rem;
    float: left;
}
.news-content .news-top .top-source{
    color: #868686;
    font-size: 0.13rem;
}
.news-content .news-cover img{
    width: 3.455rem;
    height: 1.95rem;
}
.news-content .news-intro{
    font-weight: bolder;
    font-size: 0.18rem;
    color: #000000;
}
.news-content .news-article{
    font-size: 0.125rem;
    height: 0.3rem;
    overflow: hidden;
    color: #8b8b8b;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
</style>
