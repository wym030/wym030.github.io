function timeLimit(){
  var t=setTimeout("alert('点击题目揭晓答案')",3000)
}

function changeText(id) {
    id.innerHTML = "五十一";
}

function answerBox(){
     var response = prompt("你的答案是");
     if (response==="五十一") {
       alert("哇，你可真是个小机灵鬼！");
 }
  else {
  alert("请再试一次吧！")
};
}
