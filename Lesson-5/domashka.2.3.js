////////////////////////////////zadanie 1///////////////////////////////////
//1. Создайте объект пользователя, где будет его имя, возраст и род деятельности. Затем, при помощи тернарного оператора, создайте условие, которое проверяет совершеннолетний ли пользователь и выведите в консоль сообщение об этом.

/*let user = {
	name: 'Aizada',
	age: 32,
	job: 'System Administrator',
}
  
user.age >= 18 ? console.log(`${user.name} - Совершеннолетний!`) : console.log(`${user.name} - Не Совершеннолетний!`)*/

////////////////////////////////zadanie 2///////////////////////////////////
//2. Дана строка "ac/dc". Проверьте, что первым символом
//этой строки является буква "а", если это так, выведите
//"да", иначе выведите "нет"

/*let string = "ac/dc"

string[0] == 'a' ? console.log('Da') : console.log('Net')*/

////////////////////////////////zadanie 3///////////////////////////////////
/*3. Дана строка состоящая из 4 символов: "84a7". Найдите
сумму цифр внутри*/

let string = '84a7'

if (isNaN(+string)) {
	console.log('Sorry, not a number, please type in only Numbers!')
} else {
	
	function getSumNumber(num) {
		var sum = 0, tmp;
		while (num) {
			tmp = num % 10;
			num = (num - tmp) / 10;
			sum += tmp;
		}
		return sum;
	}

	console.log(getSumNumber(+string));
}
