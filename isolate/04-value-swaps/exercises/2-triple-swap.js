'use strict';
console.log('-- begin --');

let a = 'z';
let b = 'x';
let c = 'y';
let temp;

// write some code, be sure to use temp!
temp = a;
a = b;
b = c;
c = temp;
// fill in the _ to pass the assertions

const isTrue1 = a === 'x';
console.assert(isTrue1, 'Test 1');

const isTrue2 = b === 'y';
console.assert(isTrue2, 'Test 2');

const isTrue3 = c === 'z';
console.assert(isTrue3, 'Test 3');

const isTrue4 = temp === 'z';
console.assert(isTrue4, 'Test 4');


console.log('-- end --');