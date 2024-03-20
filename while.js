let loggedIn = true;
let username;
let password;

while(!loggedIn){
    username = window.prompt(`Enter username:`);
    password = window.prompt(`Enter password:`);

    if(username === `himanshu` && password === `12345`){
        loggedIn = true;
        console.log("LoggedIn!");
    }
    else{
        console.log('Invalid!');
    }
}