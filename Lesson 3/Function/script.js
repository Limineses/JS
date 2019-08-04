function average()
{
    var sum = 0;
    for(var i = 0; i < arguments.length; i++)
    {
        sum += arguments[i];
    }
    return sum / arguments.length;
}

function harmonic()
{
    var sum = 0;
    for(var i = 0; i < arguments.length; i++)
    {
        sum += 1 / arguments[i];
    }
    return arguments.length / sum;
}

console.log( harmonic(10,20,5) );

console.log( average(10,20) );