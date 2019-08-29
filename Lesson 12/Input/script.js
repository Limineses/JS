var container = document.getElementById('container');
var input = document.getElementById('input');
var find  = document.getElementById('find');

find.addEventListener('click', function()
{
	var xhr = new XMLHttpRequest();
	xhr.addEventListener('readystatechange', function()
	{
		if(xhr.readyState == 4)
		{
			container.classList.remove('load');
		}
		else if(xhr.readyState == 1)
		{
			container.classList.add('load');
		}
	})
	var path = input.value;
	xhr.open('GET', path, true);
	xhr.onload = function()
	{
		container.innerText = xhr.responseText;
	}
	xhr.send();
});