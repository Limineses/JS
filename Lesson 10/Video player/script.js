var contolPanel	 = document.getElementById('contolPanel	');
var audio = document.getElementById('audio');
var range = document.getElementById('range');
var time = document.getElementById('time');
var loop = document.getElementById('loop');

var swapForVolume = true;
var swapForLoop = true;
audio.addEventListener('loadedmetadata', function()
{
	range.max = Math.trunc(audio.duration);

	controlPanel.addEventListener('click', function(e)
	{
		switch(e.target.id)
		{
			case 'play':
				audio.play();
				break;
			case 'pause':
				audio.pause();
				break;
			case 'stop':
				audio.load();
				break;
			case 'volume':
				audio.muted = swapForVolume;
				swapForVolume =!swapForVolume;
				break;
			case 'slow':
				audio.playbackRate -= 0.5;
				break;
			case 'fast':
				audio.playbackRate += 0.5;
				break;
			case 'loop':
				audio.loop = swapForLoop;
				swapForLoop =!swapForLoop;
				loop.classList.toggle('loopActive');
				break;
		}
	});
});

range.addEventListener('change', function()
{
	audio.currentTime = range.value;
});

var volumeRange = document.getElementById('volumeRange');
volumeRange.addEventListener('change', function()
{
	audio.volume = volumeRange.value/100;
});

var volume = document.getElementById('volume');
volume.addEventListener('mouseover', function()
{
	setTimeout(function()
	{
		volumeRange.style['display'] = 'block';
	}, 700);	
});

window.addEventListener('mousemove', function(e)
{
	if(e.target.id!='volume' && e.target.id!='vol' && e.target.id!='volumeRange')
	{
		setTimeout(function()
		{
			volumeRange.style['display'] = 'none';
		}, 500);	
	}
});

setInterval(function()
{
	range.value = Math.trunc(audio.currentTime);
	time.innerHTML = timeFormat(audio.currentTime) + ' / ' + timeFormat(audio.duration);
},500);

function timeFormat (x)
{
	var minutes = Math.trunc(x / 60);
	var seconds = Math.trunc(x - minutes*60);
	minutes = minutes > 9 ? minutes : '0' + minutes;
	seconds = seconds > 9 ? seconds : '0' + seconds;
	return minutes +':' + seconds;
}