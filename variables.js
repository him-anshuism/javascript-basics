/*
let x;  //declartion
 x = 300; //assignment
 let y = 123; //valid
 console.log(x);
 console.log(y);

 //creating a sentance that contains the variables in it.
 //to insert the variables we need to use backticks (`..`) and it cannot be used by using (".." or '..')
  let age = 10.25;
  console.log(`you are ${age} years old`);
  let price = 90;
  console.log(`the price is ${price}`);

  //to know the data type of any variables we need to use typeof function
  let a = 56.7;
  console.log(typeof a);

  //string is a series of characters
   let b= "hi hello";
   console.log(b);
   console.log(typeof b);
   console.log(`yur name is ${b}`);*/

let fullName = "Himanshu";
let age = 23;
let student = false;

document.getElementById("p1").textContent = `my name is ${fullName}`;
document.getElementById("p2").textContent = `my age is ${age}`;
document.getElementById("p3").textContent = `m i a student? ${student}`;
