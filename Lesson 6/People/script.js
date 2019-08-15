var people =
[
    {name:'Ivan', age:'25 years', growth: '176 meters', education:'midle'},
    {name:'Petr',age:'21 years', growth:'165 meters',education:'high'},
    {name:'Nikolai', age:'38 years', growth:'181 meters', education:'low'},
    {name:'Viktoria', age:'27 years', growth:'177 meters', education:'midle'},
    {name:'Maria', age:'17 years', growth:'155 meters', education:'low'},
    {name:'Jon', age:'25 years', growth:'167 meters', education:'high'}
]

var table = document.createElement('table');
document.body.appendChild(table);

var tbody = document.createElement('tbody');
table.appendChild(tbody);

for (var i = 0; i < people.length; i++)
{
    var tr = document.createElement('tr');
    var str = '';
    for(var j in people[i])
    {
        str += '<td>' + people[i][j] + '</td>';
    }
    str += '<td><input type="button" value="click"/></td>';
    tbody.appendChild(tr);
    tr.innerHTML = str;
    
    var but = tr.children[4];
    var name = people[i].name;
    (function (el)
    {
        but.addEventListener('click', function(){
        alert(el);
        });
    })(name);    
}