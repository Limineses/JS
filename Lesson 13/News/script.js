var xhr = new XMLHttpRequest();
xhr.open('GET', 'news.json', true);
xhr.addEventListener('load', function()
{
	var str = xhr.responseText;
	var data = JSON.parse(str);
	allNews = data;
	putTags(allNews);
	startContent(data);	
});
xhr.send();
var container = document.getElementById('container');

function startContent(data)
{
	var str = '';
	for(var i = 0; i < data.length; i++)
	{
		str += `<div class="startContent" data-n="${i}"><p>${data[i].description}</p>
		<em>${data[i].tags}</em></div>`;
	}
	container.innerHTML = str;
	var divs = document.getElementsByClassName('startContent');
	for(var j = 0; j < divs.length; j++)
	{
		divs[j].addEventListener('click', function(e)
		{
			var classOfContent = this.getAttribute('class');
			number = this.getAttribute('data-n');

			if(classOfContent == 'startContent' )
			{
				var fullContent = data[number];

				str = `<h2>${fullContent.title}</h2> 
				<p>${fullContent.text}</p> 
				<img src="${fullContent.image}">
				<em>${fullContent.date}</em>`;

				this.innerHTML = str;
			}
			else
			{
				this.innerHTML = `<p>${data[number].description}</p> <em>${data[number].tags}</em>`;
			}
			this.classList.toggle('startContent');
		});
	}
	var nav = document.querySelector('.nav')

	nav.addEventListener('click', function(e)
	{
		if(e.target.nodeName == 'A' )
		{
			e.preventDefault();
			var tagForSearch = e.target.getAttribute('data-tags');
			if(tagForSearch == 'all')
			{
				search.value = '';
				startContent(allNews);
				return;
			}
			if(!search.value.includes(tagForSearch))
			{
				search.value += tagForSearch + ' ';
				doSearch();
			}
		}		
	});
}

function putTags (data)
{
	var tags = [];
	for(var i in data)
	{
		var elem = data[i].tags;
		for(var j in elem)
		{
			tags.includes(elem[j]) ? null : tags.push(elem[j]);
		}
	}
	var div = document.createElement('div');
	var str = '<input type="text" id="search"><br><a data-tags="all">All</a>';
	tags.forEach(e => str += `<a href='' data-tags="${e}">${e}</a>`);
	document.body.appendChild(div);
	div.classList.add('nav');
	div.innerHTML = str;	
	var search = document.getElementById('search');

	search.addEventListener('keydown', function(e)
	{
		e.preventDefault();
		if(e.key == 'Backspace')
		{
			var arr = search.value.trimRight().split(' ');
			arr.pop();
			search.value = arr.join(' ');
			doSearch();
		}
	});
}

function doSearch()
{
	var tags = search.value.trimRight().split(' ');
	var news = [];
	for(var i in allNews)
	{
		var elem = allNews[i];
		if(news.includes(elem)){continue;}
		for(var j in elem.tags)
		{
			if(tags.includes(elem.tags[j]))
			{
				news.push(elem);
			}
		}					
	}
	startContent(news);
}