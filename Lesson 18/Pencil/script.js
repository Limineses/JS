const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.strokeStyle = '#828282';
ctx.lineWidth = 3;

let startDraw = false;

canvas.addEventListener('mousedown', function()
{
	startDraw = true; 
	ctx.beginPath(); 
});

document.addEventListener('mouseup', function() 
{
	startDraw = false;
});

canvas.addEventListener('mousemove', function(e) 
{
	if(startDraw)
	{
		ctx.lineTo(e.clientX-101, e.clientY-101);
		ctx.stroke();
	}
});