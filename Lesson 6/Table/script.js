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
