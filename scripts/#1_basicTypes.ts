const u: undefined = undefined; // переменные типа undefined
const n: null = null; // переменные типа null

const isBoolean: boolean = true; // переменные типа boolean
const isString: string = 'string'; // переменнтая типа string
const isNumber: number = 10; // переменная типа number
const isAny: any = 20 + 'string' // переменная которая может любого типа и тип может быть переопределен

const isArray1: Array<string> = ['1', '2', '2'] // Вариант обявления массива произвольной длины и элементами типа string. вместо string можно использовать любой тип данных
const isArray2: number[] = [1, 1, 23, 4, 4, 5] // Вариант обявления массива произвольной длины и элементами типа number
const isArray3: [number, string] = [1, 'string'] // Массив фиксированной длины. :[number, string] определяет длинну массива и типы каждого элемента

// enum - набор именованных констант

enum directions {
    Up,
    Down,
    Left = 7, //индекс можно задать вручную, для всех или для одного элемента
    Right
}

console.log(directions.Down) // вывод индекса по имени элемента

