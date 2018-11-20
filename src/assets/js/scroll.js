var scroll= function(){
  let he=document.getElementById('trtop');
  let y=1/he.scrollHeight;
  let ops=0;
  let scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
  window.onscroll=function () {
    let timer =setInterval(()=>{
      ops+=scrollTop*y;
      if(scrollTop==0||scrollTop>=he.scrollHeight){
        clearInterval(timer)
      }
      he.style.opacity=ops;
    },10)
  }
}
export {
  scroll
}
