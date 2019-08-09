var input = document.getElementById('input');

input.addEventListener('keydown', function(e)
{
	var str = input.value;
	var char = e.key;
	var regNum = /\d/g;
	var regOther = /[a-zA-Z0-9\-\_\.\!\~\*\'\)\(\@]/g;
	if(str == '' && regNum.test(char) == true)
	{
		e.preventDefault();
	}
	if(str[str.length-1] =='.'&& (char) == '.')
	{
		e.preventDefault();
	}
	if(str[str.length-1] =='@'&& (char) == '@')
	{
		e.preventDefault();
	}
	if(regOther.test(char) == false)
	{
		e.preventDefault();
	}

})