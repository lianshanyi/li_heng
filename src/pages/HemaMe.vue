<template>
    <div>
        <Header></Header>
        <Container  :main="main" :ordList="ordList" :recomList="recomWares" :comm="comm" :routerInfo="routerInfo"></Container>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from '../components/hema-me/Header'
    import Container from "../components/hema-me/Container"
    import Footer from "../components/hema-me/Footer"

    import {parabolaBottom} from "../assets/js/effect";
    // js
    // import {fet} from '../assets/js/public'

    export default {
        name: "HemaMe",
        data(){
            return{
                //  主要信息------资产--------后台
                main:{},
                //  推荐商品列表--------后台
                recomWares:[],
                // 订单列表
                ordList:{
                    name:["待付款","待配送","待收货","待评价"],
                    pic:["../../static/img/img-me/ord1.png",
                      "../../static/img/img-me/ord2.png",
                      "../../static/img/img-me/ord3.png",
                      "../../static/img/img-me/ord4.png"
                    ]
                },
                // 常用工具
                comm:{
                    name:["邀请有礼","盒马门店","兑换优惠券","我的评价","盒马小蜜"],
                    pic:["../../static/img/img-me/ico5.png",
                        "../../static/img/img-me/ico6.png",
                        "../../static/img/img-me/ico7.png",
                        "../../static/img/img-me/ico8.png",
                        "../../static/img/img-me/ico9.png"
                    ],
                    info:["各自得15元","","","","有问题找小蜜"],
                    id:["123","234","432","234","432"],
                    path:['/hema/me/shopList/',]
                },
                // 路由信息
                routerInfo:{}
            }
        },
        created(){
            this._backData()
        },
        updated(){
            this.addCart();
        },
        methods:{
          /**
           * 获取后台各种数据
           * @private
           */
            _backData(){
                //推荐商品列表
            const urlone="http://localhost:3000/recommend"
                //const recomWaresInfo="http://localhost:3000/api/recomWaresInfo";
                fetch(urlone).then(res=>{
                    res.json().then(data=>{
                        this.recomWares=data;
                        this.recomWares.forEach((item,index)=>{

                      })
                    })
                });
                //主要信息------资产--------
                const main="http://localhost:3000/api/main";
                fetch(main).then(res=>{
                    res.json().then(data=>{
                      this.main=data;
                    })
                });
                // 路由信息
                const routerInfo="http://localhost:3000/api/routerInfo";
                fetch(routerInfo).then(res=>{
                    res.json().then(data=>{
                        this.routerInfo=data;
                    })
                });
            },
            addCart(){
                let addAll=document.querySelectorAll(".add-cart")
                for(let i=0;i< addAll.length;i++){
                    addAll[i].onclick=parabolaBottom
                }
            }
        },
        components:{
            Header,
            Container,
            Footer
        }
    }
</script>

<style scoped>

</style>
