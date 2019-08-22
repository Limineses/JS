var input = document.getElementById('input');
var ctrl = new Event('keydown')

input.addEventListener('keydown', function(e)
{
	var str = input.value;
	var char = e.key;
	var regNum = /\d/g;
	var regOther = /[a-zA-Z0-9\-\_\.\!\~\*\'\)\(\@]/g;

	if(e.getModifierState('Alt') == true)
	{
		input.readOnly = true;
	}
	else
	{
		input.readOnly = false;
	}
	if(char == 'Backspace' ||char == 'Delete')
	{
		e.preventDefault();
	}
	if(str == '' && regNum.test(char) == true)
	{
		e.preventDefault();
	}
	if(str[str.length-1] =='.' && char == '.')
	{
		e.preventDefault();
	}
	if(char == '@' && str.indexOf('@')!= -1)
	{
		e.preventDefault();
	}
	if(regOther.test(char) == false)
	{
		e.preventDefault();
	}
});

input.addEventListener('paste', function(e)
{
	e.preventDefault();
});

var remove = document.getElementById('remove');
remove.addEventListener('click', function()
{
	var arr = input.value.split('');
	arr.pop();
	input.value = arr.join('');
});