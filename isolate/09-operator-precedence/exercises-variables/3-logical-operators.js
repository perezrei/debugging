'use strict';
console.log('-- begin --');

// write lots of comments!  explain your thinking at each step

const a = null;
const b = 'null';

const expected = true;

// the original expression
const step0 = !!a || !!b;
console.assert(step0 === expected, 'Step 0');

// how many steps are there?
/*
1- evaluates the left side to null => false
2- evaluates the right side to true
3- or operator gives true (rigth side value) because the left side values is falsy 
*/

console.log('-- end --');