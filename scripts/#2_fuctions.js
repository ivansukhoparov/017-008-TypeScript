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
const foo6 = function (...numbers) {
    return numbers;
};
console.log(foo6(1, 2, 3, 5, 4, 8, 4, 6));
