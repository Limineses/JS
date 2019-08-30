var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

ctx.lineCap = 'round';
ctx.translate(150, 150);

var d = new Date();

var s = d.getSeconds();
var m = d.getMinutes();
var h = d.getHours();
h > 12 ? h -= 12 : h = h;

var timeInSeconds = h * 60 * 60 + m * 60 + s;
var turn = timeInSeconds * (2 * Math.PI / 43200);


drawClock ();

function drawClock ()
{
	ctx.save();
	ctx.save();
	ctx.save();

	ctx.strokeStyle = '#696969';
	ctx.lineWidth = 20;
	ctx.beginPath();
	ctx.arc(0, 0, 130, 0, 7);
	ctx.stroke();

	ctx.lineWidth = 10;
	ctx.strokeStyle = '#000000';
	ctx.beginPath();
	ctx.moveTo(0, 0);
	ctx.arc(0, 0, 0, 0, 7);
	ctx.stroke();

	ctx.lineWidth = 2;
	ctx.font = '15px Arial';
	ctx.textAlign = 'center';
	var numbers = ['I','II','III','IV','V','VI','VII','VIII','IX','X', 'XI','XII'];
	for(var i = 0; i < 12; i++)
	{
		ctx.rotate(Math.PI / 6)
		ctx.strokeText(numbers[i], 0, -100);
	}
}

setInterval(goClock, 1000);

function goClock()
{
	ctx.restore();
	ctx.clearRect(-150, -150, 300, 300);
	drawClock ();
	turn += 2 * Math.PI / 43200;

	seconds();

	ctx.restore();
	minutes();

	ctx.restore();
	hours();	
}

function seconds ()
{
	ctx.lineWidth = 1;
	ctx.strokeStyle = '#FF0000';
	ctx.rotate(turn * 12 * 60);
	ctx.beginPath();
	ctx.moveTo(0, 0);
	ctx.lineTo(0, -90);
	ctx.stroke();
}

function minutes ()
{
	ctx.lineWidth = 4;
	ctx.strokeStyle = '#090909';
	ctx.rotate(turn * 12);
	ctx.beginPath();
	ctx.moveTo(0, 0);
	ctx.lineTo(0, -80);
	ctx.stroke();
}

function hours ()
{
	ctx.lineWidth = 7;
	ctx.rotate(turn);
	ctx.beginPath();
	ctx.moveTo(0, 0);
	ctx.lineTo(0, -60);
	ctx.stroke();
}