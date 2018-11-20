

export default {
  //存放共享的state;
  state:{
    productList:[]
  },
  //用来更改(插入)state状态;
  mutations:{
    //往购物车里添加东西
    ADDGOODS:(state,args)=>{
      let y=args.商品.id;
      let x=true;
      for(let i=0;i<state.productList.length;i++){
            if(y==state.productList[i].商品.id){
              x=false;
              state.productList[i].isxuan=true;
              state.productList[i].商品.num=parseInt(args.商品.num)+parseInt(state.productList[i].商品.num)
            }
      }
      if(x){
        state.productList.push(args);
      }
    },
    //商品数量增加；
    ADDNUM:(state,args)=>{
      state.productList[args].isxuan=true;
      state.productList[args].商品.num++;
      if(state.productList[args].商品.num>state.productList[args].商品.kucun){
        state.productList[args].商品.num=state.productList[args].商品.kucun
      }
    },
    //商品数量减少；
    SUBNUM:(state,args)=>{
      state.productList[args].商品.num--;
      if(state.productList[args].商品.num<=0){
        console.log(state.productList[args])
        state.productList.splice(args,1)
      }
    },
    //商品列表替换;
    REPLACELIST:(state,args)=>{
      state.productList=args;
      //console.log(args)
    },
    //改变选中状态
    CHANGE:(state,args)=>{
      //console.log(args)
      if(state.productList[args].isxuan){
        state.productList[args].isxuan=false;
      }else{
        state.productList[args].isxuan=true;
      }
    },
    //删除选中商品
    DELE:(state,args)=>{
        for(let i =state.productList.length-1;i>=0;i--){
          if(state.productList[i].isxuan){
            state.productList.splice(i,1)
          }
        }
    },
    //改变数量
    VAA:(state,args)=>{
      if(state.productList[args].商品.num<=1){
        state.productList[args].商品.num=1;
      }
      if(state.productList[args].商品.num>=state.productList[args].商品.kucun){
        state.productList[args].商品.num=state.productList[args].商品.kucun
      }
    },
    ALLCLC:(state,args)=>{
      let count=0;
      for(let i=0;i< state.productList.length;i++){
          if(state.productList[i].isxuan){
            count++;
          }
      }
      if(count==state.productList.length){
        for(let i=0;i< state.productList.length;i++){
          state.productList[i].isxuan=false
        }
      }else{
        for(let i=0;i< state.productList.length;i++){
          state.productList[i].isxuan=true
        }
      }
    }
  },
  //获取外部请求
  actions:{
    INCGOODS:(store,arges)=>{
      store.commit("ADDGOODS",arges)
    },
    INNUM:(store,arges)=>{
      store.commit('ADDNUM',arges)
    },
    INSUB:(store,arges)=>{
      store.commit('SUBNUM',arges)
    },
    OBTAIN:(store,arges)=>{
      store.commit('REPLACELIST',arges)
    },
    //是否选中
    ISON:(store,arges)=>{
      store.commit('CHANGE',arges)
    },
    TODELE:(store,arges)=>{
      store.commit('DELE')
    },
    TOVAA:(store,arges)=>{
      store.commit('VAA',arges)
    },
    ALL:(store,arges)=>{
      store.commit('ALLCLC')
    }
  },
  //获取状态值
  getters:{
    GETGOODS:(state)=>{
      return state.productList;
    },
    GETTOTAL:(state)=>{
      let tat=0;
      //console.log(state.productList)
      for(let i=0;i< state.productList.length;i++){
        if(state.productList[i].isxuan){
          tat+= parseFloat(parseInt(state.productList[i].商品.num)*parseFloat(state.productList[i].商品.newPrice));
        }
      }
      return tat.toFixed(2);
    },
    GETNUM:(state)=>{
      let num=0;
      //console.log(state.productList.length)
      for(let i=0;i< state.productList.length;i++){
        if(state.productList[i].isxuan){
          num+=parseInt(state.productList[i].商品.num);
        }
      }
      return num;
    }

  }
}
