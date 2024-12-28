# Unexpected Type Coercion in JavaScript

This repository demonstrates a common JavaScript bug caused by loose typing and type coercion.  The function `foo` is intended to add two numbers, but due to JavaScript's flexible type system, it performs string concatenation when one of the arguments is a string.

The `bug.js` file contains the buggy code, while `bugSolution.js` provides a corrected version that handles type checking and ensures correct numerical addition.

This example highlights the importance of careful type handling in JavaScript to avoid unexpected behavior and ensure reliable program execution.