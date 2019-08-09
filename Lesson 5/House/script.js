var array =
[
    {image:'<img src="https://st03.kakprosto.ru/images/article/2012/3/10/1_52551178d228952551178d22c7.jpg" class="img">', address:"г. Славянское, ул. Верхние Поля, дом 98", floors:"14 этажей", area:"1380 метров квадратных", people:"475 жильцов"},
    
    {image:'<img src="http://tld.perm.ru/data/data6/comers/antonuk5house/p1.jpg" class="img">', address:"г. Ялуторовск, ул. Новоконюшная, дом 65", floors:"5 этажей", area:"1750 метров квадратных", people:"600 жильцов"},
    
    {image:'<img src="https://look.com.ua/pic/201209/1920x1200/look.com.ua-25313.jpg" class="img">', address:"г. Истра, ул. Новая Дорога, дом 77", floors:"2 этажа", area:"150 метров квадратных", people:"30 жильцов"}
]

for(var i = 0; i < array.length; i++)
{
    var div = document.createElement("div");
    var ul = document.createElement("ul");
    var str = "";
    for( var j in array[i])
    {
        str += "<li>" + array[i][j] + "</li>";
    }
    document.body.appendChild(div);
    div.appendChild(ul);
    ul.innerHTML = str;    
}