const audio = document.querySelector('audio');
const video = document.querySelector('video');

video.addEventListener('loadedmetadata', function()
{
	video.currentTime = localStorage.getItem('video') * 1;
});

audio.addEventListener('loadedmetadata', function()
{
	audio.currentTime = localStorage.getItem('audio') * 1;
});	

audio.addEventListener('timeupdate', function()
{
	localStorage.setItem('audio', audio.currentTime);
});

video.addEventListener('timeupdate', function()
{
	localStorage.setItem('video', video.currentTime);
});


var vid = false;
var aud = false;

video.addEventListener('play', function()
{
	vid = true;
});

video.addEventListener('pause', function()
{
	vid = false;
});

audio.addEventListener('play', function()
{
	aud = true;
});

audio.addEventListener('pause', function()
{
	aud = false;
});

document.addEventListener('visibilitychange', function()
{
	if(document.hidden)
	{
		if(vid)
		{
			video.pause();
			setTimeout(() => {vid = true}, 200);

		}
		if(aud)
		{
			audio.pause();
			setTimeout(() => {aud = true}, 200);
		}
	}
	else
	{
		if(vid)
		{
			video.play();
		}
		if(aud)
		{
			audio.play();
		}
	}
});