var N = +prompt('Enter N');

var table = document.createElement('table');
document.body.appendChild(table);

var tbody = document.createElement('tbody');
table.appendChild(tbody);

for(var j = 0; j < N; j++)
{
	var tr = document.createElement('tr');
	var str ='';

	for(var i = 0; i < N; i++)
	{
		str += '<td></td>';
	}

	tbody.appendChild(tr);
	tr.innerHTML = str;
}

tbody.addEventListener('mousedown', function(e)
{
	var r = Math.ceil(255*Math.random());
	var g = Math.ceil(255*Math.random());
	var b = Math.ceil(255*Math.random());
	e.target.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
})