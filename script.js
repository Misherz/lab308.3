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


//skipping 


//Your task is to write a script that accomplishes the following: 
//Loop through the characters of a given CSV string.x
//Store each “cell” of data in a variable. x
//When you encounter a comma, move to the next cell.
//When you encounter the “\r\n” sequence, move to the next “row.”
//Log each row of data. X
//You do not need to format the data, the following works well. 
//console.log(cell1, cell2, cell3, cell4);  X
//You can make the following assumptions:
//There will only be 4 cells per row.
//There will be no escaped characters other than “\n”.
const str = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

let cell1 = 'ID,Name,Occupation,Age';
let cell2 = '42,Bruce,Knight,41';
let cell3 = '57,Bob,Fry Cook,19';
let cell4 = '63,Blaine,Quiz Master,58';
let cell5 = '98,Bill,Doctor’s Assistant,26';

for(let char of str){
    console.log(char)
}

for(cells=0; cells <=5; cells++){
    console.log(str)
    break
}

console.log(cell1)
console.log(cell2)
console.log(cell3)
console.log(cell4)
console.log(cell5)

//practice data 
//Input below works

// const str = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";


// for(let char of str){
//     console.log(char)
// }

// for(cells=0; cells <=5; cells++){
//     console.log(str)
//     break
// }
