var n = +prompt("Enter count");
var sum = 0;
var count = 0;
var arr = [];
for(var i = 0; i < n; i++)
{
    arr[i] = Math.round( 0 + (100 - 0) * Math.random());
    if(arr[i] % 3 == 0)
    {
        sum += arr[i];
        count ++;
    }
}
alert(arr.join("  ") + "\nSum: " + sum + "   Count: " + count);