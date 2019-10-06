const audio = document.querySelector('audio');
const video = document.querySelector('video');

const loadPage = new Promise ((res, rej) => {
	const data = [localStorage.getItem('audio') * 1, localStorage.getItem('video') * 1];
	res(data);
	rej(err);
	
});
loadPage.then((data) => {
	audio.currentTime = data[0];
	video.currentTime = data[1];
}, (err) => {
	console.log(err);
});

window.addEventListener('load', function()
{
	setTimeout(() => {
		if(localStorage.getItem('audioPaused') == 'false')
		{	
			audio.play();
		};

		if(localStorage.getItem('videoPaused') == 'false')
		{
			video.play();
		};
	}, 100)
});

audio.addEventListener('timeupdate', function()
{
	localStorage.setItem('audio', audio.currentTime);
});

video.addEventListener('timeupdate', function()
{
	localStorage.setItem('video', video.currentTime);
});

document.addEventListener('visibilitychange', function()
{
	if(document.hidden)
	{
		if(!video.paused)
		{
			video.pause();
			localStorage.setItem('videoPaused', false);

		}
		if(!audio.paused)
		{
			audio.pause();
			localStorage.setItem('audioPaused', false);
		}
	}
	else
	{
		if(localStorage.getItem('videoPaused') == 'false')
		{
			video.play();
			localStorage.setItem('videoPaused', '');

		}
		if(localStorage.getItem('audioPaused') == 'false')
		{
			audio.play();
			localStorage.setItem('audioPaused', '');
		}
	}
});