'use strict';
console.log('-- begin --');

// write lots of comments!  explain your thinking at each step

const expected = NaN;

// the original expression
const step0 = -(null + '10') * 15;
console.assert(Object.is(step0, expected), 'Step 0');

/*
operation null + '10'
*/
const step1 = 'null10' * 15;
console.assert(Object.is(step1, expected), 'Step 1');

/*
evaluates 'null10'
*/
const step2 = NaN * 15;
console.assert(Object.is(step2, expected), 'Step 2');

/*
evaluates NaN * 15
*/
const step3 = NaN;
console.assert(Object.is(step3, expected), 'Step 3');


console.log('-- end --');