var n = +prompt("Entee count");
var rand;
var arr = [];
for(var i = 0; i < n; i++)
{
    rand = Math.round(97 + (122 - 97) * Math.random());
    arr[i] = String.fromCharCode(rand);
}
alert(arr.join(""));