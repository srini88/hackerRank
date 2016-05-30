// Your teacher has given you the task of drawing a staircase structure. Being an expert programmer, you decided to make a program to draw it for you instead. Given the required height, can you print a staircase as shown in the example?

// Input 
// You are given an integer  depicting the height of the staircase.

// Output 
// Print a staircase of height  that consists of # symbols and spaces. For example for , here's a staircase of that height:

//      #
//     ##
//    ###
//   ####
//  #####
// ######
// Note: The last line has 0 spaces before it.

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
    
    
    for (var i=1; i<=n ; ++i){
        var str="";
        //print spaces
        for (var j=0; j <n-i; ++j){
            str+=" ";
        }
        //append a # in the end...
        for (var k=0; k<i ;++k){
            str+="#";
        }
        console.log(str);
    }
    
    

}