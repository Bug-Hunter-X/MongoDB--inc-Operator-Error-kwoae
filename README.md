# MongoDB $inc Operator Error

This repository demonstrates a common error when using the `$inc` operator in MongoDB update operations. The error occurs when attempting to increment a field by a string value instead of a numeric value.

## Bug
The `bug.js` file contains code that incorrectly uses the `$inc` operator.  It attempts to increment a field by the string value "1" which results in an error.

## Solution
The `bugSolution.js` file demonstrates the correct usage of the `$inc` operator.  The increment value is provided as a number, which correctly updates the field.

## How to reproduce the error
1.  Ensure you have MongoDB running.
2.  Create a MongoDB collection named `myCollection`.
3.  Insert a document with a field that you want to increment into the collection.
4.  Run the code in `bug.js`.
5.  Observe the error message. 

## How to fix the error
1. Replace the incorrect code in `bug.js` with the correct code found in `bugSolution.js`.
2. Re-run the code, this time it should work as expected.