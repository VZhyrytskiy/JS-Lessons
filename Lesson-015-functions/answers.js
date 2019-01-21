// function expr(a, b, c) {
//     return a + b - c * 10;
// }

// const t1 = expr(1, 1, 1);
// console.log(t1);

// const t2 = expr(2, 2, 2);
// console.log(t2);

// const t3 = expr(3, 3, 3);
// console.log(t3);

// Задание 1.
// Написать функцию, которая принимает один параметр - число, вычисляет сумму цифр и возвращает.
// Вызвать функцию для трех разных чисел.

// function expr(a) {
//     // a = 123 => '123'
//     const aStr = `${a}`; // '123'
//     let i = 0;
//     let sum = 0;
//     while (i < aStr.length) {
//         sum = sum + +aStr[i];
//         i++;
//     }
//     return sum;
// }
// const answer = expr(123);
// console.log(answer); // 6
// const answer1 = expr(65345);
// console.log(answer1); 

// Задание 2.
// Написать функцию, которая принимает 3 числа и возвращает максимальное из них.
// Вызвать функцию, вывестu результат в консоль.


// function expr(a, b, c) {
//     let max = -Infinity;
//         if (a > max) {
//             max = +a;
//         }
//         if (b > max) {
//             max = +b;
//         }
//         if (c > max) {
//             max = +c;
//         }
// return max;
// }
// const answer = expr(-9, -6, -8);
// console.log(answer);

// Задание 3.
// Написать функцию, которая принимает два параметра - два слова и выводит в консоль то слово,
// которое длинее.

// function expr(a, b) {
//     if (a.length > b.length){
//         console.log(a);
//     }
//     else{
//         console.log(b);
//     }
// }
// expr(`ab`, `abcdf`);


// Задание 4.
// Написать функцию, которая принимает два параметра: массив и число и возвращает элемент из массива
// с индексом заданным вторым параметром


// function expr(a, b) {
// return a[b];
// }
// const answer = expr([4, 6, 3, 8], 3);
// console.log(answer);


// Задание 5.
// Написать функцию, которая принимает три параметра - три массива и возвращает один массив, 
// который состоит из элементов трех первых массивов в том порядке, в котором заданы параметры.
// Вызвать функцию, вывести результат в консоль

// a = [1, 2], b = [3, 4] c = [5, 6] expr(a, b, c) => [1, 2, 3, 4, 5, 6]
// function expr(a, b, c) {
//     const f = [];
//     let i = 0;
//     while (i < a.length) {
//         f.push(a[i]);
//         i++;
//     }
//     i = 0;
//     while (i < b.length) {
//         f.push(b[i]);
//         i++;
//     }
//     i = 0;
//     while (i < c.length) {
//         f.push(c[i]);
//         i++;
//     }
//     return f;
// }
// const answer = expr([1, 2], [3, 4], [5, 6]);
// console.log(answer);

// Задание 6.
// Написать функцию, которая принимает два параметра массив и строку, которая может содержать 'number' или
// 'string' и возвращает массив элементов, которые являются или числами или строками, взависимости от
// того, что задано во втором параметре.

// function expr(a, b) {
//     const f = [];
//     let i = 0;
//     while (i < a.length) {
//         if ((b === `string`) && (typeof a[i] === `string`)) {
//             f.push(a[i]);
//         } 
//         else if ((b === `number`) && (typeof a[i] === `number`)) {
//             f.push(a[i]);
//         }
//         i++;
//     }

//     return f;
// }

// const answer = expr([1, 2, `asda`, 3], `number`);
// console.log(answer);



// Задание 7.
// Написать функцию, которая принимает один параметр - объект товар, который содержит название товара,
// цену, скидку, количество. Функция вычисляет сумму со скидкой и возвращает.
// Вызвать функцию и вывести результат в консоль.

const goods = {
    name: `Prosokvashuno`,
    description: `Milk`,
    price: 16,
    number: 236,
    discount: 15
};


function expr(goods) {
    return (goods.price - goods.price / 100 * goods.discount) * goods.number;
}

const sum = expr(goods);
console.log(sum);





// Задание 8.
// Написать функцию, котороя принимает три параметра a, b, c и решает квадратное уравнение.
// Вызвать функцию для разных значений параметров. 

// function expr(a, b, c) {
//     let D = b*b - 4*a*c;
//     let x1;
//     let x2;
//     if (D < 0){
//         console.log(`Решений нету`);
//     }
//     else if (D === 0){
//         x1 = -b/(2*a);
//         return x1;
//     }
//     else{
//         x1 = (-b - Math.sqrt(D))/(2*a);
//         x2 = (-b + Math.sqrt(D))/(2*a);
//         return[x1, x2];

//     }

//     // let x =(-b +- Math.sqrt(D))/2*a;
//     // return a*x^2 + b*x + c ;
// }
// const answer = expr(3, 20, 1);
// console.log(answer);

// Задание 9.
// Написать функцию, которая принимает один параметра - диаметр круга и вычисляет его площадь. 
// Воспользоваться константой Math.PI

// function P(d) {
// return  P = 1/4 * Math.PI * d*d;
// }
// const answer = P(8);
// console.log(answer);

// Задание 10.
// Написать функцию, которая вычисляет площадь квадрата со стороной а, в который вписан круг диаметра а.
// Подказка: площадь круга надо отнять от площади квадрата.

// function P(a) {
//     return a*a - (1 / 4 * Math.PI * a * a);
// };
// const answer = P(8);
// console.log(answer);
