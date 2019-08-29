var news =[];
var xhr = new XMLHttpRequest();
xhr.open('GET', 'news.txt', true);
xhr.onload = function()
{
	news = (xhr.responseText).split('\n');
	content();	
}
xhr.send();

function content()
{
	for(var i = 0; i < news.length; i+=4)
	{
		var div = document.createElement('div');
		var str ='<h2>'+news[i]+'</h2><p>'+news[i+1]+'</p><img src="'+news[i+2]+'">'+
		'<em>'+news[i+3]+'</em>';
		document.body.appendChild(div);
		div.innerHTML = str;
	}
}

document.addEventListener('scroll', function(e)
{
	if(scrollY == document.documentElement.scrollHeight - innerHeight)
	{
		content();
	}
})