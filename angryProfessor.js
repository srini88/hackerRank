//https://www.hackerrank.com/challenges/angry-professor

// A Discrete Mathematics professor has a class of  students. Frustrated with their lack of discipline, he decides to cancel class if fewer than  students are present when class starts.

// Given the arrival time of each student, determine if the class is canceled.

// Input Format

// The first line of input contains , the number of test cases.

// Each test case consists of two lines. The first line has two space-separated integers,  (students in the class) and (the cancelation threshold). 
// The second line contains  space-separated integers () describing the arrival times for each student.

// Note: Non-positive arrival times () indicate the student arrived early or on time; positive arrival times () indicate the student arrived  minutes late.

// Output Format

// For each test case, print the word YES if the class is canceled or NO if it is not.

// Constraints

// Note 
// If a student arrives exactly on time , the student is considered to have entered before the class started.

// Sample Input

// 2
// 4 3
// -1 -3 4 2
// 4 2
// 0 -1 2 1
// Sample Output

// YES
// NO
// Explanation

// For the first test case, . The professor wants at least  students in attendance, but only  have arrived on time ( and ). Thus, the class is canceled.

// For the second test case, . The professor wants at least  students in attendance, and there are  who have arrived on time ( and ). Thus, the class is not canceled.

//You only need to count the number of students whose arrival time is less than or equal to 0. If this count is less than K, then the class is cancelled. Otherwise, it is not.

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
function findOut(n, k, a){
    
    var newArr = a.filter(function(item){
        return (item>=1)?false:true;    ///will only filter true elements..we dont' want positives ones..
    })
    //console.log(newArr.length);
    if (newArr.length >=k)
        return "NO"  //class is not canceled
    return "YES";  //class is canceled
}

/////////////// ignore above this line ////////////////////

function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var n_temp = readLine().split(' ');
        var n = parseInt(n_temp[0]);
        var k = parseInt(n_temp[1]);
        a = readLine().split(' ');
        a = a.map(Number);
        console.log(findOut (n, k, a));
    }

}
