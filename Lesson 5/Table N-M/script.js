var N = +prompt("Enter N");
var M = +prompt("Enter M");

var prime = [2];

out: for(var i = 2; i <= N*M; i++)
{
    for(var j = 2; j < Math.sqrt(i) + 1; j++)
    {
        if(i % j == 0)
        {
            continue out;
        }
    }
    prime.push(i);
}

var table = document.createElement("table");
document.body.appendChild(table);

table.innerHTML = "<tbody></tbody>";
var tbody = table.children[0];
var count = 0;
for(var j = 1; j <= N; j++)
{
    var tr = document.createElement("tr");
    var str = "";
  out: for(var i = 1; i <= M; i++)
    {
        count ++;
        for(var x = 0; x < prime.length; x++)
        {
            if(count == prime[x])
            {
                str += "<td class='prime'>" + count + "</td>";
                continue out;
            }
        }
        
        str += "<td>" + count + "</td>";    
    }
    tbody.appendChild(tr);
    tr.innerHTML = str;
}




    
