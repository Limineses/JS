var str = prompt("Enter numbers separated by spaces");
var arr = [];
arr = str.split(" ");
for( var i in arr)
{
    arr[i] = +arr[i];
}
for(var i = arr.length - 1; i > 0; i--)
{
    for(var j = 0; j < i; j++)
    {
        if(arr[j] > arr[j + 1])
        {
            var swap = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = swap;
        }
    }
}
alert(arr.join("  "));