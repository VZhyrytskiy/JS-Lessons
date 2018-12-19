// Задание 1.
// Описать объекты, добавить минимум 5 полей: человек, автомобиль, дом, телефон, 
// компьютер, адрес

// Задание 2.
// Создать два объекта ребенок с полями имя и возраст. Вывести имя того ребенка,
// который старше.

// Задание 3.
// Создать объект товар с полями: название, описание, цена, количество, скидка.
// Вычислить сумму.
// Вычислить сумму со скидкой.

// Задание 4.
// Создать массив из трех объектов товар с разными значениями полей. 
// Объект товар описан выше.
// Создать второй массив и скопироать в него только назания товаров.


// Задание 5.
// Создать массив из трех объектов товар с разными значениями полей. 
// Объект товар описан выше.
// Подсчитать и вывести сумму всех товаров в массиве

// Задание 6.
// Создать массив из трех объектов товар с разными значениями полей. 
// Объект товар описан выше.
// Вывести название товара с минимальной ценой.

// Задание 7.
// Создать массив из трех объектов товар с разными значениями полей. 
// Объект товар описан выше.
// Вывести название товара с максимальной ценой.

// Задание 8.
// Создать массив из трех объектов товар с разными значениями полей. 
// Объект товар описан выше.
// Вывести товары, имена которых начинаются на букву, которую вводит пользователь.

// Задание 9.
// Создать массив из трех объектов товар с разными значениями полей. 
// Объект товар описан выше.
// Удалить из массива товар со скидкой 10.

// Задание 10.
// Создать массив из трех объектов товар с разными значениями полей. 
// Объект товар описан выше.
// Вывести в консоль 100, если в массиве есть товар с количеством 100, иначе вывести 0.



// const a = [1, 2, 3];
// a[0]
// a[1]

// const o = {
//     name: 'Vasya',
//     age: 50
// };
// console.log(o);

// console.log(o.name);
// console.log(o.age);

// o.age++;
// o.children = 2;
// console.log(o);

// const book = {
//     pages:  120,
//     name: `Kiev`
// };
// book.pages = book.pages - 3;
// console.log(book);

// const city = {
//     name: `Kiev`,
//     country: `Ukraine`,
//     people: 2700000
// };
// console.log(`${city.country}, ${city.name}, ${city.people} ` );
// city.name = `Kharkiv`;
// console.log(city);
//-------------------------------------------------------------------------------------------------------------------------------------

// Задание 1.
// Описать объекты, добавить минимум 5 полей: человек, автомобиль, дом, телефон, 
// компьютер, адрес

// const man = {
//     name: `Daniil`,
//     surname:`Bondar`,
//     age: 19,
//     height: 177,
//     weight: 64
// };
// const car = {
//     name:`BMW`,
//     mark:`E3`,
//     hp: 300,
//     weight: 1020,
//     maxspeed: 320
// };
// const phone = {
//     name:`Iphone`,
//     mark:7,
//     camera:`16Mp`,
//     battery:`2700mah`,
//     resolution:`1080 x 1920`
// };
// const house = {
//     floors: 3,
//     rooms: 4,
//     area: 257,
//     streetname:`Verbutskoho 29-V`,
//     balconies: 2
// };
// const computer = {
//     monitor:`Dell`,
//     keyboard:`Razer`,
//     mouse:`Trust`,
//     videocard:`GTX 650 Ti`,
//     processor:`IntelCoreI5`
// }
// const adress = {
//     name:`Verbutskoho`,
//     number: 29,

// }

// Задание 2.
// Создать два объекта ребенок с полями имя и возраст. Вывести имя того ребенка,
// который старше.

// const c1 = {
//     name:`Dima`,
//     age: 17
// };
// const c2 = {
//     name:`Danil`,
//     age: 19
// };
// if (c1.age > c2.age){
// console.log(c1.name);
// }
// else{
// console.log(c2.name);  
// }

// Задание 3.
// Создать объект товар с полями: название, описание, цена, количество, скидка.
// Вычислить сумму.
// Вычислить сумму со скидкой.

// const goods = {
//     name: `Prosokvashuno`,
//     description:`Milk`,
//     price: 16,
//     number: 236,
//     discount: 15
// };
// const sum = goods.price * goods.number; // without discount
// console.log(sum);
// const sumwithdiscount = goods.price - goods.price/100 * goods.discount;
// console.log(sumwithdiscount);

// Задание 4.
// Создать массив из трех объектов товар с разными значениями полей. 
// Объект товар описан выше.
// Создать второй массив и скопироать в него только назания товаров.

// const goods1 = {
//     name: `Prosokvashuno`,
//     description:`Milk`,
//     price: 16,
//     number: 236,
//     discount: 15
// };
// const goods2 = {
//     name:`Nutella`,
//     description:`chocolate`,
//     price: 75,
//     number: 23,
//     discount: 0
// };
// const goods3 = {
//     name: `Molochnuye sosiski`,
//     description:`sausage`,
//     price: 36,
//     number: 120,
//     discount: 0
// };

