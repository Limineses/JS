function artifact(n, h, a, d, minD, maxD, s)
{
	this.name = n;
	this.health = h;
	this.attack = a;
	this.defense = d;
	this.minDmg = minD;
	this.maxDmg = maxD;
	this.speed = s;
}
var boots = new artifact('bootsOfSpeed', 20, 0, 5, 0, 0, 10);
var sphere = new artifact('sphereOfLife', 100, 0, 0, 0, 0, 0);
var hammer = new artifact('mithrilHammer', 0, 10, 0, 5, 5, 0);
var armor = new artifact('heavyArmor', 50, 0, 20, 0, 0, -2);

function creature(art, n, h, a, d, minD, maxD, s)
{
	this.artifact = art;
	this.name = n;
	this.health = h + stat(this.artifact, 'health');
	this.attack = a + stat(this.artifact, 'attack');
	this.defense = d + stat(this.artifact, 'defense');
	this.minDmg = minD + stat(this.artifact, 'minDmg');
	this.maxDmg = maxD + stat(this.artifact, 'maxDmg');
	this.speed = s + stat(this.artifact, 'speed');
	this.fullHP = h + stat(this.artifact, 'health');
}

function stat(art, elem)
{
	var value = 0;
	for(var i = 0; i < art.length; i++)
	{
		value += art[i][elem];
	}
	return value;
}

var knight = new creature([armor, sphere], 'knight', 100, 80, 0, 10, 50, 8);
var skeleton = new creature([hammer], 'skeleton', 150, 50, 10, 5, 20, 10);
var crusader = new creature([boots], 'crusader', 500, 30, 50, 5, 10, 1);
var griffon = new creature([], 'griffon', 250, 80, 30, 15, 20, 9);

creature.prototype.hit = function()
{
	var randomDmg = this.minDmg + (this.maxDmg - this.minDmg) * Math.random();
	var finalDmg = randomDmg + randomDmg * 0.01 * this.attack;
	return finalDmg;
}
creature.prototype.info = function()
{
	if(this.health > 0){return true;}
	else{return false;}
}

var teamA = [skeleton, knight];
var teamB = [griffon, crusader];
var allCreature = [skeleton, knight, griffon, crusader];

allCreature.sort(function(a, b)
{
	return b.speed - a.speed;
});

var enemy = [];
var t1 = checkTeam(teamA);
var t2 = checkTeam(teamB);
var i = 0;
var infoBox = document.getElementById('infoBox');
var str = '';
var obj;
function go()
{
	if(allCreature[i].info() == true)
	{
		if(teamA.indexOf(allCreature[i]) != -1)
		{
			enemy = teamB;
		}
		else
		{
			enemy = teamA;
		}
	}
	else
	{
		i++;
		if(i == allCreature.length){i = 0;}
		return;
	}
	var flag = false;
	while(flag == false)
	{
		var rand = Math.ceil(enemy.length*Math.random()) - 1;
		var randomEnemy = enemy[rand];
		if(randomEnemy.info() == true){flag = true;}
	}

	var creatureDmg = allCreature[i].hit();
	var dmg = (creatureDmg - creatureDmg * 0.01 * randomEnemy.defense).toFixed(1);
	randomEnemy.health -= dmg;

	fight(allCreature[i].name, randomEnemy.name, dmg, 'red');
	hp(randomEnemy.name, randomEnemy.health, randomEnemy.fullHP);

	setTimeout(function()
	{
		if(randomEnemy.info())
		{
			var enemyDmg = randomEnemy.hit();
			var reflectDmg = (enemyDmg - enemyDmg * 0.01 * allCreature[i].defense).toFixed(1);
			allCreature[i].health -= reflectDmg;

			fight(randomEnemy.name, allCreature[i].name, reflectDmg, 'green');
			hp(allCreature[i].name, allCreature[i].health, allCreature[i].fullHP);

			if(allCreature[i].info() == false)
			{
				death(allCreature[i].name);
			}
		}
		else
		{
			death(randomEnemy.name);
		}
		t1 = checkTeam(teamA);
		t2 = checkTeam(teamB);
		if(t1 == 0)
		{
			clearInterval(interval);
			str = '<p class="win">Команда 2 победила!</p>';
			infoBox.innerHTML = str + infoBox.innerHTML;
		}
		else if(t2 == 0)
		{
			clearInterval(interval);
			str = '<p class="win">Команда 1 победила!</p>';
			infoBox.innerHTML = str + infoBox.innerHTML;
		}
		i++;
		if(i == allCreature.length){i = 0;}
	}, 2000);
}

var interval = setInterval(go, 4000);

function death(name)
{
	obj = document.getElementById(name);
	str = '<span class="mes dead">' + name +' погибает</span>';
	infoBox.innerHTML = str + infoBox.innerHTML;
	obj.style['display'] = 'none';
}
function fight(x, y, d, color)
{
	str = '<span class="mes"><span class="'+color+'">'+x+'</span> атакует <span class="'+color+'">'+y+'</span> на <span class="'+color+'">'+d+'</span> урона</span>';
	infoBox.innerHTML = str + infoBox.innerHTML;
}

function hp (elem, h, f)
{
	var el = document.getElementById(elem+'HP');
	el.style['width'] = Math.trunc((h / f) * 100)+'px';
}

function checkTeam(team)
{
	var count = 0;
	team.forEach(function(elem)
	{
		if(elem.info()){count++}
	});
	return count;
}
var audio = document.getElementById("audio");
var audioBut = document.getElementById("audioBut");
var aud = true;
audioBut.addEventListener('click', function()
{
	audioBut.classList.toggle('active');
	if(aud)
	{
		audio.play();
		audio.volume = 0.3;
		aud =!aud;
	}
	else
	{
		audio.pause();
		aud =!aud;
	}
});