var str = prompt("Enter message");
var arr = [];
var vowels = "aAeEiIuUyYoO";
for(var i = 0; i < str.length; i++)
{  
    if(vowels.indexOf(str[i]) == -1)  
    {
        
        arr.push(str[i]);
    }  
}
alert(arr.join(""));