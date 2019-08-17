var preload = document.getElementById('preload');
setTimeout(function()
{
	preload.style['display'] = "none";
}, 3000);

for(var j = 1; j < 4; j++)
{
	var divs = document.getElementsByClassName('speed'+j);
	for(var i = 0; i < divs.length; i++)
	{
		var elem = divs[i];
		var speed = j;
		(function(elem, speed)
		{
			window.addEventListener('mousemove', function(e)
	    	{
	    		switch(speed)
	    		{
	    			case 1:
		    			elem.style['left'] = -e.clientX/12 +'px';
		    			break;
	    			case 2:
		    			elem.style['left'] = +e.clientX/12 +'px';
		    			break;
	    			case 3:
		    			elem.style['left'] = -e.clientX/6 +'px';
		    			break;
	    		}
	    	});
		})(elem, speed); 
	}
}

var cursor = document.getElementsByClassName('cursor');
for(var i = 0; i < cursor.length; i++)
{
	var z = cursor[i];
	(function(y)
	{
		window.addEventListener('mousemove', function(e)
    	{
    		y.style['top'] =  e.clientY/10 +'px';
    		y.style['left'] =  e.clientX/10 +'px'
    	});
	})(z); 
}

var back1 = document.getElementById('back1');
window.addEventListener('scroll', function(){back1.style['top'] = scrollY/3 + 'px';});

for(var i = 2; i < 5; i++)
{
	var elem =  document.getElementById('knife'+i);
	var num = i;
	(function(elem, num){
		window.addEventListener('scroll', function()
		{
			elem.style['background-position'] = '0px '+(-innerHeight*(num-1) + scrollY)+'px';
		});
	})(elem, num);
}