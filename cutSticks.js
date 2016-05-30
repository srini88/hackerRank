var arr = [35,2,65,7,8,9,12,121, 121,33,99];

// something like (but it doesn't have to be)
//arr.min(); // return 0
//arr.max(); // return 100

// With ECMAScript 6 you can use the new spread operator (three dots: ...) with Math.max() like this: Math.max(...[2, 5, 16, 1])

// How about augmenting the built-in Array object to use Math.max/Math.min instead:

Array.prototype.max = function() {
  return Math.max.apply(null, this);
};

Array.prototype.min = function() {
  return Math.min.apply(null, this);
};
//even with duplicates it is printing the max...works...
//remember dont pass anything to max methd...it should be called on an array itself...
console.log(arr.max());
console.log(arr.min())


// Augmenting the built-ins can cause collisions with other libraries (some see), so you may be more comfortable with just apply'ing Math.xxx() to your array directly:

// The Math.max() function returns the largest of zero or more numbers.

// SyntaxEDIT
// Math.max([value1[, value2[, ...]]])
// Parameters

// value1, value2, ...
// Numbers.
// DescriptionEDIT
// Because max() is a static method of Math, you always use it as Math.max(), rather than as a method of a Math object you created (Math is not a constructor).

// If no arguments are given, the result is -Infinity.

// If at least one of arguments cannot be converted to a number, the result is NaN.

// ExamplesEDIT
// Using Math.max()

// Math.max(10, 20);   //  20
// Math.max(-10, -20); // -10
// Math.max(-10, 20);  //  20
// The following function uses Function.prototype.apply() to find the maximum element in a numeric array. getMaxOfArray([1, 2, 3]) is equivalent to Math.max(1, 2, 3), but you can use getMaxOfArray() on programmatically constructed arrays of any size.

// function getMaxOfArray(numArray) {
//   return Math.max.apply(null, numArray);
// }


// var min = Math.min.apply(null, arr),
//     max = Math.max.apply(null, arr);

var maxi = function(arr){
	return Math.max.apply(this,arr);
}

var mini = function(arr){
	return Math.min.apply(this,arr);
}

console.log(maxi(arr));
console.log(mini(arr));













