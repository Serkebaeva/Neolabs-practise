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
let months = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

let spring = [months[2], months[3], months[4]];
let summer = [months[5], months[6], months[7]];
let autumn = [months[8], months[9], months[10]];
let winter = [months[11], months[0], months[1]];

let randomizer = Math.floor(Math.random() * 11) + 1;
console.log(randomizer);

if (randomizer >= 12 || randomizer <= 2) {
  console.log(winter + " WINTER");
} else if (randomizer >= 3 && randomizer <= 5) {
  console.log(spring + " SPRING");
} else if (randomizer >= 6 && randomizer <= 8) {
  console.log(summer + " SUMMER");
} else if (randomizer >= 9 && randomizer <= 11) {
  console.log(autumn + " AUTUMN");
}
