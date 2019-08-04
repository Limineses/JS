function primeNumbers(N)
{
    for(var i = 2; i < Math.sqrt(N)+1; i++)
        {
            if(N % i == 0)
                {
                    return false;
                }
        }
    return true;
}

var N = +prompt("Введите число");
var answer = "2  ";
for (var i = 3; i <= N; i++)
    {
        if(primeNumbers(i))
        {
            answer += i + "  ";
        }
    }
alert(answer);