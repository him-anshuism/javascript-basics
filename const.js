// let pi = 3.1498;
// let radius = window.prompt("radius");
// radius = Number(radius);
// let circumference = 2*pi*radius;
// console.log(circumference);

//we use const to assign a constant value to a variable 
const PI = 3.14;
let radius;
let circumference;

document.getElementById("butt").onclick = function(){
   radius = document.getElementById("mytext").value;
   radius = Number(radius);
   circumference = 2*PI*radius;
   document.getElementById("result").textContent = circumference + 'cm';
   
   
}