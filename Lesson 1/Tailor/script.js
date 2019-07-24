var N = +prompt("Введите N");
var X = +prompt("Введите X");
function tgX(X, N)
{
    var sum = 0;
    for(var i = 0; i < N; i++)
    {
      sum += (( numberBern(2*i) * Math.pow(-4, i) * (1 - Math.pow(4, i)) ) / factorial(2*i)) * Math.pow(X, 2*i-1);
    }
    return sum;
}

function factorial(n)
{
    if(n==0)
    {
        return 1;
    }
    else
    {
        return n * factorial(n - 1);
    }
}

function variableC(k, n)
{
    return factorial(n) / (factorial(k) * factorial(n - k));
}

function numberBern(n)
{
    var a = 0;
    var bern = [1, -0.5]; 
    for(i = 2; i <= n; i++)
    {
        if(i % 2 != 0)
            {
                bern.push(0);
                continue;
            }
        else
            {
                for(var k = 1; k <= i; k++)
                {   
                    var c = ( (-1) / (i+1) ) * variableC(k+1, i+1) * bern[i-k];
                    a += c;
                }
            }
            
        bern.push(a);
        a = 0
            
    }
    return bern[n];
}

function arcsinX(X, N)             // |x| < 1
{
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
    return sum;
}

function lnX(X, N)               // |x| < 1
{
    var s1;
    var sum = 0;
    while(N > 0)
    {
        s1 = Math.pow(-1, N+1) * Math.pow(X, N);
        sum += s1 / N;
        N--;
            
    }
    return sum;
}
alert("arcsinX: " + arcsinX(X, N)  + "\nlnX: " + lnX(X, N) + "\ntgX: " + tgX(X, N));
 


