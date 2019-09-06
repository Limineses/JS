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
			if(e.date == ''){ undated.add(e) }
			else
			{ 
				const task = new Task(e.name, e.priority, e.date);
				plan.add(task); 
			}
		});	
		this.Tests();
	}
	,Tests()
	{
		console.log(plan.list);		
		console.log(plan.today());	
		const task1 = new Task('платежи', '5', '07.09.2019');
		const task2 = new Task('тренировка', '3', '06.09.2019');
		plan.add(task1, task2);
		console.log(plan.list);
		console.log(plan.today());
		console.log(plan.tommorrow());
		console.log(plan.priority());

		console.log('__'.repeat(50));
		console.log(undated.list);
		var task3 = new Task('уборка','','');
		undated.add(task3);
		console.log(undated.list);
		undated.delete('книга');
		console.log(undated.list);
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