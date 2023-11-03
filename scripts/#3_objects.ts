// Cамый простой спобоб определить объект использовать тип any
const object_1: any = {
    id: 1,
    name: 'Ivan'
}

// :{} говорит что это объект  в {} определены типы свойств объекта
const object_2: { id: number; name: string } = {
    id: 1,
    name: 'Ivan'
}

// если надо сделать несколько объектов с одинаковым (или не совсем одинаковым) наполнением:
// создаем тип

type newObject = {
    id: number,
    name: string,
    age?: number, // опциональное свойство
    getPass?: () => string // опциональный метод
}

//теперь можно создавать объекты

const object_3: newObject = {
    id: 1,
    name: 'Ivan',
    age: 30
}

const object_4: newObject = {
    id: 1,
    name: 'Ivan',
    getPass(): string { return `${this.name}${(this.id + 15) * 4}` }
}