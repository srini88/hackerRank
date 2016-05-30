// https://www.hackerrank.com/challenges/cut-the-sticks
// You are given  sticks, where the length of each stick is a positive integer. A cut operation is performed on the sticks such that all of them are reduced by the length of the smallest stick.
// Suppose we have six sticks of the following lengths:
// 5 4 4 2 2 8
// Then, in one cut operation we make a cut of length 2 from each of the six sticks. For the next cut operation four sticks are left (of non-zero length), whose lengths are the following: 
// 3 2 2 6
// The above step is repeated until no sticks are left.
// Given the length of  sticks, print the number of sticks that are left before each subsequent cut operations.
// Note: For each cut operation, you have to recalcuate the length of smallest sticks (excluding zero-length sticks).
// Input Format 
// The first line contains a single integer . 
// The next line contains  integers: a0, a1,...aN-1 separated by space, where ai represents the length of ith stick.
// Output Format 
// For each operation, print the number of sticks that are cut, on separate lines.

// Sample Input #00

// 6
// 5 4 4 2 2 8
// Sample Output #00

// 6
// 4
// 2
// 1
//left before each subsequent cut/
//other solutuin
function processData(input) {
    var sticks = input.match(/[0-9.]+/g);
    var cutLen;

    sticks.shift();

    sticks = sticks.filter(function(el){return el>=1})
    cutLen = Math.min.apply(null, sticks);

    while(sticks.length>0) {
        console.log(sticks.length);
        cutLen = Math.min.apply(null, sticks);   ///can also do null directly...I used 'this'
        sticks = sticks.map(function(el){return el-cutLen;})
        sticks = sticks.filter(function(el){return el>=1})
    }
       
} 

        

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
