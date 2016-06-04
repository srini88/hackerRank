//var a=[0, 1, 0, 3, 2, 5];  //works for this..
var a = [1, 0, 0, 1, 2, 5]; // [1, 0, 1, 2, 5, 0] does not work for this..

var rem =[];
for (var i=0 ; i <a.length ; ++i){


	if (a[i]===0){
		//index = i;
		rem = a.splice(i, 1);
		a.push(rem[0]);   ///problem is you remove it...it will alter the array..some cases the next item may be zero.we are missing these zeroes because..splice is mutable and will alter the index and move the zero to i... and then the next iteration i will be incremented..so splice is not right approach
	}

}

console.log(a);