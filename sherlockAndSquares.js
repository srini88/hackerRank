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

//Method 2: O(1) 
//We can simply take  and  and count the numbers between them using
//sqrt(B) - sqrt(A)+1;

function processData(input) {
    var inputs = input.split('\n');
  var casesno = parseInt(inputs[0]);
  for(var i = 0; i < casesno;i++){
    var numbers = inputs[1+i].split(' ');
    var a = parseInt(numbers[0]);
    var b = parseInt(numbers[1]);
    var count = 0;
    var sqrta = Math.ceil(Math.sqrt(a));  //ceil coz inclusive..
    var sqrtb = Math.floor(Math.sqrt(b)); //floor
    var number = sqrtb-sqrta;
      number++;
    
    console.log(number);
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
