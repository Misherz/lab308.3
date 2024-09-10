//Fizz Buzz

//Loop through all numbers from 1 to 100.
//If a number is divisible by 3, log “Fizz.”
//If a number is divisible by 5, log “Buzz.”
//If a number is divisible by both 3 and 5, log “Fizz Buzz.”
//If a number is not divisible by either 3 or 5, log the number.

for (let num = 100; num >= 1; num--){
    //numbers both divisble by 3/5
    if(num % 3 == 0 && num % 5 == 0){
        console.log(num + "Fizz Buzz");
    } else if(num % 3 !== 0 && num % 5 !== 0){
        console.log(num);
    } else if(num % 3 == 0){
        console.log(num + "Fizz");
    } else if(num % 5 == 0){
        console.log(num + "Buzz");
    } else{
        console.log(num);
    }
}


//Prime Time
//Declare an arbitrary number, n.
//Create a loop that searches for the next prime number, starting at n and incrementing from there.
//As soon as you find the prime number, log that number and exit the loop.

