// Given an array of integers, calculate which fraction of its elements are positive, which fraction of its elements are negative, and which fraction of its elements are zeroes, respectively. Print the decimal value of each fraction on a new line.

// Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.

// Input Format

// The first line contains an integer, , denoting the size of the array. 
// The second line contains  space-separated integers describing an array of numbers .

// Output Format

// You must print the following  lines:

// A decimal representing of the fraction of positive numbers in the array.
// A decimal representing of the fraction of negative numbers in the array.
// A decimal representing of the fraction of zeroes in the array.
// Sample Input

// 6
// -4 3 -9 0 4 1         
// Sample Output

// 0.500000
// 0.333333
// 0.166667
// Explanation

// There are  positive numbers,  negative numbers, and  zero in the array. 
// The respective fractions of positive numbers, negative numbers and zeroes are ,  and , respectively.

// The toFixed() method formats a number using fixed-point notation.

// Syntax
// numObj.toFixed([digits])

// Parameters

// digits
// Optional. The number of digits to appear after the decimal point; this may be a value between 0 and 20, inclusive, and implementations may optionally support a larger range of values. If this argument is omitted, it is treated as 0.
// Returns

// A string representation of numObj that does not use exponential notation and has exactly digits digits after the decimal place. The number is rounded if necessary, and the fractional part is padded with zeros if necessary so that it has the specified length. If numObj is greater than 1e+21, this method simply calls Number.prototype.toString() and returns a string in exponential notation.

// var numObj = 12345.6789;

numObj.toFixed();       // Returns '12346': note rounding, no fractional part
numObj.toFixed(1);      // Returns '12345.7': note rounding
numObj.toFixed(6);      // Returns '12345.678900': note added zeros
(1.23e+20).toFixed(2);  // Returns '123000000000000000000.00'
(1.23e-10).toFixed(2);  // Returns '0.00'
2.34.toFixed(1);        // Returns '2.3'
2.35.toFixed(1);        // Returns '2.4'. Note that it rounds up in this case.
-2.34.toFixed(1);       // Returns -2.3 (due to operator precedence, negative number literals don't return a string...)
(-2.34).toFixed(1);     // Returns '-2.3' (...unless you use parentheses)

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);  //you got all numbers..
    
    var posC = 0;
    var negC = 0;
    var zeroC =0;
    for (var i=0; i < n ; ++i){
        if (arr[i] === 0){
            ++zeroC;
        }
        else if (arr[i] > 0){
            ++posC;
        }
        else
            ++negC;
    }
    console.log((posC/n).toFixed(6))
    console.log((negC/n).toFixed(6))
    console.log((zeroC/n).toFixed(6))

}
