
// To encrypt the string, we need to rotate the alphabets in the string by a number k. If k is a multiple of 26, then rotating the alphabets in the string by k has no effect on the string
// Rotation by k is same as rotation by k+26
// So by taking modulo of k with 26, we get the number of times we need to rotate the alphabets of the string
//  To rotate the alphabets in a string by a value k, we add k to the character. If this value exceeds the range of the alpabets, we need to wrap it back. The range of uppercase characters is from 65 ('A') to 90 ('Z'). The range of lowercase characters is from 97 ('a') to 122 ('z'). 

//  Example: For the string : "middle-Outz" and k=2 
// We add 2 to 'm'. 'm' becomes 'o'. This value is within the ascii range so we don't need to wrap it. '-' remains unaltered. 'z' on adding 2 becomes 124.

function processData(input) {
    //Enter your code here
    var lines = input.split('\n');
    var chars = parseInt(lines[0].trim(), 10);  //length of unencrypted string
    var text = lines[1].trim();  //unaltered string
    var shift = parseInt(lines[2].trim(), 10)%26;  //K
    var output = "";
    //make 93 as c ---c is 67  so do (93-90)+64  --same witt small letters
    for(var i=0; i<chars; i++) {
        var character = text.charCodeAt(i);
        if (character >= 65 && character <= 90) {
            character += shift;
            if (character > 90) {
                character = 64 + (character - 90);
            }
        } else if (character >= 97 && character <= 122) {
            character += shift;
            if (character > 122) {
                character = 96 + (character - 122);
            }
        }
        output += String.fromCharCode(character);
    }
    
    process.stdout.write(output+"\n")
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