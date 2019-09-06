class Undated
{
	constructor()
	{
		this.list = new Set();
	}

	add(task)
	{
		this.list.add(task.name);
	}

	delete(task)
	{
		this.list.delete(task);
	}
}