'use strict'
function fizzbuzz(n){
    for (let i = 1; i <=n; i++) {
        if (i % 3 === 0 && i%5 === 0){
            console.log('fizzbuzz');
        } else if (i%3===0) {
            return 'buzz'
        }
        else if (i%5===0){
            return 'fizz'
        }
        else{
            console.log(i);
        }
    }
}


fizzbuzz(25);