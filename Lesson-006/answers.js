// Задание 10, 13, 14, 16 из предыдущей темы.

// Задание 1.
// Пользователь вводит две строки. Найти и вывести индекс второй строки в первой.

// let st1 = process.argv[2];
// let st2 = process.argv[3];
// console.log(st1.indexOf(st2));   //Task 01 lesson-006

// Задание 2.
// Пользователь вводит две строки. Найти и вывести индекс второго вхождения второй строки в первую.
// Например, s1 = 'abcabc', s2 = 'ab', result = 3

// let st1 = process.argv[2];
// let st2 = process.argv[3];      //Task 02 lesson-006
// // Например, s1 = 'abcabc', s2 = 'ab', result = 3
// let s = st1.replace(st2, '**');
// let position2 = s.indexOf(st2);
// console.log(position2);

// s1 = 'abcabc', s2 = 'ab'
// indexOf() -> 0, s2.length = 2
// s1 = 'abcbc' => '**cab' // замена
// '**cab'.indexOf('ab') => 3

// Задание 3.
// Пользователь вводит строку. Если строка больше 7 символов, то обрезать ее до 7 символов 
// и добавить в конец строки '...' так чтобы итоговая строка была 10 символов.
// Если строка меньше или равна 7 символам, то добавить столько симвлов '.', чтобы строка была 10
// символов
// Например, s1 = 'abcabcabcabc' => 'abcabca...', s2 = 'abc' => 'abc.......'

// let st1 = process.argv[2];
// let n = st1.length;
// if (n > 7) {
//     st1 = st1.slice(0, 7);
//     st1 = st1 + `...`;
// }
// else if (n <= 7){
//     st1 = st1.padEnd(10, `.`);
// }
// console.log(st1);

// Задание 4. 
// Пользователь вводит строку. Заменить все гласные буквы (a, e, i, o, u) на символ *.

// 'abc' => 'abcabcabcabc'
// let st1 = process.argv[2];
// let s = st1.repeat(3);
// console.log(s);


// let st1 = process.argv[2];
// let string = `aeiou`;
// // алгоритм
// // abc - 1
// // abcabc - 2
// // aaa - 3
// // while (st1.indexOf(string[0]) > -1) {
// //     st1 = st1.replace(string[0], '*');
// // }
// // while (st1.indexOf(string[1]) > -1) {
// //     st1 = st1.replace(string[1], '*');
// // }
// // while (st1.indexOf(string[2]) > -1) {
// //     st1 = st1.replace(string[2], '*');
// // }
// // while (st1.indexOf(string[3]) > -1) {
// //     st1 = st1.replace(string[3], '*');
// // }
// // while (st1.indexOf(string[4]) > -1) {
// //     st1 = st1.replace(string[4], '*');
// // }
// // вывод
// let i = 0;
// while (i < string.length){
//     while (st1.indexOf(string[i]) > -1) {
//         st1 = st1.replace(string[i], '*');
//     }
//     i = i + 1;
// }
// console.log(st1);


// Задание 5. (-)
// Пользователь вводит две строки. Найти количество вхождений второй строки в первую.
// let st1 = process.argv[2];
// let st2 = process.argv[3];
// let i = 0;
// let sum = 0;
// while (i < st2.length){
//     while (st1.indexOf(st2[i]) > -1)
//     sum = sum + i;           
//     i = i + 1;
// }
// console.log(sum);


// Задание 6.(+)
// Пользователь вводит строку. Создать две строки. Первую строку из четных символов, 
// вторую из нечетных символов и вывести их в консоль.

// let s = process.argv[2];
// let i = 0;
// let s1 = ``;
// let s2 = ``;
// while (i < s.length) {
//     if (i % 2 === 1) {

//         s1 = s1 + s[i];
//     }
//     else {
//         s2 = s2 + s[i];
//     }
//     i++;

// }
// console.log(s1);
// console.log(s2);

// let s = process.argv[2];
// let i = 0;
// let s1 = ``;
// while (i < s.length) {
//    if (s[i]===`a`){
//        s1 = s1 + `a`;
//    }
//     i++;

// }
// console.log(s1)

// let s = process.argv[2];
// let i = 0;
// let sum = 0;
// while (i < s.length) {
//    if (s[i]===`a`){
//        sum++;
//    }
//     i++;

// }
// console.log(sum)
// let s = process.argv[2];
// let i = 0;
// let s1 = ``;
// while (i < s.length) {
//     if (i>=2){
//         s1 = s1 + s[i];
//     }
   
//     i++;

// }
// console.log(s1);

// let s = process.argv[2];
// let i = 0;
// let sum = 0;
// while (i < s.length) {
//    if ((s[i]===`a`) || (s[i]===`s`)) {
//        sum++;
//    }
//     i++;

// }
// console.log(sum)

// let s = process.argv[2];
// let i = s.length - 1;
// let s1 = ``;
// while (i >= 0) {
// s1 = s1 + s[i];
//     i--;

// }
// console.log(s1)

// let s = process.argv[2];
// let i = 0;
// let s1 = ``;
// while (i < s.length) {
    
//        s1 = s[i] + s1;
   
//     i++;

// }
// console.log(s1)

let s = process.argv[2];
let i = 0;
let s1 = ``;
let s2 = ``;
let s3 = ``;
while (i < s.length) {
    
if (i % 3 === 0){
    s1 = s1 + s[i];
}
else if (i % 3 === 1){
    s2 = s2 + s[i];
}
else if (i % 3 === 2){
    s3 = s3 + s[i];
}
   
   
    i++;

}
console.log(s1);
console.log(s2);
console.log(s3);
// Задание 7. (+)
// Пользователь вводит строку, в которой повторяются подряд символы. Создать новую строку,
// где символы не повторяются.
// Например, s = 'aabcffjghhhf' => 'abcfjghf'

// let string = process.argv[2];
// let unique ='';
// let i = 0
// while ((i<string.length) && (unique.indexOf(string[i])==-1)){
//     unique += string[i];
//    i = i + 1;   
// }
// console.log(string);

// Задание 8. (-)
// Пользователь вводит строку и символ. Подсчитать количество таких символов в введенной строке.

// let st1 = process.argv[2];
// let st2 = process.argv[3];

// let i = 0;
// while (i < string.length){
//     while (st1.indexOf(string[i]) > -1) {
//         st1 = st1.replace(string[i], '*');
//     }
//     i = i + 1;
// }
// console.log(st1);

// Задание 9. 
// Пользователь вводит строку. Вывести перевернутую строку.
// Например s = 'abc' => 'cba'

// Задание 10. (-)
// Пользователь вводит строку в которой есть символ *. Заменить символ * на ---.

// let st1 = process.argv[2];
// let string = `*`;

// let i = 0;
// while (i < string.length){
//     while (st1.indexOf(string[i]) > -1) {
//         st1 = st1.replace(string[i], '---');
//     }
//     i = i + 1;
// }
// console.log(st1);

// Задание 11. (-)
// Пользователь вводит строку в которой есть символ *. Удалить этот символ из строки.

// let st1 = process.argv[2];
// let string = `*`;

// let i = 0;
// while (i < string.length){
//     while (st1.indexOf(string[i]) > -1) {
//         st1 = st1.replace(string[i], '');
//     }
//     i = i + 1;
// }
// console.log(st1);
