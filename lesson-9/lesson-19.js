// .reduce(), practise,Math, Date

//reduce - summa vseh chisel v massive

const numbers = [1, 2, 3, '2$', 4, 5] // = 25

const result = numbers.reduce((acc, item) => {
	console.log('acc:', acc, 'item:', item)
	if (!isNaN(+item)) {
		return acc + +item
	} else {
		return acc
	}
	
})

console.log(result)
////////////////////////////////////

// .reduce(), practise,Math, Date

//reduce - summa vseh chisel v massive

/*const numbers = [1, 2, 3, '2$', 4, 5] // = 25
const result = numbers.reduce((acc, item) => !isNaN(+item) ? acc + +item : acc)
console.log(result)*/

const numbers = [1, 2, 'neobis', 3, '10$', 4, 5, -5] // = 25
const result = numbers.reduce((acc, item) => acc + (+item || 0)) 
console.log(result)

/////////// Homeworks
const users = [
	{ name: "Adilet", age: 20, login: 'amaterasuu', password: "admin123" },
	{ name: "Aktan", age: 25, login: 'amater', password: "12345678" },
	{ name: "Samat", age: 23, login: 'amaterakuuuu', password: "qwerty" },
	{ name: "Asyl", age: 17, login: 'amateeeeer', password: "fsdgfd" },
	
  ];

 /* const usersTotalAge = users.reduce(('acc:', acc, 'item:', item) => acc + item.age, 0)
  console.log(usersTotalAge)*/

  // 1. Создать новый массив с теми же пользователями, без поля пассворд методом MAP

 /* const exceptPassword = users.map((user) => user.password);

  if (users.includes('password')) {
	  continue;
  } else {
	  console.log(users)
  }
*/

////////////////////////////2//////////////////////////////////////

/*const usersAge = users.filter((user) => user.age >= 18)
const loginExceeds8simbols = users.filter((user) => user.login.length >= 8)
console.log(usersAge, loginExceeds8simbols)*/

////////////////////////////3//////////////////////////////////////

/*const consistSOnUserNames = users.filter((user) => user.name.includes('S'))
console.log(consistSOnUserNames)*/

//////////////////////GLOBAL'NYE OBEKTY - MATH(+, -, *, /)//////////////////////
console.log(Math.PI) //3.14
/*console.log(Math.round(4.2))
console.log(Math.round(4.7))*/
/*console.log(Math.ceil(4.2))
console.log(Math.ceil(4.7))*/
/*console.log(Math.floor(4.7))
console.log(Math.floor(4.2))*/
/*console.log(Math.trunc(4.2))
console.log(Math.trunc(4.7))*/

//console.log(Math.pow(2,2)) //vozvedenie v stepen'

/*console.log(Math.sqrt(16)) //nahojdenie kornya chisla
console.log(Math.sqrt(64))*/

console.log(Math.round(Math.random()*10))
console.log(Math.round(Math.random()*100))
console.log(Math.round(Math.random()*1000))

const users = [
	{ name: "Adilet", age: 20, login: 'amaterasuu', password: "admin123" },
	{ name: "Aktan", age: 25, login: 'amater', password: "12345678" },
	{ name: "Samat", age: 23, login: 'amaterakuuuu', password: "qwerty" },
	{ name: "Asyl", age: 17, login: 'amateeeeer', password: "fsdgfd" },
	
];

console.log(users[Math.round(Math.random() * users.length - 1)])

//////////////////////GLOBAL'NYE OBEKTY - DATE//////////////////////

console.log(Date.now())

const date = new Date()
console.log(date)

/*const date = new Date(2001, 08, 11)
console.log(date, typeof date)*/
console.log(date.getFullYear())
console.log(date.getMonth())
console.log(date.getDate())
console.log(date.getDate())
console.log(date.getDay())
console.log(date.getHours())
console.log(date.getMinutes())
console.log(date.getSeconds())
console.log(date.getUTCMilliseconds())