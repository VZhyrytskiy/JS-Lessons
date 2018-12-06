/**
 * Методы массивов
 * 1. indexOf(value, fromIndex) - ищет индекс первого элемента в массиве, который совпадает
 * с параметром value. Поиск начинает с индекса заданого вторым параметром. Если он не задан, 
 * то с начала массива.
 * Например,
 * const array = [2, 9, 9];
 * array.indexOf(2);     // 0
 * array.indexOf(7);     // -1
 * array.indexOf(9, 2);  // 2
 * array.indexOf(2, -1); // -1
 * array.indexOf(2, -3); // 0
 * 
 * 2. lastIndexOf(value, fromIndex) - ищет индекс последнего вхождения элемента в массиве, 
 * который совпадает с параметром value. Поиск начинает с конца массива с индекса заданого 
 * вторым параметром. Если он не задан, то с конца массива.
 * Например,
 * const numbers = [2, 5, 9, 2];
 * numbers.lastIndexOf(2);     // 3
 * numbers.lastIndexOf(7);     // -1
 * numbers.lastIndexOf(2, 3);  // 3
 * numbers.lastIndexOf(2, 2);  // 0
 * numbers.lastIndexOf(2, -2); // 0
 * numbers.lastIndexOf(2, -1); // 3
 * 
 * 3. slice(startIndex, endIndex) - возвращает копию масссива начиная с индекса startIndex 
 * и до индекса endIndex, если он задан или до конца массива, если он не задан.
 * Например,
 * const fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
 * const citrus = fruits.slice(1, 3);
 *
 * // fruits contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
 * // citrus contains ['Orange','Lemon']
 */
