'use strict';
console.log('-- begin --');

// write lots of comments!  explain your thinking at each step

const a = true;
const b = 12;
const c = '12';

const expected = -1;

// the original expression
const step0 = (-a / b) * +c;
console.assert(step0 === expected, 'Step 0');

// how many steps are there?
/*
1- evaluates the parenthesis -1/12 => -0.0833333333333333
2- evaluates 0.08333333333 * 12 => -1
*/


console.log('-- end --');