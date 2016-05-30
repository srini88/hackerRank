var arr = [ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ];

console.log(arr);  //[Array[3], Array[3], Array[3]]
console.log(arr.length);  //3

console.log(arr[0].length)   //3




var prim_diag = 25; 
var sec_diag = 15;
//need to consider equal to case as well...
 var result = (prim_diag - sec_diag >=0) ? prim_diag - sec_diag : (prim_diag - sec_diag) * -1;

 console.log(result);

//  Given a square matrix of size , calculate the absolute difference between the sums of its diagonals.

// Input Format

// The first line contains a single integer, . The next  lines denote the matrix's rows, with each line containing space-separated integers describing the columns.

// Output Format

// Print the absolute difference between the two sums of the matrix's diagonals as a single integer.

// Sample Input

// 3
// 11 2 4
// 4 5 6
// 10 8 -12
// Sample Output

// 15
// Explanation

// The primary diagonal is: 
// 11
//       5
//             -12

// Sum across the primary diagonal: 11 + 5 - 12 = 4

// The secondary diagonal is:
//             4
//       5
// 10
// Sum across the secondary diagonal: 4 + 5 + 10 = 19 
// Difference: |4 - 19| = 15


//2nd easy way with just one for loop....since we know it is a square matrix..it works..

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
    var a = [];
    for(a_i = 0; a_i < n; a_i++){
       a[a_i] = readLine().split(' ');
       a[a_i] = a[a_i].map(Number);
    }
    var prim_diag = 0;
    var sec_diag = 0;
    var len = n;   //sq matrix..
    for (var i=0; i < a.length ; ++i){
        
        prim_diag += a[i][i];
        sec_diag += a[i][len-1-i];
    }
    
    console.log(Math.abs(prim_diag-sec_diag))

}
