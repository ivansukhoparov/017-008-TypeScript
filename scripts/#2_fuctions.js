"use strict";
// для функций аргументам приваивается тип
//можно задать значение по умолчанию
const foo4 = function (name = 'Ivan', age = 35) {
    return name + age;
};
console.log(foo4());
// если значения по умалчанию не заданы - аргумент можно сделать опциональным с помощью символа "?"
// наличие аргумента надо обработать внутри функции
const foo5 = function (name, age) {
    if (age)
        return name + age;
    else
        return name;
};
console.log(foo5('Ivan', '24'));
console.log(foo5('Ivan'));
// Остаточные параметры в функции (REST)
// тип возвращаемого функцией значения указывается после круглых скобок
const foo6 = function (...numbers) {
    return numbers.length;
};
console.log(foo6(1, 2, 3, 5, 4, 8, 4, 6));
// запись функции в переменную происходи с помощью стрелочной функции
// тип аргументов и возвращаемого значения объевляемой переменной дложен совпадать с типами записываемой в переменную функцией
let newFoo; // nubmer описывает тип аргумета, string - тип возврщаемых данных
function oldFoo(num) {
    return '-' + num;
}
newFoo = oldFoo;
// тоже самое и для функции, которая ничего не возвращает
let newFoo_2; // вместо void может быть never
function oldFoo_2(str) {
    console.log(str);
}