// const a = [goods1, goods2, goods3];
// console.log(a);
// const b = [];
// let i = 0;
// while (i < a.length){
//     //const o = a[i];
//     b.push(a[i].name);
//     i++;
// }
// console.log(b);
//---------------------------------------------------------------------------------------------
// Задание 5.
// Создать массив из трех объектов товар с разными значениями полей. 
// Объект товар описан выше.
// Подсчитать и вывести сумму всех товаров в массиве

// const goods1 = {
//     name: `Prosokvashuno`,
//     description:`Milk`,
//     price: 16,
//     number: 236,
//     discount: 15
// };
// const goods2 = {
//     name:`Nutella`,
//     description:`chocolate`,
//     price: 75,
//     number: 23,
//     discount: 0
// };
// const goods3 = {
//     name: `Molochnuye sosiski`,
//     description:`sausage`,
//     price: 36,
//     number: 120,
//     discount: 0
// };

// // const sum = goods1.price * goods1.number + goods2.price * goods3.number + goods3.price * goods3.number;

// const goods = [goods1, goods2, goods3];
// let sum = 0;
// let i = 0;
// while (i< goods.length){
//     const product = goods[i];
//     sum = sum + product.price * product.number;
//     i++;
// }
// console.log(sum);

// Задание 6.
// Создать массив из трех объектов товар с разными значениями полей. 
// Объект товар описан выше.
// Вывести название товара с минимальной ценой.

// const goods1 = {
//     name: `Prosokvashuno`,
//     description:`Milk`,
//     price: 16,
//     number: 236,
//     discount: 15
// };
// const goods2 = {
//     name:`Nutella`,
//     description:`chocolate`,
//     price: 75,
//     number: 23,
//     discount: 0
// };
// const goods3 = {
//     name: `Molochnuye sosiski`,
//     description:`sausage`,                                 
//     price: 36,
//     number: 120,
//     discount: 0
// };

// const goods = [goods1, goods2, goods3];
// let i = 0;
// let min = 100;
// while (i < goods.length) {
// if (+goods[i].price < min) {
//     min = +goods[i].price;  
// }
// i++;
// }
// console.log(min);

// Задание 7.
// Создать массив из трех объектов товар с разными значениями полей. 
// Объект товар описан выше.
// Вывести название товара с максимальной ценой.

// const goods1 = {
//     name: `Prosokvashuno`,
//     description:`Milk`,
//     price: 16,
//     number: 236,
//     discount: 15
// };
// const goods2 = {
//     name:`Nutella`,
//     description:`chocolate`,
//     price: 75,
//     number: 23,
//     discount: 0
// };
// const goods3 = {
//     name: `Molochnuye sosiski`,
//     description:`sausage`,                                 
//     price: 36,
//     number: 120,
//     discount: 0
// };
// const goods = [goods1, goods2, goods3];
// let i = 0;
// let max = 0;
// while (i < goods.length) {
//     if (+goods[i].price > max) {
//         max = +goods[i].price;
//     }
//     i++;

// }
// console.log(max);

// Задание 8.
// Создать массив из трех объектов товар с разными значениями полей. 
// Объект товар описан выше.
// Вывести товары, имена которых начинаются на букву, которую вводит пользователь.

// const a = [goods1.name, goods2.name, goods3.name];
// const b = [];
// let i = 0;
// while (i < a.length){
//     const word = a[i];
//     const n = process.argv[2];
//     if (word.startsWith(n)) {
//         b.push(word);
//     }
//     else{
//     i++;
//     }
// }
// console.log(b);
// console.log(a);

// Задание 9.
// Создать массив из трех объектов товар с разными значениями полей. 
// Объект товар описан выше.
// Удалить из массива товар со скидкой 10.

// const goods1 = {
//     name: `Prosokvashuno`,
//     description:`Milk`,
//     price:16,
//     number:236,
//     discount:25
// };
// const goods2 = {
//     name:`Nutella`,
//     description:`chocolate`,
//     price:75,
//     number:23,
//     discount:10
// };
// const goods3 = {
//     name: `Molochnuye sosiski`,
//     description:`sausage`,                                 
//     price:36,
//     number:120,
//     discount:10
// };

// const a = [goods1, goods2, goods3];;
// let i = 0;
// while (i < a.length){
//     if (a[i].discount === 10){
//         a.splice(i, 1);
//     }

//     else{
//     i++;
//     }
    
// }
// console.log(a);

// Задание 10.
// Создать массив из трех объектов товар с разными значениями полей. 
// Объект товар описан выше.
// Вывести в консоль 100, если в массиве есть товар с количеством 100, иначе вывести 0.

// const goods1 = {
//     name: `Prosokvashuno`,
//     description:`Milk`,
//     price:16,
//     number:236,
//     discount:25
// };
// const goods2 = {
//     name:`Nutella`,
//     description:`chocolate`,
//     price:75,
//     number:23,
//     discount:10
// };
// const goods3 = {
//     name: `Molochnuye sosiski`,
//     description:`sausage`,                                 
//     price:36,
//     number:100,
//     discount:10
// };

// const a = [goods1, goods2, goods3];;
// let i = 0;
// while (i < a.length){
//     if (a[i].number ===100) {
//         console.log(a[i]);
//     }
//     else{
//         console.log(0);
//     }

//     i++;
//     }

