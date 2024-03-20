//arrow function = a concise way to write function expression good for simple function that you use only once 
//(parameter) => function_work;
//example 1:
// const hello = (name, age) => {console.log(`hello ${name}`)
//                              console.log(`you are ${age}`)};

// hello("himanshu" , 23);
//************************************************************************* */
//example 2

//setTimeout(callbak, time_interval)
//we can give function without giving the name inside the callback function
 

//without using arrow function
// setTimeout(function(){
//     console.log("Hello");
// }, 3000);  


//using arrow function
// setTimeout(()=> console.log("hello"), 3000); //since no parameter required to print hence will give nothing inside the paranthesis

//*************************************************************************** */
//example 3

const numbers = [1,2,3,4,5,6,7,8,9];
const square = numbers.map((element)=>Math.pow(element,2));
const evenNums = numbers.filter((element)=> element%2 === 0);
const addNums = numbers.reduce((acc, element)=> acc+element);

console.log(addNums);