<template>
  <section>
            <ul>
                <li :item="item" :idx="idx" v-for="(item,idx) in shopInfo">
                    <img :src="item.pic" />
                    <div>
                        <h3>{{item.title}}</h3>
                        <p>
                            <i>{{item.address}}</i>
                            <span><img src="../../assets/img/img-shoplist/posi.png" />{{item.distance}}</span>
                        </p>
                    </div>
                </li>
            </ul>
        </section>
</template>

<script>
    export default {
        name: "Section",
        props:["shopInfo"]


    }
</script>

<style scoped>
  section {
    height: 100%;
    border-top: .01rem solid #e7e7e7;
    background: #f4f4f4; }
  section ul li {
    background: #fff;
    margin-top: .1rem; }
  section ul li  {
    color: #343434; }
  section ul li  img {
    width: 100%;
    height: 1.73rem; }
  section ul li  div {
    line-height: .24rem;
    padding: .15rem .2rem; }
  section ul li  div h3 {
    font-size: .15rem; }
  section ul li  div p {
    display: flex;
    align-items: center;
    justify-content: space-between; }
  section ul li  div p i{
    width: 2.66rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  section ul li  div p span {
    display: flex;
    align-items: center; }
  section ul li  div p span img {
    width: .14rem;
    height: .14rem; }
</style>
