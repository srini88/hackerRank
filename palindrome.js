var number = 12354987,
    output = [],
    sNumber = number.toString();

for (var i = 0, len = sNumber.length; i < len; i += 1) {
    //output.push(sNumber.charAt(i)); //["1", "2", "3", "5", "4", "9", "8", "7"]
    //output.push(+sNumber.charAt(i)); //[1, 2, 3, 5, 4, 9, 8, 7]
    output.push(Number(sNumber.charAt(i))); //[1, 2, 3, 5, 4, 9, 8, 7]
}

console.log(output);

/* Outputs:
 *
 * [1, 2, 3, 5, 4, 9, 8, 7]
 */ 