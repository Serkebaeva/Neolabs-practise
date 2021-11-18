////////////////////////////assignment-1////////////////////////////////////////
//1. Создайте функцию repeat(str, n), которая возвращает
//строку, состоящую и n повторений строки str. n — по умолчанию 2, str —
//пустая строка

function repeat(str = "", n = 2) {
    let multiplication = str * n;
  
    return multiplication;    
}
console.log(repeat(8));

////////////////////////////assignment-2////////////////////////////////////////
//2. Создайте функцию rgb(), которая будет
//принимать три числовых аргумента и возвращать строку вида
//«rgb(23,100,134)». Если аргументы не заданы, считать их равными нулю.

function rgb(num1 = 0, num2 = 0, num3 = 0) {
    let result = String(`"rgb(${num1},`+ `${num2},`+`${num3})"`)
    return result;
}
console.log(rgb());
 
////////////////////////////assignment-3////////////////////////////////////////
//3. Создайте функцию max(a, b) , которая будет возвращать максимальное из двух чисел.

function max(a, b) {
    if (a < b) {
        return b
    } else {
        return a
    }
}

console.log(max(5,10))
console.log(max(20,3))
console.log(max(7,8))

////////////////////////////assignment-4////////////////////////////////////////
//4. Напишите
//функцию operation(m, n, o), в которой m и n — числовые переменные, а o —
//название математической операции, которую нужно выполнить над m и n
//("sum" - сумма, "sub" - вычитание, "mul" - умножение, "div" - деление).
//Функция должна возвращать результат операции

function operation(m, n, o) {
    
    switch (o) {
        case 'sum':
          let summary = m + n;
          return summary
        break;

        case 'sub':
          let substraction = m - n;
          return substraction
        break;  

        case 'mul':
         let mul1 = m * n;
         return mul1
        break;

        case 'div':
          let div1 = m / n;
          return div1
        break;
    }
}

console.log(operation(2,2,'sum'))
console.log(operation(2,2,'sub'))
console.log(operation(2,2,'mul'))
console.log(operation(2,2,'div'))