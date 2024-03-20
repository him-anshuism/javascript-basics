
const fruits = [{name:"apple", color:"red", cost: 75}, //0th index element
                {name:"banana", color:"yellow", cost: 55},// 1st index element
                {name:"orange", color:"orange", cost: 60}];//2nd index element

//calling the name from the first element of the array 
// console.log(fruits[0].name);

//adding new object inside the array
// fruits.push({name:"pineapple", color:"green", cost: 100});
// console.log(fruits);

//deleting the last element form the array
// fruits.pop();
// console.log(fruits);

//delete certain elements from the array
// fruits.splice(1,2);
// console.log


//--------forEach----------------
//fruits.forEach((fruit)=> console.log(fruit));

//----------map()----------------
//will show the elements in an array
// console.log(fruits.map((fruit) => fruit.name));

//------------filter()-------------
//will show the element which satisy the condition
// console.log(fruits.filter(fruit => fruit.color === "yellow"));

//------------reduce()--------------
//will give a single value by taking two parameters storing one previous and a next value
//console.log(fruits.reduce((max,fruit) => fruit.cost > max.cost ? fruit : max ));

