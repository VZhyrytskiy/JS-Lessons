// Задача 1
// Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.
// Вывести результат в консоль.

// const a = ['a', 'b', 'c'];
// const b = [1, 2, 3];
// let i = 0;
// while (i < b.length){
//     a.push(b[i]);
//     i++;
// }

// console.log(a);

// Задача 2
// Дан массив ['a', 'b', 'c']. Добавить ему в конец элементы 1, 2, 3.
// Вывести массив в консоль.

// const a = ['a', 'b', 'c'];
// let b = `123`;
// let i = 0;
// while (i < b.length){
// a.push(+b[i]);
//  i++;
// }

// console.log(a);

// Задача 3
// Дан массив [1, 2, 3]. Создать второй массив, 
// где элементы идут в обратном порядке [3, 2, 1].

// const a = [1, 2, 3];
// const b = [];
// let i = 0;
// while (i < a.length){
// b.unshift(a[i]);          
//  i++;
// }
// console.log(b);

// Задача 4
// Дан массив [1, 2, 3]. Добавить ему в начало элементы 4, 5, 6.

// const a = [1, 2, 3];
// a.unshift(6);        
// a.unshift(5);    
// a.unshift(4);    
// console.log(a);

// Задача 5
// Дан массив ['js', 'css', 'jq']. Удалить из массива первый элемент
// и вывести его в консоль.

// const a = ['js', 'css', 'jq'];
// const b = a.shift();      
// console.log(a);
// console.log(b);

// Задача 6
// Дан массив ['js', 'css', 'jq']. Удалить последний элемент 
// и вывести его в консоль.

// const a = ['js', 'css', 'jq'];
// const b = a.pop();         
// console.log(a);
// console.log(b);

// Задача 7
// Дан массив [1, 2, 3, 4, 5]. Скопировать во второй массив первый и два последних элемента
// [1, 4, 5].

// const a = [1, 2, 3, 4, 5, 7, 8];
// const b = [];
// let i = 0;
// while (i < a.length){
//     // if ((i === 0) || (i === a.length - 1) || (i === a.length - 2))  {
//     if ((i <= 0) || (i >= a.length - 2))  {
//         b.push(a[i]);
//     }

//     i++;
// }
// console.log(b);

// Задача 8
// Даны массивы [1, 2, 3, 4, 5], ['a', 'b', 'c'] 
// Создайте третий массив [1, 2, 3, 'a', 'b', 'c', 4, 5].

// const a = [1, 2, 3, 4, 5];
// const b = ['a', 'b', 'c'];
// const c = [];
// let i = 0;
// while (i <= 2){
//     c.push(a[i]);
// i++;
// }
// i = 0;
// while (i < b.length){
//     c.push(b[i]);
//     i++;
// }
// i = 3;
// while (i < a.length){
//     c.push(a[i]);
// i++;
// }

// console.log(c);

// Задание 9
// Объявить два числовых массива по 10 элементов.
// Создать третий массив, который будет состоять из попарной суммы элементов первых двух массивов

// const a = [1, 2, 3, 4, 5];
// const b = [6, 7, 8, 9, 10];
// const c = [];
// let i = 0;
// while (i < a.length){
//     c.push(a[i]+b[i]);
//     i++;
// }
// console.log(c);


// splice(startIndex, deleteCount);
// const a = [1, 2, 3, 4, 5];
// const result = a.splice(1, 2);
// console.log(a);
// console.log(result);

// const a = [1, 2, 3, 4, 5];
// console.log(a.reverse());
// console.log(a.join(''));

// const a = [1, 2, 3, 4, 5];
// const result = a.includes(1, 1);
// console.log(result);

// Задание 10
// Объявить массив слов из 5 слов.
// Создать второй массив, в который записать длину каждого слова.
// Подсчитать и вывести сумму элементов массива.

// const a = ['abc', 'vbnc', 'tytujj', 'cvb'];
// const b = [];
// let i = 0;
// let sum = 0;
// while (i < a.length) {
// b.push(a[i].length);
// sum = sum + b[i];
// i++;
// }
// console.log(a);
// console.log(b);
// console.log(sum);

// Задание 11
// Объявить массив из 10 чисел.
// Создать новый массив, в который записать суммы двух сседних элементов из первого массива.

// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const b = [];
// let i = 0;
// while (i < a.length - 1){
//     b.push(a[i] + a[i+1]);  
//     i++;
// }
// console.log(b);

// Задание 12
// Объявить два массива строк по 5 элементов.
// Создать третий массив в который попеременно добавлять элемент из первого массива, 
// затем из второго и снова из первого и т.д.

// const a = [`a`, `b`, `c`, `d`, `e`];
// const b = [`f`, `g`, `i`, `o`, `p`];
// const c = [];
// let i = 0;
// while (i < a.length){
//     c.push(a[i]);
//     c.push(b[i]);
//     i++;
// }
// console.log(c);

// Задание 13
// Объявить два массива чисел по 5 элементов.
// Создать третий масив, в который добавлять попеременно элемент из первого массива, 
// последний элемент из второго массива, второй элемент из первого массива,
// предпоследний элемент из второго массива и т.д.

// const a = [1, 2, 3, 4, 5];
// const b = [6, 7, 8, 9, 10];
// const c = [];
// let i = 0;
// while (i < a.length){
//     c.push(a[i]);
//     c.push(b[b.length-1-i]);       

//     i++;
// }
// console.log(c);

// Задание 14.
// Объявить массив из 10 чисел. Пользователь вводит число К от 2 до 5.
// Создать второй массив, в который записать сумму каждых К последовательных элементов.
// Например, 
// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const k = 4;
// const b = [1+2+3+4, 2+3+4+5, 3+4+5+6, 4+5+6+7, 5+6+7+8, 6+7+8+9, 7+8+9+10]

// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const k = +process.argv[2];
// const b = [];
// let j;
// let i = 0;
// let sum = 0;
// while (i < a.length - k + 1){
//     j = i;
//     while (j < i + k){
//         sum = sum + a[j];
//         j++;
//     }
//     b.push(sum);
//     sum = 0;
//     i++;
// }
// console.log(b);

