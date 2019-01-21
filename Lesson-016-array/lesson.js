/**
 * Методы массивов filter
 */

const a = [1, 2, 3, 4, 5];
const d1 = a.filter(function (el, i) {
    return el % 2 === 0;
});
const d2 = a.filter(function (el, i) {
    return (el > 1) && (el < 5);
});
console.log(a);
console.log(d1);
console.log(d2);
