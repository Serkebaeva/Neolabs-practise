////////////////////////////////////////////////////////////////////////////
//1. Создайте массив и поместите в него 10 любых элементов
let array = [
  "Тетрадь",
  "Ручка",
  "Карандаш",
  "Сумка",
  "Линейка",
  "Блокнот",
  "Дневник",
  "Папка",
  "Клей",
  "Бумага А-4",
];
console.log(array);
///////////////////////////////////////////////////////////////////////////////
/*2. Создайте массив и поместите в него как минимум 5 разных типов данных*/

let assorti = ["Тетрадь", 20, true, undefined, null];
console.log(assorti);

////////////////////////////////////////////////////////////////////////////////
/*3. Создайте вложенный массив и попробуйте получиться доступ до элемента внутри вложенного массива*/

let goods = [
  [
    "Тетрадь",
    "Ручка",
    "Карандаш",
    "Сумка",
    "Линейка",
    "Блокнот",
    "Дневник",
    "Папка",
    "Клей",
    "Бумага А-4",
  ],
  ["монитор", "Системный-блок", "Жесткий-диск"],
];

console.log(goods[0][2], goods[1][1]);