function moreOften()
{
    var str = document.getElementById("message").value;
    var array  = [];
    var max = 0;
    var maxJ = 0;
    var repeat = 1;
    array = str.split(" ");
    for (var j = 0; j < array.length - 1; j++)
    {
        repeat = 1;
        for(var i = j + 1; i < array.length; i++)
        {
            if(array[j] != array[i])
            {
                continue;
            }
            else
            {
                repeat ++;
            }
        }
        if(repeat > max)
        {
            max = repeat;
            maxJ = j;
        }
    }
    alert(array[maxJ]);
}
