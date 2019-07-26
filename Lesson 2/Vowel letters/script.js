var str = prompt("Enter message");
var arr = [];
arr = str.split("");
for(var i = 0; i < arr.length; i++)
{
    if(arr[i] == "a" || arr[i] == "e" || arr[i] == "i" || arr[i] == "u" || arr[i] == "y" || arr[i] == "o" || +
       arr[i] == "A" || arr[i] == "E" || arr[i] == "I" || arr[i] == "U" || arr[i] == "Y" || arr[i] == "O" )       
    {
          delete arr[i];
    }  
}
alert(arr.join(""));