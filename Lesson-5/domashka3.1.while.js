//not yet  4 ;done 1, 2, 6, 3, 5, 
//////////////////////////////zadanie 1///////////////////////////////////
//1: Выведите столбец чисел от 11 до 33.
/*let i = 11;
while (i<=33) {
	console.log(i)
	i++
}*/

//////////////////////////////zadanie 2///////////////////////////////////
//2: Выведите столбец четных чисел в промежутке от 0 до 100.
/*let i = 0;
while ( i <= 100) {
	if (i % 2 == 0) {
	  console.log( i );
	}
	i++
}*/

//////////////////////////////zadanie 3///////////////////////////////////
//3: С помощью цикла найдите сумму чисел от 1 до 100.
/*let sum = 0

let i = 1;
while (i <=100) {
	console.log(sum +=i)
	i++
}*/



//////////////////////////////zadanie 4///////////////////////////////////
//4: Даны числа от 1 до 10.
//Найти факториал каждого числа.
//Подсказка: формула факториала n!
//n! = 1 * … * (n-2) * (n-1) * n.
//Пример вывода: Факториал 5 = 120.

let num = 1

let i = 1
while (i <= 10) {
 num = num * i
 console.log(num)
 i++
}

console.log(num)

//////////////////////////////zadanie 5///////////////////////////////////
//5. Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9. С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-'.

/*let elements = [
	1, 2, 3, 4, 5, 6, 7, 8, 9
]

let i = 0;
while (i <= elements.length){	
	//let result = (('-' +elements[i]))
	//console.log(result)
	let str = elements.join('-');
	console.log(str)
	i++
}
*/

//////////////////////////////zadanie 6///////////////////////////////////
/*const users = [
	{ name: 'Bakyt', age: 17, job: 'Student' },
	{ name: 'Erjan', age: 21, job: 'Student' },
	{ name: 'Gulzada', age: 18, job: 'Student' },
	{ name: 'Aizada', age: 20, job: 'Student' },
]

let i = 0;
while (i < users.length) {
users[i].age >= 18 ? console.log(`${users[i].name} Совершеннолетний!`) : null;
i++
}*/

