class Undated
{
	constructor()
	{
		this.list = new Set();
	}

	add(name)
	{
		this.list.add(name);
	}

	delete(name)
	{
		this.list.delete(name);
	}
}