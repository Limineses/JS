var contain = document.getElementById('contain');

var nav = document.getElementsByTagName("nav");
var buttons = nav[0].children;

var routes = 
{
	'#random':
	{
		path: 'progects/Random letters/index.txt',
		script: random_letters
	},
	'#count':
	{
		path: 'progects/Count click/index.txt',
		script: count_click
	},
	'#table':
	{
		path: 'progects/Table/index.txt',
		script: table
	},
	'#mult_table':
	{
		path: 'progects/Multiplication table/index.txt',
		script: mult_tab
	}
}

function do_route()
{
	var hash = location.hash;
	if(typeof routes[hash] == 'object')
	{
		contain.innerHTML = '';
		var path = routes[hash].path;
		var xhr =  new XMLHttpRequest();
		xhr.addEventListener('readystatechange', function()
		{
			if(xhr.readyState == 4)
			{
				contain.classList.remove('load');
			}
			else if(xhr.readyState == 1)
			{
				contain.classList.add('load');
			}
		})
		xhr.open('GET', path, true);
		xhr.onload = function()
		{
			var str = xhr.responseText;
			contain.innerHTML = str;
			routes[hash].script();
		}
		for(var i in routes)
		{
			var links = document.querySelectorAll('a[href="'+i+'"]');
			for(var j = 0; j < links.length; j++)
			{
				if(hash == i)
				{
					links[j].classList.add('active');
				}
				else
				{
					links[j].classList.remove('active');

				}
			}
		}
		xhr.send();
	}
}

window.addEventListener('hashchange', do_route)
do_route();

function random_letters()
{
	var arr = new Array(30);
	arr.fill(0);

	var randomLetters = arr.map(function(elem)
	{
	    var code = Math.floor(97 + (122 - 97) * Math.random());
	    return elem = String.fromCharCode(code);
	});

	var codeUpperArr = randomLetters.map(function(elem)
	{
	    return (elem.toUpperCase()).charCodeAt();
	    
	});

	var filterArr = codeUpperArr.filter(function(elem) 
	{
	    return elem % 5 != 0;
	});

	var sum = filterArr.reduce(function(sum, elem)
	{
	    return sum += elem % 5;
	}, 0);

	contain.innerHTML = randomLetters.join("") +'<br>'+sum;
}

function count_click()
{
	var button = document.getElementById('button_2');
	var count = 0;

	button.addEventListener('click', function(){
   	 	count++;
    	button.innerHTML = count;
	});
}

function table()
{
	var cells = document.getElementsByClassName('main');

	for(var i = 0; i < cells.length; i++)
	{
		var cell = cells[i];
		(function(e)
		{
			e.addEventListener('mouseover', function()
	    	{
		        e.setAttribute('class', 'red');
		        setTimeout(function(){e.setAttribute('class', 'main')}, 3000);
	    	});
		})(cell);   
	}
}

function mult_tab()
{
	var N = +prompt("Enter N");

	var table = document.createElement("table");
	contain.appendChild(table);

	table.innerHTML = "<tbody></tbody>";
	var tbody = table.children[0];

	var tr = document.createElement("tr");
	var str = " ";
	for(var a = 0; a <= N; a++)
	{
	       str += "<td class='mult_tab'>"+ "<b>" + a + "</b>" + "</td>";
	}
	tr.innerHTML = str;
	tbody.appendChild(tr);

	for (var j = 1; j <= N; j++)
	{
	    var tr = document.createElement("tr"); 
	    var str = "<td class='mult_tab'>" + "<b>" + j + "</b>" + "</td>";
	    
	    for(var i = 1; i <= N; i++)
	    {
	        if(i == j)
	        {
	            str += "<td class='diagonal mult_tab'>"+i * j+"</td>";
	            continue;
	        }
	       str += "<td class='mult_tab'>"+i * j+"</td>";
	    }
	    tr.innerHTML = str;
	    tbody.appendChild(tr);
	}
}