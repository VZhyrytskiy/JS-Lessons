// Задача 1
// Дан массив элементов [1, 2, 3, 4, 5]
// Проверить, содержит ли массив элемент, который вводит пользователь.
// Если содержит, то вывести "Да", иначе "Нет"

// const a = [1, 2, 3, 4, 5];
// let n = +process.argv[2];
// const result = a.includes(n);
// console.log(result);

// Задача 2
// Создать два любых массива. 
//Проверить содержит ли второй массив хотя бы один элемент из первого массива.

// const a = [1, 2, 3, 4, 5];
// const b = [2, 3, 6, 5, 1];
// let result = false;
// let i = 0;
// while ((i < a.length) && (!result)) {
//     result = b.includes(a[i]); 
//     console.log(result);
// i++;
// }
  

// Задача 3
// Создать два любых массива.
//Проверить содержит ли второй массив все элементы из первого массива.


// const a = [1, 2, 3, 4, 5];
// const b = [2, 3, 4, 5, 1];
// let result = false;
// let i = 0;
// let sum = 0;
// while (i < a.length) {
//     result = b.includes(a[i]); 
//     if (result){
//      sum++;
//     }
// i++;
// }
// if (sum === a.length){
//     console.log(`Yes`);
// }
// else{
//     console.log(`No`);
// }

// Задача 4
// Создать массив. Изменить порядок элементов в массиве на обратный и вывести массив.

// const a = [1, 2, 3, 4, 5];
// const result = a.reverse();
// console.log(result);

// Задача 5
// Создать массив из четного количества элементов. Поменять местами элементы в каждой паре элементов.
// Например, [1, 2, 3, 4, 5, 6] => [2, 1, 4, 3, 6, 5]

// const a = [1, 2, 3, 4, 5, 6];
// let i = 0;
// let t;
// while (i < a.length - 1){          
// t = a[i+1];
// a[i+1] = a[i];
// a[i] = t;
// i = i + 2;
// }
// console.log(a);

// Задача 6
// Создать массив. Удадить из него элемент, который вводит пользователь.

// const a = [1, 2, 3, 4, 5];
// let n = +process.argv[2];
// let i = 0;
// while (i < a.length){
//     if (a[i] === n){
//     a.splice(i, 1);
//     }
//     i++;
// }
// console.log(a);
