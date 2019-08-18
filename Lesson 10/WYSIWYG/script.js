var editor = document.getElementById('editor');
editor.contentEditable = true;

var panel = document.getElementById('panel');
panel.addEventListener('click', function(e)
{
	if(e.target.nodeName == 'INPUT')
	{
		if(e.target.id == 'createlink')
		{
			document.execCommand('createlink', false, '#');
			return;
		}
		if(e.target.id == 'insertimage')
		{
			document.execCommand('insertimage', false, scr="image/smile.png");
			return;
		}
		else
		{
			document.execCommand(e.target.id, false, null);
		}
	}
});

panel.addEventListener('change', function(e)
{
	document.execCommand(e.target.id, false, e.target.value);
});

var buttons = panel.children;
setInterval(function()
{
	for(var i = 0; i < buttons.length; i++)
	{
		var elem = buttons[i];

		var enabled = document.queryCommandEnabled(buttons[i].id);
		enabled ? elem.disabled = false : elem.disabled = true;

		var state = document.queryCommandState(buttons[i].id);
		state && !elem.disabled ? elem.classList.add('active'): elem.classList.remove('active');

	}
}, 50);

var contextInfo = document.getElementById('contextInfo');
editor.addEventListener('click', function(e)
{
	contextInfo.classList.add('open');
	contextInfo.style.left = e.clientX + 5 + 'px';
	contextInfo.style.top = e.clientY - contextInfo.clientHeight - 15 + 'px';	
});

editor.addEventListener('mouseout', function(e)
{
	contextInfo.classList.remove('open');
});

var infoSettings = ['bold', 'italic', 'underline', 'fontsize', 'fontname'];
setInterval(function()
{
	var info = '';
	for(var i = 0; i < infoSettings.length; i++)
	{
		var value = document.queryCommandValue(infoSettings[i]);
		if(i > 2)
		{
			info += value + ' ';
		}
		else if(i < 3 && value != 'false' )
		{
			info += infoSettings[i] + ' ';
		}
	}
	contextInfo.innerHTML = info;
}, 50);