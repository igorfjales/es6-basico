/**
 * OPERAÇÕES COM ARRAYS
 * 
 *  Métodos: 
 *  - map
 *  - reduce
 *  - filter
 *  - find
 * 
 */

const array1 = [1, 3, 4, 5, 8, 9];

const array2 = array1.map(function (item, index) {
    return item * 2;
});

console.log('map: ', array2);


const sum = array1.reduce(function (total, next) {
    return total + next;
});

console.log('reduce: ', sum);

const filter = array1.filter(function (item) {
    return item % 2 === 0;
});

console.log('filter: ', filter);

const find = array1.find(function (item) {
    return item === 4;
});

console.log('find: ', find);