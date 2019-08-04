var N = prompt("Введите число");
var xxx = [];
var count = 0;
for(var i = N.length - 1 ; i >= 0; i--)
{
    if(count % 3 == 0)
    {
        xxx.unshift(" ");
    }
    xxx.unshift(N[i]);
    count++;
}
alert(xxx.join(""));