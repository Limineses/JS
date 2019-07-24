/*
function format (N)
{
    if(N < 1)
        {
            return 0;
        }
    else
        {
            xxx = N % 1000 + " " + xxx;
            N /= 1000;
            format(N.toFixed(0));            
        }
    return xxx;
}

var N = +prompt("Введите число");
var xxx = "";
format(N);
alert (xxx);
*/

var N = +prompt("Введите число");
alert(N.toLocaleString());