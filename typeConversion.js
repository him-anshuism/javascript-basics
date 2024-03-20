//sometimes we need to change the data type of certain variable to perform certain operations
//for instance
// let age = window.prompt("How old are you");
// age +=1;
// console.log(age);
//it will display 251 if we give 25 as input because it will take the age as string
//and later on it will concatenate the 1 to it makes it 251

// let age = window.prompt("How old are you");
// age = Number(age);
// age +=1;
// console.log(age ,typeof(age));

let x = "a";
let y = 'b';
let z = "c";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);  //NaN number {not a number}
console.log(y, typeof y);  // converted into a string
console.log(z, typeof z);  // always gives value true for boolean other than true and false, but gives false for an empty string and unassigned vars.
