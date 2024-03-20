let randomNum;
let roll = document.getElementById("button1");
let label = document.getElementById("myLable")
const max = 100;
const min = 1;

roll.onclick = function(){
    randomNum = Math.trunc(Math.random()*max)+min;
    label.textContent = randomNum;


}