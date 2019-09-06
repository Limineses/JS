const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.strokeStyle = '#828282';
ctx.lineWidth = 3;

var startDraw = false;

document.addEventListener('mousedown', () => {startDraw = true; ctx.beginPath(); });
document.addEventListener('mouseup', () => startDraw = false);

document.addEventListener('mousemove', (e) => 
{
	if(startDraw)
	{
		ctx.lineTo(e.clientX-101, e.clientY-101);
		ctx.stroke();
	}
});