///////////FIRST ASSIGNMENT////////////
/*let x = 1;
let y = 1;

console.log(x === y);
*/

///////////////SECOND////////////////////
/*let x = 15;
let y = 10;

if (x > y) {
  console.log('"x больше, чем y"');
} else console.log('"x не больше, чем y".');
*/

//////////////THIRD ASSIGNMENT//////////////
/*let redColor = red;
let greenColor = green;
let yellowColor = yellow;

if (redColor) {
	console.log('Проезд запрещен!');
}  if (greenColor) {
	console.log('Можно ехать!')
} else (yellowColor) console.log('Приготовьтесь!');

*/

////////////////////FOURTH ASSIGNMENT////////////////
const months = [
  "1 Январь",
  "2 Февраль",
  "3 Март",
  "4 Апрель",
  "5 Май",
  "6 Июнь",
  "7 Июль",
  "8 Август",
  "9 Сентябрь",
  "10 Октябрь",
  "11 Ноябрь",
  "12 Декабрь",
];

let spring = months[(2, 3, 4)];
let summer = months[(5, 6, 7)];
let autumn = months[(8, 9, 10)];
let winter = months[(11, 0, 1)];

let randomizer = Math.floor(Math.random() * 12);

if (randomizer <= 4) {
  console.log("spring");
} else if (randomizer <= 7) {
  console.log("summer");
} else if ((randomizer = 11 || randomizer <= 0 || randomizer <= 1)) {
  console.log("winter");
} else if (randomizer <= 10) {
  console.log("autumn");
}

function seasonsMonths() {
  if (randomizer <= 4) {
    console.log(spring);
  } else if (randomizer <= 7) {
    console.log(summer);
  } else if ((randomizer = 11 || randomizer <= 0 || randomizer <= 1)) {
    console.log(winter);
  } else if (randomizer <= 10) {
    console.log(autumn);
  }
}

seasonsMonths;
