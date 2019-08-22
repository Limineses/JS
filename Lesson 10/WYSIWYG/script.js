var editor = document.getElementById('editor');
editor.contentEditable = true;

var panel = document.getElementById('panel');

var buttonsPanel = ['bold','italic','underline', 'removeformat', 'createlink', 'unlink', 'backcolor', 'forecolor', 'insertorderedlist', 'insertunorderedlist', 'insertimage'];
var valuesButtons = ['B', 'I', 'U', 'Del', 'Link', 'Unlink', '', '', '1', '.', ':)'];

var string ='';
for(var i = 0; i < buttonsPanel.length; i++)
{
	if(buttonsPanel[i] == 'backcolor' || buttonsPanel[i] == 'forecolor')
	{
		string += '<input type="color" id="'+buttonsPanel[i]+'">';
	}
	else
	{
		string += '<input type="button" value="'+valuesButtons[i]+'" id="'+buttonsPanel[i]+'">';
	}
}
panel.innerHTML = string;

//fontsize
string = '<select name="" id="fontsize">';
for(var i = 1; i < 8; i++)
{
	string += '<option value="'+i+'" id="'+i+'">'+i+'</option>';
}
string += '</select>';
panel.innerHTML += string;

//fontname
string = '<select name="" id="fontname">';
var valuesFontname = ['serif', 'sans-serif', 'monospace'];
for(var i = 0; i < 3; i++)
{
	string += '<option value="'+valuesFontname[i]+'" id="'+i+1+'">'+valuesFontname[i]+'</option>';
}
string += '</select>';
panel.innerHTML += string;

panel.addEventListener('click', function(e)
{
	if(e.target.nodeName == 'INPUT')
	{
		if(e.target.id == 'createlink')
		{
			var link = prompt('Enter address: ')
			if(link)
			{
				document.execCommand('createlink', false, link);
			}			
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