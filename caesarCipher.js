
var a=[0, 1, 0, 3, 2, 5]

//move all zeroes to the end and keep the relative order...


var zeroindex = a.length;  //setting becasue if there are no zeroes we dont want to go to the second for loop
for(i=0;i<a.length;i++)
{
    if(a[i]==0)
    {
        zeroindex = i;
        break;
    }  //you find the first zero elemet and save the index and come out of loop
}

for(i=zeroindex+1;i<a.length;i++)
{
    if(a[i] !=0)  ///moving non-zero to the front,,not dealing with zeros only..
    {
        var temp = a[i];
        a[zeroindex] = temp;
        a[i] = 0;
        zeroindex++;
    }
    console.log(a)
}
//console.log(a);