var str = "344-85-68 <a> http(s)://www.google.com</a> <b>ul.Filevskaya, d.13</b>  962-34-49 ul.Lybanskaya, d.67  8 897-30-42 www.yandex.by random.si-te.com my-email@gmail.com; To: company22@c.org; Copy: alpha@b.de kinogo123.cc  a12 d c <h-> <-br> <h2>  <12h2> <meta-eta>"

var phoneNumbers = /\d{3}\-\d{2}\-\d{2}/g;
console.log(str.match(phoneNumbers));

var webSite = /[a-z0-9][a-z0-9\-\_\.]+[a-z0-9]\.[a-z]{2,10}/g;
console.log(str.match(webSite));

var address = /ul\.\w+\,\sd\.\d+/gi;
console.log(str.match(address));

var html1 = /\<\/?[a-z]+[a-z0-9\-\_]*\>/gi;
str2 = str.match(html1).join("");
var html2 = /\<\/?[a-z0-9\-\_]*[a-z0-9]+\>/gi;
console.log(str2.match(html2));
