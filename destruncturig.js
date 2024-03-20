//destructuring = extract values from arrays and objects, then assign them to variables in a convenient way
//    []=to perform array destructuring
//    {}=to perform object destucturing

//-------------example1--------------
//SWAP THE VALUES OF TWO VARIABLES

// let a = 1, b=2;

// [a, b] = [b, a];
// //destructuring the array = assign the values to another array
// console.log(a);
// console.log(b);

//---------------example 2----------------
//SWAP TWO ELEMENTS IN AN ARRAY 

// const colors = ["red", "green", "blue", "black", "white"];

// [colors[0], colors[4]] = [colors[4], colors[0]];
// //destructuring the array = assign the values to another array
// console.log(colors);

//---------------example 3----------------
//ASSIGN ARRAY ELEMENTS TO VARIABLES

// const colors1 = ["red", "green", "blue", "black", "white"];

// //const[firstColor, secondColor, thirdColor] = colors1; //assigned first three elements of array to a new variable;
// const[firstColor, secondColor, thirdColor, ...extraColors] = colors1; //assigned rest of the colors to an array of named extraColors
// console.log(firstColor);
// console.log(secondColor);
// console.log(extraColors);


//---------------example 4----------------
//EXTRACT VALUES FORM OBJECTS

// const person1={
//     firstName: "Himanshu",
//     lastName: "Mishra",
//     age: 23,
//     job: "unemployeed"
// }
// const person2={
//     firstName: "Abhishek",
//     lastName: "Pathak",
//     age: 20,    
// }

// const{firstName, lastName, age, job} = person1;
// //destructuing the object.
// const{firstName1, lastName1, age1, job1="Unemployeed"} = person2;


// console.log(firstName);
// console.log(lastName);

//------------example 5---------------
//DESTRUCTURING IN FUNCTION PARAMETERS
const person1={
    firstName: "Himanshu",
    lastName: "Mishra",
    age: 23,
    job: "unemployeed"
}
const person2={
    firstName: "Abhishek",
    lastName: "Pathak",
    age: 20,    
}
function displayPerson({firstName,lastName, age, job="unemployeed"}){//setting the job's default value
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}

displayPerson(person1);
displayPerson(person2);


