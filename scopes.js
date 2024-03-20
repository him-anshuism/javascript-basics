//local scope of a variable

// function fun1(){
//     let x =1;
//     console.log(x);
// }
// function fun2(){
//     let x =2;
//     console.log(x);
// }

// fun2();  //2
//since variables are defined and initiliazed inside a function called local scope

//****************************** */
//global scope
//varibles defined outside the function blocks and can be called anywhere in the given code

let x =3;
function fun1(){
    console.log(x);
}
function fun2(){
    let x =2;
    console.log(x);
}
fun1(); //3 
fun2(); //2
//unless we defined or reinitialized the value of x inside the function block
//the global scoped variable will be accessed.
