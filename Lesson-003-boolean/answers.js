// Task 01
// Вводиться три числа.
// Если первое число больше второго, а второе число больше третьего, то вывести третье число.

// console.log(process.argv);

// let a = +process.argv[2];
// let b = +process.argv[3];
// let c = +process.argv[4]; //Task 1

// if ((a > b) && (b > c)) {
//     console.log(c);
// }

// Task 02
// Задание 5 из предыдущей темы переписать и применением оператора ||

// let a = +process.argv[2];
// let b = +process.argv[3];
// let c = +process.argv[4];
// if ((a * a + b * b == c * c) || (c * c + b * b == a * a ) || (c * c + a * a == b * b)){
//   console.log(`True`);
// }
// else {                                    //Task 2
//   console.log(`False`);
// }

// Task 03
// Дверной проем задается числами a, b. Вводяться в программу. 
// Узнать можно ли через этот проем пронести шкаф размерами c, d, e. Размеры вводяться в программу.

// let vd = +process.argv[2];
// let shd = +process.argv[3];

// let vshk = +process.argv[4];
// let glb = +process.argv[5];
// let shshkf = +process.argv[6];



// if ((vd > vshk) && (shd > glb)){      //Task 3
// console.log(`Проходит`);
// }
// else if ((vd > shshkf) && (shd > glb)){
// console.log(`Проходит`);    
// }
// else if ((vd > glb) && (shd > shshkf)){
// console.log(`Проходит`);    
// }
// else {
// console.log(`Не проходит`);    
// }

// Task 04
// Вводиться число a. Если оно принадлежит диапазону b, c, вывести в 
// консоль "Число а принадлежит диапазону [b, c]". Числа вводяться. 

// let b = +process.argv[2];
// let c = +process.argv[3];
// let a = +process.argv[4];

// if ((b < c) && (a > b) && (a < c)) {
//     console.log(`Число ` + a + ` принадлежит диапазону [`+ b +`, `+ c +`]`);
//     console.log(`Число ${a} принадлежит диапазону [${ b }, ${ c }]`);
// } else {
//     console.log(`Число `+ a +` не принадлежит диапазону [`+ b +`, `+ c +`]`);
// }

// Task 05
// Ввести 3 числа. Проверить можно ли построить из этих чисел треугольник.
// Если можно, вывести "Да", иначе "Нет".

// let a = +process.argv[2];
// let b = +process.argv[3];                
// let c = +process.argv[4];
// if ((a < b + c) && (b < a + c) && (c < a + b)){
//     console.log(`Можно построить`);
// }
// else {
//     console.log(`Нельзя построить`);    
// }

// Task 06
// В первом подъезде квартиры с 1 по 20. 
// Во втором с 21 по 48. 
// В третьем с 49 по 90. 
// Пользователь вводит номер квартиры. 
// Программа должна указать в каком подъезде находится данная квартира.
// Программа должна учитывать вариант ввода чисел за пределами диапазона 1..90.

// let a = +process.argv[2];
// if ((a >= 1) && (a <= 20)) {
//     console.log(`Первый подъезд`);
// } else if ((a >= 21) && (a <= 48)) {
//     console.log(`Второй подъезд`);
// }
// else if ((a >= 49) && (a <= 90)) {
//     console.log(`Третий подъезд`);
// }
// else {
//     console.log(`Домом ошиблись`);
// }


// Task 07
// Вводяться три целых числа. Найти количество положительных чисел в исходном наборе.
// let a = +process.argv[2];
// let b = +process.argv[3];
// let c = +process.argv[4];
// let d = 0;

// if (a >= 0) {
//     d = d + 1;
// }
// if (b >= 0) {
//     d = d + 1;
// }
// if (c >= 0) {
//     d = d + 1;
// }
// console.log(d);

// Task 08
// Вводяться три целых числа. Найти количество положительных и количество отрицательны
// чисел в исходном наборе.
// let a = +process.argv[2];
// let b = +process.argv[3];
// let c = +process.argv[4];
// let d = 0;
// let e = 0;

// if (a >= 0) {
//     d = d + 1;
// }
// else {
//   e = e + 1;  
// }
// if (b >= 0) {
//     d = d + 1;
// }
// else {
//     e = e + 1;
// }
// if (c >= 0) {
//     d = d + 1;
// }
// else {
//     e = e + 1;
// }
// console.log(d);
// console.log(e);

// Task 09
// Даны три числа. Найти среднее из них (то есть число, расположенное между наименьшим и наибольшим).
// let a = +process.argv[2];
// let b = +process.argv[3];
// let c = +process.argv[4];
// let d ;
// if ((a > b) && (b > c)) {
//     d = b;
// }

// Task 10
// Даны три числа. Найти сумму двух наибольших из них.

// let a = +process.argv[2];
// let b = +process.argv[3];
// let c = +process.argv[4];
// let d = a + b + c;
// let f;
// if (a < b) {
//     f = a;
// }
// else {
//     f = b;      
// }                      
// if (f < c ) {
//     f = f;
// }
// else {
//     f = c;
// }
// console.log(d - f);
