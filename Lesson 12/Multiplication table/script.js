var xhr = new XMLHttpRequest();
xhr.open('GET', 'number.txt', true);
xhr.onload = function()
{
    var N = xhr.responseText * 1;   
    tab(N);
}
xhr.send();

function tab(N)
{
	var table = document.createElement("table");
	document.body.appendChild(table);

	table.innerHTML = "<tbody></tbody>";
	var tbody = table.children[0];

	var tr = document.createElement("tr");
	var str = " ";
	for(var a = 0; a <= N; a++)
	{
	       str += "<td>"+ "<b>" + a + "</b>" + "</td>";
	}
	tr.innerHTML = str;
	tbody.appendChild(tr);

	for (var j = 1; j <= N; j++)
	{
	    var tr = document.createElement("tr"); 
	    var str = "<td>" + "<b>" + j + "</b>" + "</td>";
	    
	    for(var i = 1; i <= N; i++)
	    {
	        if(i == j)
	        {
	            str += "<td class='diagonal'>"+i * j+"</td>";
	            continue;
	        }
	       str += "<td>"+i * j+"</td>";
	    }
	    tr.innerHTML = str;
	    tbody.appendChild(tr);
	}
}