var array = 
[
   {name : "Belarus", area: 207600, people: 9475600, phone: "+375", image: '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Flag_of_Belarus.svg/160px-Flag_of_Belarus.svg.png">' },
   {name : "Russia", area: 17125191, people: 146781095, phone: "7", image: '<img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/160px-Flag_of_Russia.svg.png">' },
    {name : "Germany", area: 357408 , people: 82175684, phone: "+49", image: '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/160px-Flag_of_Germany.svg.png">' }
];
array.sort(function(a, b) 
{    
    return b.area/b.people - a.area/a.people;
});

var table = document.createElement("table");
document.body.appendChild(table);

var thead = document.createElement("thead");
table.appendChild(thead);
thead.innerHTML = "<tr><td>Страна</td><td>Площадь</td><td>Население</td><td>Код</td><td>Флаг</td></tr>"

var tbody = document.createElement("tbody");
table.appendChild(tbody);

for (var i = 0; i < array.length; i++)
{
    var tr = document.createElement("tr");
    var str = "";
    for(var j in array[i])
    {
        str += "<td>" + array[i][j].toLocaleString() + "</td>";
    }
    tbody.appendChild(tr);
    tr.innerHTML = str;
}
