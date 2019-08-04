function checkTheBrackets(str)
{
    var br = [];
    for(var i = 0; i < str.length; i++)
    {
        if(str[i] == "(" || str[i] == ")")
        {
            br.push(str[i]);
        }
    }
    for(var i = 0; i < br.length; i++)
    {
        if(br[i] == ")")
        {
            return false;
        }
        if(br[i] == "(")
        {
        var c = br.indexOf(")");
        if(c > -1)
        {
            delete br[i];
            delete br[c];         
                
        }
        else
        {
            return false;
        }
            
        }
    }
    return true;
}

var a = prompt("Введите предложение");
checkTheBrackets(a);
if(checkTheBrackets(a))
{
    alert("Скобки расставлены верно");
}
else
{
    alert("Скобки расставлены неверно");
}