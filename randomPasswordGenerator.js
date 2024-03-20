//random password generator//

const passLength = 12;
const lowercase = true;
const uppercase = true;
const numbers = true;
const symbols = true;


function generatePassword(passLength,lowercase,uppercase,numbers,symbols){
    const lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbersChar = "0123456789";
    const symbolsChar = "!@#$%^&*()_+";

    let allowedChars = "";
    let pass = "";

    allowedChars += lowercase ? lowercaseChar : "";
    allowedChars += uppercase ? uppercaseChar : "";
    allowedChars += numbers ? numbersChar : "";
    allowedChars += symbols ? symbolsChar : "";


    if(allowedChars <= 0){
        return `password length must be at least 1.`
    }
    else if(allowedChars.length === 0){
        return `Password must contain atelast a type.`
    }
    else{
        for(let i =0; i< passLength;i++){
            const randomIndex = Math.trunc(Math.random()*allowedChars.length);
            pass += allowedChars[randomIndex];
        }
        return pass;
    }
}

console.log(generatePassword(passLength,lowercase,uppercase,numbers,symbols));