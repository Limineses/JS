function checkTheBrackets(str)
{ 
    for (var i=0; i < str.length; i++)
        {
            if(str[i]=="(" && str[i-1]!=" ")
                {
                    return false;
                }
            else if (str[i]==")" && str[i+1]!=" ")
                {
                    return false;                            
                }                       
        } 
    return true; 
}

var a = prompt("Введите предложение");

if(checkTheBrackets(a))
    {
        alert("Скобки расставлены верно");
    }
else
    {
        alert("Скобки расставлены неверно");
    }