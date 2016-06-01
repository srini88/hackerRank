
//find the max difference.......

// var arr = [8, 9, 10, 1, 2, 7, 9];
// var arr = [-10, -9, -8, -7, -6, -5];
// var arr = [4, 9, 10, 6, 2, 7, 9];
// var arr = [0, 0, 0, 0, 0, 0, 0];
var arr = [4, 9, 10, 6, 8, 10, 23];

console.log(arr);
size = arr.length;

///2nd approach coming from the last 

// var max = arr[size-1];
// var min = arr[size-1];
// var max_diff = 0;


// for (var i = arr[size-2]; i>=0; --i){


//     if (arr[i] > max){

//         max = arr[i];
//         min = arr[i];
//         console.log("arr[i]: " + arr[i] + " max: " + max + " min: " + min);
//     }

//     else if (arr[i] < min){

//         min = arr[i];

//         if (max-min > max_diff){
//             max_diff = max-min;
//         }
//         console.log("arr[i]: " + arr[i] + " max: " + max + " min: " + min +" max_diff: " + max_diff);
//     }



// }
// console.log(max_diff);

////approach coming form the start...
var max_diff = 0;
var max = arr[0];
var min = arr[0];

for (var i=1; i < size ; ++i){

    if (arr[i] > max){
        max = arr[i];
        if (max - min > max_diff){
            max_diff = max-min;
        }
    }
    else if (arr[i] < min){
        max = arr[i];
        min = arr[i];
    }
}
console.log(max_diff)