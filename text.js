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