"use strict";
const u = undefined; // переменные типа undefined
const n = null; // переменные типа null
const isBoolean = true; // переменные типа boolean
const isString = 'string'; // переменнтая типа string
const isNumber = 10; // переменная типа number
const isAny = 20 + 'string'; // переменная которая может любого типа и тип может быть переопределен
const isArray1 = ['1', '2', '2']; // Вариант обявления массива произвольной длины и элементами типа string. вместо string можно использовать любой тип данных
const isArray2 = [1, 1, 23, 4, 4, 5]; // Вариант обявления массива произвольной длины и элементами типа number
const isArray3 = [1, 'string']; // Массив фиксированной длины. :[number, string] определяет длинну массива и типы каждого элемента
