var X = +prompt("Введите Х");
var N = +prompt("Введите N");
var s1, s2; 
var evenFactorial = 1;
var oddFactorial = 1;
var sum = 0;
while(N > 0)
    {
        s1 = Math.pow(X, 2 * N - 1) / (2 * N - 1);
        
        for(var i = 2 * N ; i > 0; i -= 2)
            {
                evenFactorial *= i;
            }
        
        for(var i = 2 * N - 1 ; i > 0; i -= 2)
            {
                oddFactorial *= i;
            }
        
        s2 = oddFactorial / evenFactorial;
        
        sum += s1 * s2;
        N--;
    }
alert(sum);