'use strict';
console.log('-- begin --');

// write lots of comments!  explain your thinking at each step

const a = 'asdf';
const b = '14';

const expected = false;

// the original expression
const step0 = Boolean(a) !== Boolean(b);
console.assert(step0 === expected, 'Step 0');

/*

*/
const step1 = true !== Boolean(b);
console.assert(step1 === expected, 'Step 1');

/*

*/
const step2 = true !== true;
console.assert(step2 === expected, 'Step 2');

/*

*/
const step3 = false;
console.assert(step3 === expected, 'Step 3');


console.log('-- end --');