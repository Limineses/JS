var min = 2000 * 365 + 30 + 1;
var max = 2020 * 365 + 30 + 1;
var arr = [];
var sec = [];
var answer = [];
var Month = {
    0: "января",
    1: "февраля",
    2: "марта",
    3: "апреля",
    4: "мая",
    5: "июня",
    6: "июля",
    7: "августа",
    8: "сентября",
    9: "октября",
    10: "ноября",
    11: "декабря"
}
for(var i = 0; i < 10; i++)
{
    arr[i] = Math.round(min + (max - min) * Math.random());
}
for(var i = arr.length - 1; i > 0; i--)
{
    for(var j = 0; j < i; j++)
    {
        if(arr[j] > arr[j+1])
        {
            var swap = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = swap;
        }
    }
}
for(var i = 0; i < 9; i++)
{
    sec.push(" ".repeat(30) + (arr[i+1] - arr[i]) * 24 * 60 * 60 + "сек.");
}
for(var i = 0; i < 10; i++)
{
    arr[i] = secondsInDate(arr[i]);
}

function secondsInDate(d)
{
    var y = Math.trunc(d / 365);
    var m = Math.trunc((d - y * 365) / 30);
    var d = Math.trunc(d - (y * 365) - (m * 30));
    if(d == 0){ d = 1;}
    return d + " " + Month[m] + " " + y + "г.";
}
for(var i = 0; i < 10 ; i++)
{
    answer.push(arr[i]);
    answer.push(sec[i]);
}
alert(answer.join("\n"));


