function getFirstSelector(selector){
  return document.querySelector(`${selector}`)
}

function nestedTarget(){
 return document.getElementById('nested').querySelector('.target')
}

function increaseRankBy(n){
  const lis = document
  .getElementById("app")
  .querySelectorAll("ul.ranked-list li");
  
  var x = parseInt(`${n}`)
 
for (let i = 0; i < lis.length; i++) {
  var b = parseInt(lis[i].innerHTML); 
  lis[i].innerHTML = (b + x).toString();
}
}

function deepestChild(){
const deep = document
.getElementById('app')
.querySelectorAll('div#grand-node div');

var x = deep.length - 1;


return deep[x]

}