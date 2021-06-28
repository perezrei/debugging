'use strict';

// fill in the blank to pass the assertion

const interactionValue = confirm('es usted mayor de edad?');

console.log('interactionValue:', typeof interactionValue, interactionValue);

console.assert(typeof interactionValue === 'boolean', 'interactionValue should be boolean');

