/**
 * Методи масивів
 * https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 * 
 * .filter(), .forEach()
 * Посмотреть метод find, findIndex
 */

// const a = [`asd`, `adkjadhk`, `as`];
// const b = a.filter(function(el, i){return el.length === 3;});
// const c = a.filter(function(el, i){return el.endsWith(`s`);});
// const d = a.filter(function(el, i){return i > 0;});
// const f = a.filter(function(el, i){return (i>0 && i < a.length-1);});
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(f);

// const a = [{name:`Anna`, age: 10}, {name:`Danil`, age: 19}, {name:`Alex`, age: 9} ]
// const b = a.filter(function(el, i){return el.age < 12;});
// const c = a.filter(function(el, i){return el.name.startsWith(`A`)});
// const d = a.filter(function(el, i){return i === a.length-1});
// console.log(b);
// console.log(c);
// console.log(d);

// const a = [1, 2, 2, 3];
// let d = 1;
// // a.forEach(function(el,i){return d=d*el;});
// a.forEach(function(el,i){
//     if (el ===2){
//     return d=d*el;
//     }
// });
// console.log(d);

// const a = [`asd`, `adkjadhk`, `as`];
// let d = 0;
// // a.forEach(function(el,i){return d=d+el.length;});
// a.forEach(function(el,i){
//     let c = el.split(``);
//     c.forEach(function(e,index){
//         if (e === `a`){
//         return d++;
//         }
//     });
//     console.log(c)
//     //return d=d+el;
// });
// console.log(d);

const a = [{
    name: `Anna`,
    age: 10
}, {
    name: `Danil`,
    age: 19
}, {
    name: `Alex`,
    age: 9
}];
let b = ``;
a.forEach(function (el, i) {
    return b = b + el.name + `_`;
});
b = b.slice(0, b.length - 1);
console.log(b);
