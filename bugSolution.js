function foo(a, b) {
  // Type checking before performing addition
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    console.error('Both arguments must be numbers.');
    return NaN; // Or throw an error: throw new Error('Both arguments must be numbers.');
  }
}

console.log(foo(1, 1)); // Output: 2
console.log(foo(1, '1')); // Output: Both arguments must be numbers. NaN