const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.strokeStyle = '#06FF00';
ctx.lineWidth = 3;
ctx.fillStyle = 'red';

ctx.shadowColor = 'black';
ctx.shadowBlur = 5;
ctx.shadowOffsetX = 5;
ctx.shadowOffsetY = 5;

ctx.fillRect(50, 50, 200, 400);
ctx.strokeRect(220, 60, 180, 355);

ctx.save();

ctx.beginPath();
ctx.scale(1, 0.5);
ctx.arc(550,670,100, 0, 2*Math.PI);
ctx.stroke();

ctx.fillStyle = 'aquamarine';

ctx.beginPath();
ctx.moveTo(880, 300);
ctx.arc(780, 300, 100, 0, 2*Math.PI);
ctx.fill();

ctx.restore();

const img = new Image();
img.crossOrigin = "Anonymous";
img.src = 'https://cfl.dropboxstatic.com/static/images/index/rebrand/co_create/desktop/dropbox_digital_desktop_01-vflTDaJ3U.jpg';

function getDataImage()
{
	return ctx.getImageData(0, 0, 1000, 500);
}

img.onload = function()
{
	ctx.drawImage(img, 500, 0);
}


var filters = document.getElementById('filters');
filters.addEventListener('click', function(e)
{
	switch(e.target.id)
	{
		case 'filter1':
			blackWhite();
			break;
		case 'filter2':
			negative();
			break;
		case 'filter3':
			myFilter();
			break;
	}
});


function negative()
{
	const imageData = getDataImage();
	for(let i = 0; i < imageData.data.length; i+=4)
	{
		for(let j = 0; j < 3; j++)
		{
			imageData.data[i+j] = 255 - imageData.data[i+j];
		}
	}
	ctx.putImageData(imageData, 0, 0);
}

function blackWhite()
{
	const imageData = getDataImage();
	for(let i = 0; i < imageData.data.length; i+=4)
	{	
		imageData.data[i+1] = 0;
		imageData.data[i+2] = 0;
	}
	ctx.putImageData(imageData, 0, 0);
}

function myFilter()
{
	const imageData = getDataImage();
	for(let i = 0; i < imageData.data.length; i++)
	{	
		if(imageData.data[i] <= 155) imageData.data[i]+= 100;
	}
	ctx.putImageData(imageData, 0, 0);
}