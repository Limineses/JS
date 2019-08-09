var people =
[
    ['Ivan','25 years', '176 meters','midle'],
    [ 'Petr','21 years', '165 meters','high'],
    ['Nikolai', '38 years', '181 meters', 'low'],
    ['Viktoria', '27 years', '177 meters', 'midle'],
    ['Maria', '17 years', '155 meters', 'low'],
    ['Jon', '25 years', '167 meters', 'high']
]

var table = document.createElement('table');
document.body.appendChild(table);

var tbody = document.createElement('tbody');
table.appendChild(tbody);

for (var i = 0; i < people.length; i++)
{
    var tr = document.createElement('tr');
    var str = '';
    for(var j = 0; j < people[i].length; j++)
    {
        str += '<td>' + people[i][j] + '</td>';
    }
    str += '<td><input type="button" value="click"/></td>';
    tbody.appendChild(tr);
    tr.innerHTML = str;
    
    var but = tr.children[4];
    var name = people[i][0];
    (function (el)
    {
        but.addEventListener('click', function(){
        alert(el);
        });
    })(name);
    
}
