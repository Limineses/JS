class Plan 
{	
	constructor()
	{
		this.list = [];
	}

	iter()
	{
		for(var i of this.list)
		{
			console.log(i);
		}
	}

	today()	
	{
		return this.date(0);
	}

	tommorrow()
	{
		return this.date(1);
	}

	add(...task)
	{
		task.forEach(e => this.list.push(e));
	}

	delete(name)
	{
		var arr = [];
		this.list.forEach((e) =>
		{
			if(e.name != name){arr.push(e);};			
		});
		this.list = arr;
		return this.list;
	}

	priority()
	{
		return [...this.list].sort((a, b) => a.priority - b.priority);
	}

	date(x)
	{
		var dt = new Date();
		dt.setDate(dt.getDate() + x);

		var d = dt.getDate();
		d > 9 ? d = d : d = `0${d}`;
		var m = dt.getMonth() + 1;
		m > 9 ? m = m : m = `0${m}`;
		var y = dt.getYear() + 1900;

		var date = `${d}.${m}.${y}`;

		var arr = this.list;
		var filtArr = arr.filter(function(elem)
		{
			return elem.date == date;
		});

		return filtArr;
	}
}