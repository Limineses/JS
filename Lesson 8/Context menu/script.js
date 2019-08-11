var contextmenu = document.getElementById('contextmenu');

document.addEventListener('contextmenu', function(e)
{
	e.preventDefault();
	var maxX = window.innerWidth - 150;
	var maxY = window.innerHeight - 130;

	if(e.clientY > maxY && e.clientX > maxX)
	{
		contextmenu.style.left = maxX +'px';
		contextmenu.style.top = maxY + 'px';
		contextmenu.classList.add('open');
		return;
	}
	if(e.clientX > maxX)
	{
		contextmenu.style.left = maxX +'px';
		contextmenu.style.top = e.clientY + 'px';
		contextmenu.classList.add('open');
		return;
	}
	if(e.clientY > maxY)
	{
		contextmenu.style.left = e.clientX +'px';
		contextmenu.style.top = maxY + 'px';
		contextmenu.classList.add('open');
		return;
	}
	else
	{
		contextmenu.style.left = e.clientX  +'px';
		contextmenu.style.top = e.clientY + 'px';
		contextmenu.classList.add('open');
	}
});


document.addEventListener('click', function(e)
{
	contextmenu.classList.remove('open');
});

contextmenu.addEventListener('click', function(e)
{
	e.stopPropagation();
});

document.addEventListener('wheel', function(e)
{
	contextmenu.classList.remove('open');
});