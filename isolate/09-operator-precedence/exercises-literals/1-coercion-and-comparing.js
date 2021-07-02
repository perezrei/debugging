'use strict';
console.log('-- begin --');

// write lots of comments!  explain your thinking at each step

const expected = true;

// the original expression
const step0 = typeof NaN === typeof Infinity;
console.assert(step0 === expected, 'Step 0');

/*
evaluate the left side of the comparison
evaluate the typeof NaN
*/
const step1 = 'number' === typeof Infinity;
console.assert(step1 === expected, 'Step 1');

/*
evaluate the right side of the comparison
evaluate the typeof Infinity
*/
const step2 = 'number' === 'number';
console.assert(step2 === expected, 'Step 2');

/*
evaluate the comparison
*/
const step3 = true;
console.assert(step3 === expected, 'Step 3');


console.log('-- end --');