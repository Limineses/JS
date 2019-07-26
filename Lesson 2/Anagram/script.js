var string1 = prompt("Первая строка");
var array1 = new Array();
array1 = string1.split("");
space(array1);
array1.sort();
var string1Sort = array1.join("");

var string2 = prompt("Вторая строка");
var array2 = new Array();
array2 = string2.split("");
space(array2);
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
    for(var i = 0; i < arr.length; i++)
    {
        if(arr[i] == " ")
        {
            delete arr[i];
        }
    }
}