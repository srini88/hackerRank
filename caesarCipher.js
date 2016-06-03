
//var a=[0, 1, 0, 3, 2, 5]
var a=[1,2, 3, 4, 0, 0, 0, 0]

/////nmove all the zeroes to the front...

var zeroindex = a.length;  
for(i= a.length-1; i>=0 ;i--)
{
    if(a[i]==0)
    {
        zeroindex = i;
        break;
    }  
}

console.log(zeroindex)


for (i = zeroindex-1; i>=0 ; i--){
    if (a[i]!= 0){
        var temp;

        temp = a[i];
        a[i] = a[zeroindex];
        a[zeroindex] = temp;
        zeroindex--;
    }
}

console.log(a);