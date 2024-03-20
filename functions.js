function add(x,y){
    return x+y;
}
function sub(x,y){
    return x-y;
}
function isEven(number){
    return number%2===0 ? true : false
}

function isValidEmail(email){
    return email.includes("@") ? true : false;
}

console.log(isValidEmail("him@gmail.com"));