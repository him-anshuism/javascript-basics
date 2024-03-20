//closure = A function defined inside of another function, the inner function has access to the variables and scope of the outer function.
//Allow for private variables and state maintainance
//Used frequently in JS frameworks: React, Vue, Angular.


//-------------------------------------------------------------------------------
// function outer(){
//     let message = "Hello";

//     function inner(){
//         console.log(message);
//     }

//     inner();   //we need to call the inner funtion in outer block in order to perform the code inside of the inner block

// }

// outer();

//-------------------------------------------------------------------------------
// function increment(){
//     let count =0;
//     count ++;
//     console.log(count);
// }

// increment();
// increment();
// increment();
//this will always give 1 as its result after every execution bcz after one exection it will reset the count value to 0
//-------------------------------------------------------------------------------

// function createrCounter(){
//     let count =0;
//     function increment(){
//         count++;
//         // console.log(count);
//     }

//     function getCount(){
//         return count;
//     }
    
//      return {increment,getCount}; //creating an object to get the value outside the outerfuntion
// }

// const counter = createrCounter();
// counter.increment();
// counter.increment();
// counter.increment();

// console.log(`the current value of counter is ${counter.getCount()}`);

//-------------------------------------------------------------------------------
function createGame(){
    let score =0;

    function increase(pts){
        score += pts;
        console.log(`+${score}pts`);
    }

    function decrease(pts){
        score -= pts;
        console.log(`-${score}pts`);
    }

    function getScore(){
        return score;
    }

    return {increase, decrease,getScore};
}

const newGame = createGame();
newGame.increase(6);
newGame.decrease(3);
console.log(newGame.getScore());