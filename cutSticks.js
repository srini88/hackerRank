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



/////////////// ignore above this line ////////////////////
function findMin(arr){
    return Math.min.apply(this, arr);
}

function process(arr){
    
    if (arr.length >0){
        var min = findMin(arr);
        var cuts = arr.length;
        console.log("min>0 ",cuts); 
        //you cannot manipulate array with filter..
        var cutArr = arr.map(function(item){
            
            if (item-min >0){
            	item = item-min;
            	return item;
            }
            return 0;
        })
        var newArr =cutArr.filter(function(item){
        	return (item >0);
        })
        process(newArr);
    
    }
    else
    	return;
}

function main() {
    var n = 6;
    //arr = readLine().split(' ');
    var arr = [5,4,4,2,2,8];
    process(arr);
}

main();