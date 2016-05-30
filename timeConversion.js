//https://www.hackerrank.com/challenges/time-conversion
// Given a time in AM/PM format, convert it to military (-hour) time.

// Note: Midnight is  on a -hour clock, and  on a -hour clock. Noon is  on a -hour clock, and  on a -hour clock.

// Input Format

// A single string containing a time in -hour clock format (i.e.:  or ), where .

// Output Format

// Convert and print the given time in -hour format, where .

// Sample Input

// 07:05:45PM
// Sample Output

// 19:05:45

function processData(input) {
    //Enter your code here
    var hh = parseInt(input.substr(0, 2));
    var mmss = input.substr(2, 6);
    var pm = input.substr(8) === 'PM';
    var is12 = hh === 12;
    var res = (is12 ? (pm ? 12: 0):(pm ? hh + 12: hh));
    console.log('' + (res < 10 ? '0': '') + res + mmss);
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
