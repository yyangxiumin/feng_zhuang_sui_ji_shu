 //随机取整
 function randomInt(n,m){
    return Math.floor(Math.random() * (m-n+1) + n);
}
/* 随机rgb颜色 */
function randomInt(n,m){
    return Math.floor(Math.random() * (m-n+1) + n);
}
var r = randomInt(0,255);
var g = randomInt(0,255);
var b = randomInt(0,255);
var color = 'rgb('+r+','+g+','+b+') ';
console.log(color);

/* 随机十六进制颜色 */
function randomHexColor1() {
  var arr = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e'];
  var color = ["#"];
  for (var i = 0; i < 6; i++) {
    var r = Math.floor(Math.random() * arr.length);
    color.push(arr[r]);
  }
  return color.join('');
}
console.log(randomHexColor1());
var box = document.getElementById('box');

//日期的封装
function formatDate(){
  var now = new Date();
  var y = now.getFullYear();
  var m = now.getMonth() + 1;
  var d = now.getDate();
  var h = now.getHours();
  var mm = now.getMinutes();
  var s = now.getSeconds();
  return y + '-' + patchZero(m) + '-' + patchZero(d) + ' ' + patchZero(h) + ':' + patchZero(mm) + ':' + patchZero(s);
}

function patchZero(v){
  return v < 10 ? '0' + v : v;
}