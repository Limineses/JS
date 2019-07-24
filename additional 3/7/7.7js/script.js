var key = [27, 81 ,98 ,51]; //ключ
var n = 256;
var K = [];
var S = [];
var k = [];
var answer = [];
var message = [];
var temp, s;
for(var i = 0 , j = 0; i < n; i++, j++) //заполняем блок К повторряющимися значениями ключа
{
    if(j < key.length)
    {
        K[i] = key[j];
    }
    else
    {
        j = 0;
        K[i] = key[j];
    }
}
for(var i = 0; i < n; i++) // заполняем блок S от 0 до 255
{
    S[i] = i;
}
for(var i = 0, j = 0; i < n; i++) // меняем местами элементы в блоке S
{
    j = (j + S[i] + K[i]) % n;
    temp = S[j];
    S[j] = S[i];
    S[i] = temp;
}  

function kk() // выбираем число в соответсвии каждому символу в сообщении
{
    for( var count = 0, i = 0, j = 0; count < message.length; count++)
    {
        i = (i + 1) % n;
        j = (j + S[i]) % n;
        temp = S[j];
        S[j] = S[i];
        S[i] = temp;
        var t =(S[i] + S[j]) % n;
        k.push(S[t]); 
    }
}

function encrypt()
{
    reloadPage();
    message = document.getElementById("message").value; 
    kk();
    for(var i = 0; i < message.length; i++)
    {        
        answer.push(message.charCodeAt(i) ^ k[i]);   //сложение кода символа сообщения и числа к по модулю 2
    } 
    document.getElementById("answer").innerHTML = answer.join("-");
}

function decrypt()
{
    reloadPage();
    s = document.getElementById("message").value;  
    message = s.split("-");
    kk();
    for(var i = 0; i < message.length; i++)  //зашифрованное сообщение складываем с числом к по модулю 2
	{        
        answer.push(String.fromCharCode(message[i] ^ k[i]));        
	}
    document.getElementById("answer").innerHTML = answer.join("");
}

function reloadPage()
{
    answer = [];
    document.getElementById("answer").innerHTML = "";
}
