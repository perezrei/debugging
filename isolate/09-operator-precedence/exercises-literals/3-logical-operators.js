'use strict';
console.log('-- begin --');

// write lots of comments!  explain your thinking at each step

const expected = true;

// the original expression
const step0 = !undefined && !'';
console.assert(step0 === expected, 'Step 0');

/*
evaluates the boolean of !undefined
*/
const step1 = true && !'';
console.assert(step1 === expected, 'Step 1');

/*
evaluates the boolean of !''
*/
const step2 = true && true;
console.assert(step2 === expected, 'Step 2');

/*
evaluates true of the right side because the first (left) value is truthy
*/
const step3 = true;
console.assert(step3 === expected, 'Step 3');


console.log('-- end --');