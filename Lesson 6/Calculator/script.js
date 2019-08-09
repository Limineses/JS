var display = document.getElementById('display');
var symbol = '';
var sum = 0;
var number = 0;
var memory = 0;

var num1 = document.getElementById('num1');
num1.addEventListener('click', function()
{
	display.innerHTML += "1";
	outputFormat();
});

var num2 = document.getElementById('num2');
num2.addEventListener('click', function()
{
	display.innerHTML += "2";
	outputFormat();

});

var num3 = document.getElementById('num3');
num3.addEventListener('click', function()
{
	display.innerHTML += "3";
	outputFormat();
});

var num4 = document.getElementById('num4');
num4.addEventListener('click', function()
{
	display.innerHTML += "4";
	outputFormat();
});

var num5 = document.getElementById('num5');
num5.addEventListener('click', function()
{
	display.innerHTML += "5";
	outputFormat();
});

var num6 = document.getElementById('num6');
num6.addEventListener('click', function()
{
	display.innerHTML += "6";
	outputFormat();
});

var num7 = document.getElementById('num7');
num7.addEventListener('click', function()
{
	display.innerHTML += "7";
	outputFormat();
});

var num8 = document.getElementById('num8');
num8.addEventListener('click', function()
{
	display.innerHTML += "8";
	outputFormat();
});
var num9 = document.getElementById('num9');
num9.addEventListener('click', function()
{
	display.innerHTML += "9";
	outputFormat();
});

var num0 = document.getElementById('num0');
num0.addEventListener('click', function()
{
	display.innerHTML += "0";
	outputFormat();
});

var point = document.getElementById('point');
point.addEventListener('click', function()
{
	display.innerHTML += ".";
});

var equally = document.getElementById('equally');
equally.addEventListener('click', function()
{
	number = getNumber();
	checkLastStep();
	symbol = '';
	display.innerHTML = "";
	outputSum(sum);	
});

var plus = document.getElementById('plus');
plus.addEventListener('click', function()
{
	number = getNumber();
	checkLastStep();
	symbol = "+";
	display.innerHTML = "";
});

var minus = document.getElementById('minus');
minus.addEventListener('click', function()
{
	number = getNumber();
	checkLastStep();
	symbol = "-";
	display.innerHTML = "";
});

var multiplication = document.getElementById('multiplication');
multiplication.addEventListener('click', function()
{
	number = getNumber();
	checkLastStep();
	symbol = "*";
	display.innerHTML = "";
});

var cleanDisplay = document.getElementById('cleanDisplay');
cleanDisplay.addEventListener('click', function()
{
	number = 0;
	symbol = "";
	sum = 0;
	display.innerHTML = "";
});

var division = document.getElementById('division');
division.addEventListener('click', function()
{
	number = getNumber();
	checkLastStep();
	symbol = "/";
	display.innerHTML = "";
});

var sqrt = document.getElementById('sqrt');
sqrt.addEventListener('click', function()
{
	number = getNumber();
	checkLastStep();
	display.innerHTML = "";
	sum = Math.pow(sum, 0.5);	
	outputSum(sum);
});

var deleteOneSymbol = document.getElementById('deleteOneSymbol');
deleteOneSymbol.addEventListener('click', function()
{
	var string = display.innerHTML;
	var stringWithOneSymbol = "";
	display.innerHTML = "";
	if(string == "Infinity")
	{
		return;
	}
	for(var i = 0; i < string.length-1; i++)
	{
		stringWithOneSymbol += string[i];
	}	

	var arr = stringWithOneSymbol.split("");
	arr = deleteCommas(arr);
	display.innerHTML = addCommas(arr).join("");

});

var memoryOutput = document.getElementById('memoryOutput');
memoryOutput.addEventListener('click', function()
{
	outputSum(memory);
});

var memoryClean = document.getElementById('memoryClean');
memoryClean.addEventListener('click', function()
{
	memory = 0;
});

var memoryMinus = document.getElementById('memoryMinus');
memoryMinus.addEventListener('click', function()
{
	number = getNumber();
	memory -= number;
});

var memoryPlus = document.getElementById('memoryPlus');
memoryPlus.addEventListener('click', function()
{
	number = getNumber();
	memory += number;
});

function getNumber()
{
	var string = display.innerHTML;
	arr = string.split("");
	var arr = deleteCommas(arr);
	var str = arr.join("");
	num = +str;
	return num; 
}
function checkLastStep()
{
	if(display.innerHTML == "")
	{
		return;
	}
	if(symbol == '+')
	{
		sum += number;			
	}
	if(symbol == '-')
	{
		sum -= number;			
	}
	if(symbol == '*')
	{
		sum *= number;			
	}
	if(symbol == '/')
	{
		sum /= number;
	}
	if(symbol == '')
	{
		sum = number;
	}
}
function outputSum(elem)
{
	if(elem == 'Infinity')
	{
		display.innerHTML = elem;
		return;
	}
	if(Number.isInteger(elem))
	{
		elem = ""+elem;
		var sumArray = elem.split("");
		sumArray = addCommas(sumArray);
		display.innerHTML = sumArray.join("");
	}
	else
	{
		elem = elem.toFixed(3);
		elem = ""+elem;
		var sumArray = elem.split("");
		sumArray = addCommas(sumArray);
		display.innerHTML = sumArray.join("");
	}
}

function outputFormat()
{
	var arr = display.innerHTML.split("");
	arr = deleteCommas(arr);
	arr = addCommas(arr);	
	display.innerHTML = arr.join("");
}

function deleteCommas(arr)
{
	var clearArray = [];
	arr.forEach(function(elem)
	{
		if(elem != ",")
		{
			clearArray.push(elem);
		}
	});
	return clearArray;
}

function addCommas(arr)
{
	var xxx = [];
	var count = 0;
	for(var i = arr.length - 1 ; i >= 0; i--)
	{
		if(arr[i] == ".")
		{
			var clear = xxx;
			xxx = [];
			clear.forEach(function(elem)
			{
				if(elem != ",")
				{
					xxx.push(elem);
				}
			});
			xxx.unshift(arr[i]);
			count = 0;
			continue;
		}
    	if(count % 3 == 0 && count != 0)
	    {
	        xxx.unshift(",");
	    }
	    xxx.unshift(arr[i]);
	    count++;
	}
	return xxx;
}
