"use strict";
let var1 = 1;
var1 = '1';
const u = undefined; // переменные типа undefined
const n = null; // переменные типа null
const isBoolean = true; // переменные типа boolean
const isString = 'string'; // переменнтая типа string
const isNumber = 10; // переменная типа number
const isAny = 20 + 'string'; // переменная которая может любого типа и тип может быть переопределен
const isStringOrNumber = 10; //тип объединения - может быть числом или строкой
const isArray1 = ['1', '2', '2']; // Вариант обявления массива произвольной длины и элементами типа string. вместо string можно использовать любой тип данных
const isArray2 = [1, 1, 23, 4, 4, 5]; // Вариант обявления массива произвольной длины и элементами типа number
const isArray3 = [1, 'string']; // Массив фиксированной длины. :[number, string] определяет длинну массива и типы каждого элемента
// :void - тип для определения отсутствующих типов
// используется, например, в тех случах когда функция ничего не возвращает (т.е. функция возвращает отсутствующий тип)
const foo1 = function () {
    console.log('Hello world');
};
// :never - тип данных, который возвращает функция которая:
// 1. Возвращает ошибку 
const fooErr = function () {
    throw new Error('msg');
};
// 2. Когда функция не заканчивает своего выполнения
const foo3 = function () {
    while (true) {
    }
};
// enum (перечисления) - набор именованных констант
var directions;
(function (directions) {
    directions[directions["Up"] = 0] = "Up";
    directions[directions["Down"] = 1] = "Down";
    directions[directions["Left"] = 7] = "Left";
    directions[directions["Right"] = 8] = "Right";
})(directions || (directions = {}));
;
console.log(directions.Down); // вывод индекса по имени элемента
console.log(directions[1]); // вывод элемента по индексу
// для enum можно задать илюбые имена для индексов
var links;
(function (links) {
    links["inst"] = "http://instagramm.com";
    links["linkedin"] = "http://linkedin.com";
})(links || (links = {}));
;
console.log(links.inst);
;
const inst = "http://instagramm.com" /* _links.inst */; // объект не создается но значение присваивается
