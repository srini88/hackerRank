
//var a = [1, 0, 0, 1, 2, 5]; // [0, 0, 1, 1, 2, 5]
//var a = [0,0,0,0,0,0, 1, 2, 3, 0, 5];  //[0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 5]]
var a = [1, 2, 3, 1, 2, 3, 0, 0, 0]   //[0, 0, 0, 1, 2, 3, 1, 2, 3]
//This also works...moving zero to the start of the array...here we can go  from left to right..

var rem =[];
for (var i=0 ; i <a.length ; ++i){
	if (a[i]===0){
		rem = a.splice(i, 1);
		a.unshift(rem[0]);   
	}

}
console.log(a);


///splice worst case time complexity..
/////Worst case should be O(n) (copying all n-1 elements to new array).

//A linked list would be O(1) for a single deletion.