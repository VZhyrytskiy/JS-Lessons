// Задача 1
// Создать массив слов. Найти первый индекс слова в массиве, которое вводит пользователь.
// Записать этот индекс во второй массив. Вывести второй массив в консоль.

// Задача 2
// Создать массив слов. Найти последний индекс слова в массиве, которое вводит пользователь.
// Записать этот индекс во второй массив. Вывести второй массив в консоль.

// Задача 3
// Создать массив слов. Найти первый и последний индекс слова в массиве, которое вводит пользователь.
// Записать эти индексы во второй массив. Если эти индексы совпадают, вывести нет дублей, 
// иначе вывести есть дубли

// Задание 4
// Создать массив слов. Пользователь вводит слово. Найти индекс второго вхождения слова в массив.
// Например, a = ['zzz', 'xxx', 'zzz', 'zzz'], s = 'zzz', результат 2

// Задание 5
// Создать массив слов. Пользователь вводит слово. Найти индекс к-того вхождения слова в массив.

// Задание 6
// Создать массив слов. Пользователь вводит два числа. Скопировать во второй массив часть массива
// начиная с индекса = первое число и заканчивая инексом = второе число.

// Задание 7
// Создать массив слов с дублями. Пользователь вводит слово. Скопировать во товрой массив
// часть массива, которая начинается с индекса - первое вхождение слова и по индекс - последнее 
// вхождение слова.

// Задание 8
// Создать массив с дублями. На его основе создать второй массив без дублей.

// Задание 9
// Создать массив с числами и словами. Скопироать во второй массив часть массива начиная с первого числа
// и заканчивая последним числом.

// Задание 10
// Создать массив из 10 слов. Создать массив из 5 чисел от 0 до 9. Создать третий пустой массив.
// Из первого массива скопировать в третий массив все слова, начиная с каждого индекса, 
// который находится во втором массиве.
// Например
// a = ['a', 'b', 'c', 'd'], b = [3, 2, 2, 1, 0];
// c = ['d', 'c', 'd', 'c', 'd', 'b', 'c', 'd', 'a', 'b', 'c', 'd']



// Задача 1
// Создать массив слов. Найти первый индекс слова в массиве, которое вводит пользователь.
// Записать этот индекс во второй массив. Вывести второй массив в консоль.

// const a = [`name`, `surname`, `age`];
// const b = [];
// let n = process.argv[2];
// b.push(a.indexOf(n));
// console.log(b);

// Задача 2
// Создать массив слов. Найти последний индекс слова в массиве, которое вводит пользователь.
// Записать этот индекс во второй массив. Вывести второй массив в консоль.


// const a = [`name`, `surname`, `surname`, `age`];
// const b = [];
// let n = process.argv[2];
// b.push(a.lastIndexOf(n));
// console.log(b);

// Задача 3
// Создать массив слов. Найти первый и последний индекс слова в массиве, которое вводит пользователь.
// Записать эти индексы во второй массив. Если эти индексы совпадают, вывести нет дублей, 
// иначе вывести есть дубли

// const a = [`name`, `surname`, `surname`, `age`];
// const b = [];
// let n = process.argv[2];
// b.push(a.indexOf(n));
// b.push(a.lastIndexOf(n));
// if (b[0] === b[1]){
//     console.log(`Дублей нету`);
// }
// else{
//     console.log(`Дубли есть`)
// }
// console.log(b);

// Задание 4
// Создать массив слов. Пользователь вводит слово. Найти индекс второго вхождения слова в массив.
// Например, a = ['zzz', 'xxx', 'zzz', 'zzz'], s = 'zzz', результат 2

// const a = ['zzz','xxx', `fff`, `xxx`, 'zzz', 'zzz', 'a', 'zzz'];
// let b = process.argv[2];
// let k = +process.argv[3];
// let i = 1;
// let position2;
// position2 = a.indexOf(b);    
// while (i < k) {
//     position2 = a.indexOf(b, position2+1);      
//     i++;
// }  
// console.log(position2);   
// 1
// position2 = a.indexOf(b, position2+1);          // 2
// position2 = a.indexOf(b, position2+1);          // 3
// position2 = a.indexOf(b, position2+1);          // 4
//                                                 // k
// while (i < a.length){
//     if ((a[i] === b)){
//     position2 = a.indexOf(b);
//     } 
//     i++;
// } 

// b    position2
// zzz     0
// zzz     4
// zzz     5
// zzz     7 


// Задание 5
// Создать массив слов. Пользователь вводит слово. Найти индекс к-того вхождения слова в массив.


// Задание 6
// Создать массив слов. Пользователь вводит два числа. Скопировать во второй массив часть массива
// начиная с индекса = первое число и заканчивая инексом = второе число.

// const a = ['zzz','xxx', `fff`, `xxx`, 'zzz', 'zzz'];
// let n1 = +process.argv[2];
// let n2 = +process.argv[3];
// // const b = [];
// const b = a.slice(n1, n2+1);
// // b.push(n1);
// // b.push(end);
// // b.push(n2);
// console.log(b);

// Задание 7
// Создать массив слов с дублями. Пользователь вводит слово. Скопировать во товрой массив
// часть массива, которая начинается с индекса - первое вхождение слова и по индекс - последнее 
// вхождение слова.

// const a = ['zzz','xxx', `fff`, `xxx`, 'zzz', 'zzz'];
// let word = process.argv[2];
// const b = a.slice(a.indexOf(word), a.lastIndexOf(word)+1);
// console.log(b);

// Задание 8
// Создать массив с дублями. На его основе создать второй массив без дублей.

// const a = ['zzz','xxx', `fff`, `xxx`, 'zzz', 'zzz'];
// const b = [];
// let i = 0;
// while (i < a.length){
//     if (!b.includes(a[i])){
//    b.push(a[i]);
//     }
//    i++;   
// }
// console.log(b);

// Задание 9
// Создать массив с числами и словами. Скопироать во второй массив часть массива начиная с первого числа
// и заканчивая последним числом.

// const a = ['zzz', 1, 'xxx', 3, `fff`, 6, `xxx`, 'zzz', 10, 'zzz'];
// const b = [];
// let i = 1;
// while (i<=8){
//     b.push(a[i]);                              
//     i++;
// }
// console.log(b);

// Задание 10
// Создать массив из 10 слов. Создать массив из 5 чисел от 0 до 9. Создать третий пустой массив.
// Из первого массива скопировать в третий массив все слова, начиная с каждого индекса, 
// который находится во втором массиве.
// Например
// a = ['a', 'b', 'c', 'd'], b = [3, 2, 2, 1, 0];
// c = ['d', 'c', 'd', 'c', 'd', 'b', 'c', 'd', 'a', 'b', 'c', 'd']

const a = ['zzz', 'xxx', `fff`, `xxx`, 'zzz', 'zzz', `jjj`, `ooo`, `ppp`, `lll`];
const b = [8, 6, 2, 4, 7];
const c = [];
let i = 0;
let e = 0;
while (i < b.length) {
    const index = b[i];
    const aa = a.slice(index);
   
    e = 0;
    while (e < aa.length){
        c.push(aa[e]);
        e++;
    }
    i++;
}
console.log(c);
