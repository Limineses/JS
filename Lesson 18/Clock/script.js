const Clock = 
{
	init()
	{
		const canvas = document.getElementById('canvas');
		ctx = canvas.getContext('2d');

		ctx.lineCap = 'round';
		ctx.translate(150, 150);

		setInterval(this.goClock, 1000);
	}

	,getTurnCurrentTime()
	{
		const d = new Date();

		const s = d.getSeconds();
		const m = d.getMinutes();
		var h = d.getHours();
		h > 12 ? h -= 12 : h = h;
		const timeInSeconds = h * 60 * 60 + m * 60 + s;
		const resultTurn = timeInSeconds * (2 * Math.PI / 43200);
		return resultTurn;
	}

	,Draw:
	{
		clock()
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
			const numbers = ['I','II','III','IV','V','VI','VII','VIII','IX','X', 'XI','XII'];
			numbers.forEach(e=>
			{
				ctx.rotate(Math.PI / 6)
				ctx.strokeText(e, 0, -100);
			});
		}
		,secondsArrow(turn)
		{
			ctx.lineWidth = 1;
			ctx.strokeStyle = '#FF0000';
			ctx.rotate(turn * 12 * 60);
			ctx.beginPath();
			ctx.moveTo(0, 0);
			ctx.lineTo(0, -90);
			ctx.stroke();
		}

		,minutesArrow(turn)
		{
			ctx.lineWidth = 4;
			ctx.strokeStyle = '#090909';
			ctx.rotate(turn * 12);
			ctx.beginPath();
			ctx.moveTo(0, 0);
			ctx.lineTo(0, -80);
			ctx.stroke();
		}

		,hoursArrow(turn)
		{
			ctx.lineWidth = 7;
			ctx.rotate(turn);
			ctx.beginPath();
			ctx.moveTo(0, 0);
			ctx.lineTo(0, -60);
			ctx.stroke();
		}
	}
	,goClock()
	{
		ctx.restore();
		ctx.clearRect(-150, -150, 300, 300);
		Clock.Draw.clock ();
		
		const turn = Clock.getTurnCurrentTime();

		Clock.Draw.secondsArrow(turn);

		ctx.restore();
		Clock.Draw.minutesArrow(turn);

		ctx.restore();
		Clock.Draw.hoursArrow(turn);	
	}
}

Clock.init();