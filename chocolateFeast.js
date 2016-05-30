// Little Bob loves chocolate, and he goes to a store with  in his pocket. The price of each chocolate is . The store offers a discount: for every  wrappers he gives to the store, he gets one chocolate for free. How many chocolates does Bob get to eat?

// Input Format: 
// The first line contains the number of test cases, . 
//  lines follow, each of which contains three integers, , , and .

// Output Format: 
// Print the total number of chocolates Bob eats.

// Constraints: 
 
 
 

// Sample input

// 3
// 10 2 5
// 12 4 4
// 6 2 2
// Sample Output

// 6
// 3
// 5
// Explanation 
// In the first case, he can buy 5 chocolates with \$10 and exchange the 5 wrappers to get one more chocolate. Thus, the total number of chocolates is 6.

// In the second case, he can buy 3 chocolates for \$12. However, it takes 4 wrappers to get one more chocolate. He can't avail the offer and hence the total number of chocolates remains 3.

// In the third case, he can buy 3 chocolates for \$6. Now he can exchange 2 of the 3 wrappers and get 1 additional piece of chocolate. Now he can use his 1 unused wrapper and the 1 wrapper of the new piece of chocolate to get one more piece of chocolate. So the total is 5.

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

function findCount(n,c,m){
    var bought = Math.floor(n/c);
    var wrappers = bought;
    while (Math.floor(wrappers/m) > 0){
        //figure out the new wrappers
        bought += Math.floor(wrappers/m);
        //new wrapper total is newly bought + leftovers
        wrappers = Math.floor(wrappers/m) + (wrappers%m); //1st operand is one we bought right now , 2nd is the remainign after we bought..as we used fllor..
    }
    return bought;
}

/////////////// ignore above this line ////////////////////

function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var n_temp = readLine().split(' ');
        var n = parseInt(n_temp[0]);
        var c = parseInt(n_temp[1]);
        var m = parseInt(n_temp[2]);
        
        console.log(findCount(n,c,m));
        
    }

}
