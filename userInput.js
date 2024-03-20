//one way to create user input prompt is using "window.input()"keyword

// let username;
// username = window.prompt("What is your name?");
// console.log(username);

//other way to create user input is by using HTML 
let username;
document.getElementById("sub").onclick = function(){
    username = document.getElementById("mytexts").value;
   // console.log(username);
   document.getElementById("h1").textContent = `Hello ${username}`;
}