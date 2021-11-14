/////////////////////////Assignment 1////////////////////////////////////////
/*let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130

}

let sum = 0;
for (let salary of Object.values(salaries)) {
  sum += salary;
}

console.log(sum)*/

/////////////////////////Assignment 2////////////////////////////////////////
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
}


for (let menu1 of Object.values(menu)) {
	if (isNaN(+menu1)) {
		console.log('Sorry, not a number')
	} else {
	 console.log(+menu1 * 2)
	}
}