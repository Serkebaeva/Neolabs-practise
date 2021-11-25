////////////////////////////////assignment-1////////////////////////////////////
//1. Напишите функцию, получающую на вход два числа. Если оба числа чётные - функция возвращает их произведение. Если оба числа нечётные - функция возвращает
//их сумму. Если одно из чисел чётное, а второе нечётное - функция
//возвращает это нечётное число.
//Например:
//functionName(2, 4) - вернет 8 (2 * 4), functionName(3, 7) - вернет 10
//(3 +  7), functionName(5, 6) - вернет 5 (5 - нечетное число, а 6 четное)

function calculation(num1, num2) {
  if (num1 % 2 == 0 && num2 % 2 == 0) {
    return num1 * num2;
  } else if (num1 % 2 && num2 % 2) {
    return num1 + num2;
  } else if (num1 % 2 == 0 && num2 % 2 == 1) {
    num2;
  } else if (num1 % 2 == 1 && num2 % 2 == 0) {
    return num1;
  }
}
console.log(calculation(2, 4));
console.log(calculation(3, 7));
console.log(calculation(5, 6));

////////////////////////////////assignment-2////////////////////////////////////
//2. Есть массив [null, 2, 12, undefined, 'duck', 19]. Напишите новую функцию,
//которая вернет новый массив, но в нём будут только числа: [2, 12, 19] (БЕЗ ИСПОЛЬЗОВАНИЯ МЕТОДОВ МАССИВА и Set)
let array = [null, 2, 12, undefined, "duck", 19, 1, "45"];

function justNumbers() {
  let arr = array;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (typeof arr[i] !== "number") arr.splice(i, 1);
  }

  return arr;
}

//Option2
let array2 = array.filter(function (item) {
  return typeof item === "number";
});

console.log(justNumbers());
console.log(array2);

////////////////////////////////assignment-3////////////////////////////////////
//3. Напишите функцию operation(m, n, o), в которой m и n — числовые переменные, а o —
//название математической операции, которую нужно выполнить над m и n
//("sum" - сумма, "sub" - вычитание, "mul" - умножение, "div" - деление).
//Функция должна возвращать результат операции
//Например:
//operation(5, 5, "sum") - вернет 10 (5 + 5), operation(7, 2, "sub") -
//вернет 5 (7 - 2), operation(2, 2, "mul") - вернет 4 (2 * 2),
//operation(10, 2, "div") - вернет 2 (10 / 5)

function operation(m, n, o) {
  switch (o) {
    case "sum":
      let summary = m + n;
      return summary;
      break;

    case "sub":
      let substraction = m - n;
      return substraction;
      break;

    case "mul":
      let mul1 = m * n;
      return mul1;
      break;

    case "div":
      let div1 = m / n;
      return div1;
      break;
  }
}

console.log(operation(5, 5, "sum"));
console.log(operation(7, 2, "sub"));
console.log(operation(2, 2, "mul"));
console.log(operation(10, 5, "div"));
