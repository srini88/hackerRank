// https://www.hackerrank.com/challenges/gem-stones
// John has discovered various rocks. Each rock is composed of various elements, and each element is represented by a lower-case Latin letter from 'a' to 'z'. An element can be present multiple times in a rock. An element is called a gem-element if it occurs at least once in each of the rocks.

// Given the list of  rocks with their compositions, display the number of gem-elements that exist in those rocks.

// Input Format

// The first line consists of an integer, , the number of rocks. 
// Each of the next  lines contains a rock's composition. Each composition consists of lower-case letters of English alphabet.

// Constraints 
 
// Each composition consists of only lower-case Latin letters ('a'-'z'). 
//  length of each composition 

// Output Format

// Print the number of gem-elements that are common in these rocks. If there are none, print 0.

// Sample Input

// 3
// abcdde
// baccd
// eeabg
// Sample Output

// 2
// Explanation

// Only "a" and "b" are the two kinds of gem-elements, since these are the only characters that occur in every rock's composition.

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});

var elementArray = [];

//input passed from stdin
// 3
// abcdde
// baccd
// eeabg


function processData(input) {

    var rock;
    var elements;
    var rockCount = 0;
    var data = input.split('\n');  //main array  split by new line
    //[ '3', 'abcdde', 'baccd', 'eeabg' ]
    var num = parseInt(data[0].trim(),10);  //This is n ...by default typeof getting string..so better to parseInt or use array.map(Number)
    //now typeof gives number...and we converted it to number 3
    rock = data[1];  //first rock..
    //loop through first rock
    for(var s=0;s<rock.length;s++){
        //if we want to get actual frequency..do 
        //elementArray[rock[s]] = (typeof elementArray[rock[s]] === 'undefined')? 1 : ++elementArray[rock[s]];
        // gives //[ a: 1, b: 1, c: 1, d: 2, e: 1 ]
        We dont care about actual frequency, we only care about if it is there or not...
        //if it is not there, put 1 else override it to 1 again
        elementArray[rock[s]] = 1;
        //[ a: 1, b: 1, c: 1, d: 1, e: 1 ]
    }
    //now loop through next rocks..
    for(var i=2; i<data.length; i++){
        rock = data[i];   //assign that to data[i] //it will be a string each time //typeof gives string...
        var added = [];
        for(var s=0;s<rock.length;s++){
            //elemetArray lo undi, added lo lekapothe , increment --may be found gem rock
            if(elementArray[rock[s]] && !added[rock[s]]){  //addded to eliminate duplicates..
               elementArray[rock[s]]++;      
            };
            added[rock[s]] = true;            
        }
    }
    for(var key in elementArray){
        if(elementArray[key] == num){
            rockCount++;
        }
    }
    console.log(rockCount);
}
