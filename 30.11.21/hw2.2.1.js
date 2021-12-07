//////////////////////////////1. OWN-REVERSE/////////////////////////////////////
const users = [
  { id: 1, name: "Adilet", age: 18, job: "Node.js.developer" },
  { id: 2, name: "Aktan", age: 16, job: "FrontEnd.developer" },
  { id: 3, name: "Dima", age: 17, job: "FrontEnd.developer" },
  { id: 4, name: "Chyngyz", age: 21, job: "FrontEnd.developer" },
  { id: 5, name: "Chinara", age: 31, job: "GraphicDesign" },
];

/*const arr = users.reverse();
  console.log(arr);*/

function ownReverse() {
  for (let i = users.length - 1; i >= 0; i--) console.log(users[i]);
}

ownReverse();

//////////////////////////////2. PALINDROME/////////////////////////////////////
const userInput1 = "Анна";

let isPalindrome = true;
let userInput = userInput1.toLowerCase();

for (let i = 0; i < userInput.length / 2 && isPalindrome; i++) {
  if (userInput[i] !== userInput[userInput.length - i - 1]) {
    isPalindrome = false;
  }
}

isPalindrome
  ? console.log("TRUE, Your word - is Palindrome!")
  : console.log("FALSE, Your word isn't Palindrome!");

//////////////////////////////3. OWN-UNSHIFT/////////////////////////////////////
const arr = [1, 2, 3, 4, 5];
//arr.unshift(25);

console.log("Given array:", arr);

function ownUnshift(x) {
  ++arr.length;
  arr.copyWithin(1, 0);
  arr[0] = x;
  return arr;
}
ownUnshift(147);
ownUnshift(25);
ownUnshift(-745);

console.log("New array: ", arr);
