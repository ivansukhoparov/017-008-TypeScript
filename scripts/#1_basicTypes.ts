const u: undefined = undefined; // переменные типа undefined
const n: null = null; // переменные типа null

const isBoolean: boolean = true; // переменные типа boolean
const isString: string = 'string'; // переменнтая типа string
const isNumber: number = 10; // переменная типа number
const isAny: any = 20 + 'string'; // переменная которая может любого типа и тип может быть переопределен
const isStringOrNumber: number | string = 10; //тип объединения - может быть числом или строкой

const isArray1: Array<string> = ['1', '2', '2'] // Вариант обявления массива произвольной длины и элементами типа string. вместо string можно использовать любой тип данных
const isArray2: number[] = [1, 1, 23, 4, 4, 5] // Вариант обявления массива произвольной длины и элементами типа number
const isArray3: [number, string] = [1, 'string'] // Массив фиксированной длины. :[number, string] определяет длинну массива и типы каждого элемента

// :void - тип для определения отсутствующих типов
// используется, например, в тех случах когда функция ничего не возвращает (т.е. функция возвращает отсутствующий тип)
const foo1 = function (): void {
    console.log('Hello world');
}


// :never - тип данных, который возвращает функция которая:
// 1. Возвращает ошибку 
const fooErr = function (): never {
    throw new Error('msg');
}

// 2. Когда функция не заканчивает своего выполнения
const foo3 = function (): never {
    while (true) {
    }
}


// enum - набор именованных констант
enum directions {
    Up,
    Down,
    Left = 7, //индекс можно задать вручную, для всех или для одного элемента
    Right
}

console.log(directions.Down) // вывод индекса по имени элемента

