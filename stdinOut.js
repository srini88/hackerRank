//Sample Input\
// 4 2
// 0 1
// 2 3

function processData(input) {
    var lines = input.split('\n');  
    console.log(lines);  //[ '4 2', '0 1', '2 3' ]
    var NI = lines.shift().split(' ');
    console.log(NI) //[ '4', '2' ]
  var N = parseInt(NI.shift(), 10);
    console.log(N);  // 4
  var I = parseInt(NI.shift(), 10);
    console.log(I) //2
  
    console.log(lines)  [ '0 1', '2 3' ]   //mutated
  
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