//method chaining = calling for one method after another in one continuous line of code
let username = window.prompt("enter your name: ");
//we need to remove all the white spaces from frnt and bck and make only the first letter of the name Capital
//and all the other letters must be in lowercase 

//----------No method chaining-----------

username = username.trim(); //removing white spaces
let letter = username.charAt(0);
letter = letter.toUpperCase();

let extraChars = username.slice(1); //all the other strings except first letter
extraChars = extraChars.toLowerCase();
username = letter + extraChars;
console.log(username);

//---------method chaining------------

username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();


