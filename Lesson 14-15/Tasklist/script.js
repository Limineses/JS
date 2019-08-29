var PlanTask =
{
	init : async function()
	{
		var data = await this.Data.load('data.json');
		this.onDataLoaded(data);
	}
	,onDataLoaded(data)
	{
		plan = new Plan();
		undated = new Undated();
		data.forEach(e =>
		{
			if(e.date == ''){ undated.list.add(e.name) }
			else{ plan.list.push(e) }
		});
		
	}
	,Data:
	{
		load(path)
		{
			return new Promise(function(resolve, reject)
			{
				var xhr = new XMLHttpRequest;
				xhr.open('GET', path, true);
				xhr.onload = function()
				{
					try
					{
						var d = JSON.parse(this.responseText);
						resolve(d);
					}
					catch(err)
					{
						reject(err);
					}
				}
				xhr.onerror = function()
				{
					reject('Error while loading data')
				}
				xhr.send(null);
			});
		}
	}

}

PlanTask.init();