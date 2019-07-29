var s = +prompt("Enter s");
var p = +prompt("Enter p");
var min = s - (s / 100) * p;
var max = s + (s / 100) * p;
var arr = [];
for(var i = 0; i < 1000; i++)
{
    arr[i] = Math.floor(min + (max - min) * Math.random());
}
arr.sort(function(a, b)
{
    return b % 10 - a % 10;
});
alert(arr.join("  "));