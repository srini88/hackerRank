var str = "srinivas";
var len = str.length;
var arr=[];
for (var i=0; i<len; ++i){
    arr.push((str.charCodeAt(i)));
}
console.log(arr);  //[115, 114, 105, 110, 105, 118, 97, 115]
 
// String.prototype.charCodeAt()   //this is on prootype , so you can do str.charCodeAt....
// 'ABC'.charCodeAt(0); // returns 65

// String.fromCharCode(num1[, ...[, numN]])
// This method returns a string and not a String object.

// Because fromCharCode() is a static method of String, you always use it as String.fromCharCode(), rather than as a method of a String object you created.

// String.fromCharCode(65, 66, 67);  // "ABC"

//now construct my name back from the arr...that has the ASCII codes of my name..

var myname="";

for (var j=0; j < arr.length; ++j){
    //console.log(String.fromCharCode(arr[j]))   //prints each character...s     r    i .....
    myname += String.fromCharCode(arr[j]);
}
console.log(myname);  //srinivas