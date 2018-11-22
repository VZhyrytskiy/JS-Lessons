/**
 * Тема: 
 *  1. Конструкция if
 *  2. Ввод данных
 */

// //let w = 11;
// let f = w % 2;
// console.log(f);

// let w = 10;
// let f = w / 0;
// console.log(f);

// let a = 2;
// let x = 1 +(a*=2);
// console.log(x);

// let w = 12;
// if (w < 100) {
//     console.log(w);
// }

// let w = 12;
// if (w < 100) {
//     console.log('if');
//     console.log(w);
// } else {
//     console.log('else');
//     console.log(w);
// }

// let a = 8;
// let a = process.argv[2];
// console.log(a);
// if (a == 11) {
//     console.log(1);


// }
// else if (a == 10){
//     console.log(2);
// }
// else if (a == 9){
//     console.log(3);
// }
// else {
//     console.log(4);
// }
// let data = process.argv[2];
// console.log(data);

let f = process.argv[2];
let d = process.argv[3];
console.log(f, d);
if (f > d) {
    console.log(`+`);
} else {
    console.log(`-`);
}
