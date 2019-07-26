var min = 100;
var max = 200;
var arr = [];
for (var i = 0; i < 15; i++)
{
    arr[i] = Math.round(min + (max - min) * Math.random());
}
alert(arr.join("  "));