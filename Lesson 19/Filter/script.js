const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

var imageData;
var len;

const filters = document.getElementById('filters');
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
	for(var i = 0; i < len; i+=4)
	{
		for(var j = 0; j < 3; j++)
		{
			imageData.data[i+j] = 255 - imageData.data[i+j];
		}
	}
	ctx.putImageData(imageData, 0, 0);
}

function blackWhite()
{
	for(var i = 0; i < len; i+=4)
	{	
		imageData.data[i+1] = 0;
		imageData.data[i+2] = 0;
	}
	ctx.putImageData(imageData, 0, 0);
}

function myFilter()
{
	for(var i = 0; i < len; i+=4)
	{	
		imageData.data[i] += 10;
		imageData.data[i+1] += 40;
		imageData.data[i+2] += 60;
	}
	ctx.putImageData(imageData, 0, 0);
}

canvas.addEventListener('dragover', function(e)
{
	e.preventDefault();
});

canvas.addEventListener('drop', function(e)
{
	e.preventDefault();

	const file = e.dataTransfer.files[0];
	const reader = new FileReader();
	reader.onload = function()
	{
		const img = new Image();
		img.src = this.result;
		img.onload = function()
		{
			ctx.drawImage(img, 0, 0);
			imageData = ctx.getImageData(0, 0, 1000, 500);
			len = imageData.data.length;
		}		
	}
	reader.readAsDataURL(file);
});