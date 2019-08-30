var Publications =
{
	init : async function()
	{
		var data = await this.Data.load('data.json');
		this.onDataLoaded(data);
	},

	onDataLoaded(data)
	{
		this.Data.posts = data.map(function(obj)
		{
			var post = new Post(obj.author.name, obj.author.image, obj.text, obj.likes);
			obj.comments.forEach(function(com)
			{
				var comment = new Comments(com.author.name, com.author.image, com.text, com.likes);
				post.addComment(comment);
			});
			return post;
		}); 
		this.buildPage();
	},

	buildPage()
	{
		var count = 0;
		var str = '';
		this.Data.posts.forEach(function(e)
		{
			str = 
			`<div data-n="${count}" class="post">
			${Publications.buildPublication(e)}
			</div>`;
			Publications.Dom.container.innerHTML += str;
			count++;		
		});
		this.EventHandlers.clickButtons();
		this.EventHandlers.focusArea();
		this.EventHandlers.pressEnter();
	},

	buildPublication(data)
	{
		var str = 
		` <div class="publication">
			<div class="author">
				<img src="${data.image}"/>
				<span class="authorname">${data.name}</span>
			</div>
			<div class="content">
				${data.text}
			</div>
			<div class="buttons">
				<input type="button" class="butcom"/><div class="countcom">${data.comments.length}</div>
				<input type="button" class="butlik"/><div class="countlik">${data.likes}</div>
			</div>
		</div>
		<div class="allcom">
			${this.buildComment(data.comments)}
			${this.buildArea()}
		</div>
		`;
		return str;
	},

	buildComment(data)
	{
		var str = '';
		data.forEach(function(e)
		{
			str += Publications.buildMessage(e);
			
		});
		return str;
	},

	buildMessage(e)
	{
		var str =
		` <div class="comment">
			<div class="author">
				<img src="${e.image}"/>
				<span class="authorname">${e.name}</span>
			</div>

			<div class="content">
				${e.text}
			</div>

			<div class="buttonscomm">
				<input type="button" class="butlik"/><div class="countlik">${e.likes}</div>
			</div>				
		</div>`;
		return str;
	},
	buildArea()
	{
		var str =
		`<div class="inputcom">	
				<textarea class="area"></textarea><input type="button" value="Отправить" class="send">
		</div>`;
		return str
	},

	EventHandlers :
	{
		clickButtons()
		{
			var pst = document.querySelectorAll('.post');
			for(let i = 0; i < pst.length; i++)
			{
				pst[i].addEventListener('click', function(e)
				{
					Publications.EventHandlers.openComments(e, pst[i]);
					Publications.EventHandlers.liked(e);
					Publications.EventHandlers.sendMessage(e, pst[i]);

				});
			}
		},

		openComments(e, x)
		{
			if(e.target.classList.value.includes('butcom'))
			{
				x.children[1].classList.toggle('open');
			}
		},

		liked(e)
		{
			if(e.target.classList.value.includes('butlik'))
			{
				e.target.classList.toggle('active');

				if(e.target.getAttribute('data-like') == 'true')
				{
					e.target.nextSibling.innerHTML--;
					e.target.removeAttribute('data-like');
					return;
				}

				if(e.target.getAttribute('data-like') == null)
				{
					e.target.nextSibling.innerHTML++;
					e.target.setAttribute('data-like', 'true');
					return;
				}
			}
		},

		sendMessage(e, x)
		{
			if(e.target.classList.value =='send')
			{
				var mes = e.target.previousSibling.value;
				var user = new Comments("User", "image/avatar/User.jpg", mes, 0);
				mes = '';

				var numb = x.children[1].children.length;

				x.children[1].children[numb-1].remove();

				x.children[1].innerHTML += Publications.buildMessage(user) + 
				Publications.buildArea();
				Publications.EventHandlers.focusArea();
			}
		},

		focusArea()
		{
			var area = document.querySelectorAll('.area');
			for(let i = 0; i < area.length; i++)
			{
				area[i].addEventListener('focus', function(e)
				{
					Publications.Dom.elem = e.target.nextSibling;
				});
				area[i].addEventListener('blur', function(e)
				{
					Publications.Dom.elem = '';
				});
			}
		},

		pressEnter()
		{
			document.addEventListener('keydown', function(e)
			{
				if(e.key == 'Enter')
				{
					e.preventDefault();
					var el = Publications.Dom.elem;
					var event = new Event('click', {bubbles: true});
					el.dispatchEvent(event);
				}
			});
		}
	},

	Dom :
	{
		container : document.getElementById('mainContainer'),
		elem : ''
	},

	Data :
	{
		load(path)
		{
			return new Promise(function(resolve, reject)
			{
				var xhr = new XMLHttpRequest;
				xhr.open('GET', path, true);
				xhr.onload = function()
				{
					try
					{
						var d = JSON.parse(this.responseText);
						resolve(d);
					}
					catch(err)
					{
						reject(err);
					}
				}
				xhr.onerror = function ()
				{
					reject("Error while loading data!");
				}
				xhr.send(null);
			});
		},
		posts : []
	}
}
Publications.init();