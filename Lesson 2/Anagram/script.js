var string1 = prompt("Первая строка");
var array1 = string1.split("");
array1 = space(array1);
array1.sort();
var string1Sort = array1.join("");

var string2 = prompt("Вторая строка");
var array2 = string2.split("");
array2 = space(array2);
array2.sort();
var string2Sort = array2.join("");

if(string1Sort == string2Sort)
{
    alert("yes");
}
else
{
    alert("no");
}

function space(arr)
{
    var noSpace = [];
    for(var i = 0; i < arr.length; i++)
    {
        if(arr[i] != " ")
        {
            noSpace.push(arr[i]);
        }
    }
    return noSpace;
}