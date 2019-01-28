const a = [1, 2, 3, 4, 10, 20, 30, 4, 3];

// const element = a.find(function (el, ind) {
//     return el > 100;
// });

// console.log(element);



// const elementS = a.filter(function (el, ind) {
//     return el > 100;
// });

// console.log(elementS);

// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const b = [];
// let i = 0;
// while ( i < a.length){
//  b.push(a[i]*10);
//     i++;
// }
// console.log(b)
// const c = [];
// a.forEach(function(el, index) {
// c.push(el*10);
// });
// console.log(c);

// const d = a.map(function(el, index) {
// return el*10;
// });
// console.log(d);

const goods = [{name:`asd`, price:12}, {name:`afd`, price:16}, {name:`fgd`, price:92}]
function print(a){
    a.forEach(function(e, i){
        console.log(`Tovar: ${e.name}`);
        console.log(`Cena: ${e.price}`);
        console.log(``);
    
    });
}
const goods10 = goods.map(function(el, index){
    return {
        name: el.name,
        oldPrice: el.price,
        price: el.price * 1.1
    };
})


// print(goods)
// print(goods10)

// const goods10New = goods10.filter(function(el, i){
//   if (el.name === `afd`){
//       return false;
//   } 
//   else{
//       return true;
//   } 
// })
// print(goods10New)

const names = [`asd`, `fgd`];
const goods20 = goods10.filter(function(el, i){
    if (names.includes(el.name)){
        return false;
    }
    else{
        return true;
    }
});
print(goods20)
goods.push({name:`fdf`, price: 34});
print(goods)


