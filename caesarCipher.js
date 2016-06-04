//var a=[0, 1, 0, 3, 2, 5];  //works for this..
var a = [1, 0, 0, 1, 2, 5]; // [1, 0, 1, 2, 5, 0] does not work for this..

// The problem has nothing to do with the return statement, the issue is your algorithm is wrong.

// [0,0,1,2,3] will return [0,1,2,3,0]

// When you loop in the positive direction and remove indexes, you skip indexes as the next index slides down to the position you already covered.

// You need to loop in the negative direction. Start at the end and go to the start.

///THis works perfect....splice remember to do it fromthe end of the loop..
var rem =[];
for (var i=a.length-1 ; i >=0 ; --i){

	if (a[i]===0){
		rem = a.splice(i, 1);
		a.push(rem[0]);   
	}

}
console.log(a);
