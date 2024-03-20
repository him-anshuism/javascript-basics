let input1 = document.getElementById("input1");
let button1 = document.getElementById("button1");
let label2 = document.getElementById("label2");

let age;
button1.onclick = function(){
    age = input1.value;  //since the value taken by the input text box is string in type
    age = Number(age);

    if(age>=18){
        label2.textContent = `You are eligible`;
    }
    else if(age == 0){
        label2.textContent = `You were just born`;
    }
    else if(age < 18){
        label2.textContent = `you are not eligible`
    }
    else{
        label2.textContext = `enter valid age`
    }



}

//ternary opterator in JS..
// condition ? codeIfTrue : codeIfFalse.

//example
//  let age = 18;
// age >= 18 ? "You are an adult" : "you are not an adult."

//question:
//if your purchase amt is grater than 100 than you will have a discount of 10 percent else the real price
//let pruchaseAmt = 190;
//let discount = purchaseAmt >=100 ? 10 : 0;
//console.log(`total amt${purchaseAmt - purchaseAmt*(discount/100)}`)