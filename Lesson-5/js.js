// ЦИКЛЫ
/*for (let i = 0; i < 5; i++) {
  console.log(i);
}*/

/*for (let i = 5; true; i++) {
  console.log(i);
}*/ //Из-за условия TRUE --> будут выводиться цифры БЕСКОНЕЧНО

/*for (let i = 5; i <= 20; i += 5) {
  console.log(i);
}*/

/*let names = ["Bakyt", "Erjan", "Gulzada", "Aizada", "Ibragim", "Bek"];

for (let i = 0; i < names.length; i++) {
  //  console.log("Hello, " + '"' + names[i] + '!"');
  console.log(`Hello, ${names[i]}`);
}
*/
//////////////////////////////////////////////////////////////
let string = '847'

if (isNaN(+string)) {
	console.log('Sorry, not a number, please type in only Numbers!')
} else {
	let stringValues = ((''+string).split(''));
	console.log(stringValues)
	let stringReverse = (''+stringValues.join(''))
	console.log(stringReverse)
	console.log(typeof stringReverse)
	
}


