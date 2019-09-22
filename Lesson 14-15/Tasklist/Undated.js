class Undated
{
	constructor()
	{
		this.list = new Set();
	}

	add(task)
	{
		this.list.add(task);
	}

	delete(name)
	{
		this.list.forEach( e=>
		{
			if(e.name == name)
			{
				this.list.delete(e);
			}
		})
	}
}