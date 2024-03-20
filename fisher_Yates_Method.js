//randomly shuffle a deck of card;
const card =['A',1, 2, 3, 4, 5, 6, 7, 8, 9, 10,'J','Q','K'];
shuffle(card)

console.log(card);

function shuffle(array){
    for(let i = array.length - 1; i>0; i--){
        const random = Math.trunc(Math.random()*(i+1)); // random numbers are taken from last elemnts to first element of the array
         [array[i], array[random]] = [array[random], array[i]];
    }
}