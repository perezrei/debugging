'use strict';
console.log('-- begin --');

// write lots of comments!  explain your thinking at each step

const a = '';

const expected = false;

// the original expression
const step0 = typeof a == 'number' + +a;
console.assert(step0 === expected, 'Step 0');

// left side evaluates to 'string'
const step1 = 'string' == 'number' + +a;
console.assert(step1 === expected, 'Step 0');

// right side evaluates to 'number0'
const step2 = 'string' == 'number0';
console.assert(step2 === expected, 'Step 0');

// == evaluates to false
const step3 = false;
console.assert(step3 === expected, 'Step 0');

// how many steps are there?
// there is 3 steps

console.log('-- end --');