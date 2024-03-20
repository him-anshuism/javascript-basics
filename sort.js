//sort() == used to sort elements of an array in place.
//sort elements as strings in lexicographic order, not alphabetical
// lexicographical = (alphabet + number + symbol) as string 
//--------------------------------------------------------------------
//sorting array of strings

// let x = ['x', 'f', 'k', 'o', 'i'];
// x.sort();
// console.log(x);
//--------------------------------------------------------------------
//sorting array contains numbers
// let y = [1,5,3,10,7,6,2,4]; //output => [1,10,2,3,4,5,6,7]  
//arranged the array in lexicographic manner
//means pehly 1 phir 10 kuki 1 dono me aa rha h isliye they both come first 
// console.log(y.sort());

//to overcome this problem
// let sorted = y.sort((a,b) => a-b);  //will perform a substraction then the resultant values are sorted lexocographically
// console.log(sorted)
//--------------------------------------------------------------------
//sorting array contains objects
const x = [{name:"him", age: 23, gpa:8.09},
            {name: "Abhi", age:20, gpa:7.70},
            {name: "abhay", age:22, gpa:7.90}];

// console.log(x.sort((a,b)=> a.age-b.age));
// console.log(x.sort((a,b)=> a.gpa-b.gpa));
console.log(x.sort((a,b)=>a.name.localeCompare(b.name))) //to compare 2 strings in lexicographic manner