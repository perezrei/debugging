'use strict';
console.log('-- begin --');

// write lots of comments!  explain your thinking at each step

const expected = false;

// the original expression
const step0 = 12 % '3' || !!NaN;
console.assert(step0 === expected, 'Step 0');

// how may steps are there?
/*
1- evaluates the left side 12 % 3 === 0 (falsy)
2- evaluates the right side !!NaN === falsy
3- or operator evaluates to the right side because the left side is falsy
*/

console.log('-- end --');