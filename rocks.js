// my solution
var elementArray = [];
function processData(input) {
    var rock;
    var elements;
    var rockCount =0;
    
    var data = input.split("\n");  //main array
    var n = parseInt(data[0].trim(),10); 
   
    rock = data[1];
    
    for (var s=0 ; s < rock.length ; ++s){
        elementArray[rock[s]] = 1;
    }
    //console.log(elementArray)
    
    for (var i=2; i < data.length ; ++i){
        rock = data[i]; 
        var added =[];
        
        var prop;
        var added=[];
        //my approach - loop through elementArray itself and use indexOf
        for (prop in elementArray){
            
            
            if (rock.indexOf(prop) !== -1 && !added[prop] ){
                ++elementArray[prop];
            }
            added[prop] = true;

        }
        //console.log(elementArray)
    }
    //now you have elementArray as [ a: 3, b: 3, c: 2, d: 2, e: 2 ] after all loops
    // want to return elements that have values of n 
    var prop;
    var result=0;
    for (prop in elementArray){
        if (elementArray[prop] === n)
            ++result;
    }
    return result;
   
   
}
 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   console.log(processData(_input));
});
