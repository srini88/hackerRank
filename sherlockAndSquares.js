//https://www.hackerrank.com/challenges/sherlock-and-squares?h_r=next-challenge&h_v=zen

// Watson gives two integers ( and ) to Sherlock and asks if he can count the number of square integers between  and  (both inclusive).

// Note: A square integer is an integer which is the square of any integer. For example, 1, 4, 9, and 16 are some of the square integers as they are squares of 1, 2, 3, and 4, respectively.

// Input Format 
// The first line contains , the number of test cases.  test cases follow, each in a new line. 
// Each test case contains two space-separated integers denoting  and .

// Output Format 
// For each test case, print the required answer in a new line.

// Constraints 
 

// Sample Input

// 2
// 3 9
// 17 24
// Sample output

// 2
// 0


function isInteger(x) {
    return x % 1 === 0;
}

console.log(isInteger(1));
console.log(isInteger(1.00000)); //true
console.log(isInteger(1.0001));  //false
console.log(isInteger(1.5)); //false
console.log(isInteger(6));
console.log(isInteger(-7)); //true
console.log(isInteger(0)); //true