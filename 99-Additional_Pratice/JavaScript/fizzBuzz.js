/* write a function that will take in a number and will
return a list of each number in order. If the number can be divided by 3 print out 
Fizz and if the number can be divided by 5 print out Buzz. If the number can be divided by
3 and 5 print out FizzBuzz
*/

function fizzBuzz(num){
    // we need to start with looping through each number between 1 - num
    for (var i=1; i<=num; i++){
     //remember the % operator, gives you the remainder of a division of 2 numbers 
     if(i%15===0) console.log("FizzBuzz")
     // the above check could also be expressed by if(i%3 &&i%5)
     else if (i%3 === 0)console.log("Fizz");
     else if (i%5 === 0) console.log("Buzz");
     // this gives us the number if it does not fit in the above checks
     else console.log(i);
    }
    }
    fizzBuzz(20);
    console.log(fizzBuzz(20),"hello");