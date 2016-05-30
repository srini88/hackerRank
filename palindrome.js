// write a function to detect the given number is a palindrome or not
// list all palindrome numbers in a range
// Integer is to not allowed to be treated a string and typecasting is not allowed

//code to reverse a number altogether.... 
var isPalindrome = function(n){
	var actual =n;

	var reverse = 0;

	while(n>0){
		var rem = n%10;
		reverse = (reverse*10)+rem;
		n = Math.floor(n/10);
	}
	return reverse;



}

console.log(isPalindrome(1234567));  //7654321




