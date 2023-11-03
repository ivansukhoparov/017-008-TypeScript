"use strict";
// Cамый простой спобоб определить объект использовать тип any
const object_1 = {
    id: 1,
    name: 'Ivan'
};
// :{} говорит что это объект  в {} определены типы свойств объекта
const object_2 = {
    id: 1,
    name: 'Ivan'
};
//теперь можно создавать объекты
const object_3 = {
    id: 1,
    name: 'Ivan',
    age: 30
};
const object_4 = {
    id: 1,
    name: 'Ivan',
    getPass() { return `${this.name}${(this.id + 15) * 4}`; }
};
