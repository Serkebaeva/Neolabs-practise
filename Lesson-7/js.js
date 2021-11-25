// let rendomNum = 1;
// let numbers = ['Один', 'Два', 'Три', 'четыре', 'Пять'];

// console.log(rendomNum);
// console.log(numbers[rendomNum - 1])

//variant 2
/* const randomNum = 1
const numbers = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',

}
 console.log(randomNum, numbers[randomNum]); */

//variant 3
/* let randomNum = 3
let numbers = ['Один', 'Два', 'Три', 'четыре', 'Пять'];

for (let i = 0; i<= randomNum; i++) {
   if (i == randomNum) {
       console.log(${+randomNum} ${numbers[i - 1]})
   }
} */

//variant 4
/* let randomNum = 3
let numbers = ['Один', 'Два', 'Три', 'четыре', 'Пять'];

for (number in numbers) {
   if (number == randomNum) {
       console.log(${number} ${numbers[number - 1]})
   }
} */


//Switch Case - vnutri only Strogoe sravnenie, mojno ispol'zovat' Return vmesto Break; Default vmesto - Else...

const randomNum = 2

switch(randomNum) {
    case 1:
     console.log('One')
    break;
    case 2:
     console.log('Two')
    break;
    case 3:
     console.log('Three')
    break;
    case 4:
     console.log('Four')
    break;
    case 5:
        console.log('Five')
    break;
} 

//Odd or Even
/* const randomNum = 6

switch(randomNum) {
    case 1:
    case 3:
    case 5:
        console.log('Odd')
    break;
    case 2:
    case 4:
    case 6:
        console.log('Even')
    break;
} */

//ODD or EVEN
const randomNum = 2

switch(true) {
    case randomNum % 2 == 0:
     return console.log('Even')
    case randomNum % 2 !== 0:
     return console.log('Odd')
}