var Publications =
{
	init : async function()
	{
		var data = await this.Data.load('data.json');
		this.onDataLoaded(data);
	},

	onDataLoaded(data)
	{
		this.Data.posts = data.map(obj=>
		{
			const post = new Post(obj.author.name, obj.author.image, obj.text, obj.likes);
			obj.comments.forEach(com=>
			{
				const comment = new Comments(com.author.name, com.author.image, com.text, com.likes);
				post.addComment(comment);
			});
			return post;
		}); 
		this.buildPage();
	},

	buildPage()
	{
		var count = -1;
		var str = '';
		const result = this.Data.posts.reduce((str,e)=>
		{
			count++;
			return str += 
			`<div data-n="${count}" class="post">
			${Publications.buildPublication(e)}
			</div>`;
		},'');
		Publications.Dom.container.innerHTML += result;
		this.EventHandlers.clickButtons();
		this.EventHandlers.focusArea();
		this.EventHandlers.pressEnter();
	},

	buildPublication(data)
	{
		return ` <div class="publication">
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
	},

	buildComment(data)
	{
		var str = '';
		data.forEach(e=>
		{
			str += Publications.buildMessage(e);
			
		});
		return str;
	},

	buildMessage(e)
	{
		return ` <div class="comment">
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
	},

	buildArea()
	{
		return `<div class="inputcom">	
				<textarea class="area"></textarea><input type="button" value="Отправить" class="send">
		</div>`;
	},

	EventHandlers :
	{
		clickButtons()
		{
			Array.from(document.querySelectorAll('.post')).forEach(elem=>
			{
				elem.addEventListener('click', function(e)
				{
					Publications.EventHandlers.openComments(e, elem);
					Publications.EventHandlers.liked(e.target);
					Publications.EventHandlers.sendMessage(e.target, elem);

				});
			});
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
			if(e.classList.value.includes('butlik'))
			{
				e.classList.toggle('active');

				if(e.getAttribute('data-like') == 'true')
				{
					e.nextSibling.innerHTML--;
					e.removeAttribute('data-like');
					return;
				}

				if(e.getAttribute('data-like') == null)
				{
					e.nextSibling.innerHTML++;
					e.setAttribute('data-like', 'true');
					return;
				}
			}
		},

		sendMessage(e, x)
		{
			if(e.classList.value =='send')
			{
				var mes = e.previousSibling.value;
				const user = new Comments("User", "image/avatar/User.jpg", mes, 0);
				mes = '';

				const numb = x.children[1].children.length;

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
					const el = Publications.Dom.elem;
					const event = new Event('click', {bubbles: true});
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