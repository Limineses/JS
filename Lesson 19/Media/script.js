const audio = document.querySelector('audio');
const video = document.querySelector('video');

async function loadStorage()
{
	const audTime = await localStorage.getItem('audio') * 1;
	audio.currentTime = audTime;
	const vidTime = await localStorage.getItem('video') * 1;
	video.currentTime = vidTime;
}
loadStorage();

document.addEventListener('mousemove', function()
{
	if(localStorage.getItem('audioPlay') == 'true')
	{
		audio.play()
	};
	if(localStorage.getItem('videoPlay') == 'true')
	{
		video.play()
	};
})

audio.addEventListener('timeupdate', function()
{
	localStorage.setItem('audio', audio.currentTime);
});

video.addEventListener('timeupdate', function()
{
	localStorage.setItem('video', video.currentTime);
});


video.addEventListener('play', function()
{
	localStorage.setItem('videoPlay', true);
});

video.addEventListener('pause', function()
{
	localStorage.setItem('videoPlay', false);
});

audio.addEventListener('play', function()
{
	localStorage.setItem('audioPlay', true);
});

audio.addEventListener('pause', function()
{
	localStorage.setItem('audioPlay', false);
});

document.addEventListener('visibilitychange', function()
{
	if(document.hidden)
	{
		if(localStorage.getItem('videoPlay') == 'true')
		{
			video.pause();
			setTimeout(() => {localStorage.setItem('videoPlay', true)}, 200);

		}
		if(localStorage.getItem('audioPlay') == 'true')
		{
			audio.pause();
			setTimeout(() => {localStorage.setItem('audioPlay', true)}, 200);
		}
	}
	else
	{
		if(localStorage.getItem('videoPlay') == 'true')
		{
			video.play();
		}
		if(localStorage.getItem('audioPlay') == 'true')
		{
			audio.play();
		}
	}
});