var str = "344-85-68 <a>www.google.com</a> <b>ul.Filevskaya, d.13</b>  962-34-49 ul.Lybanskaya, d.67  8 897-30-42 www.yandex.by"

var phoneNumbers = /\d{3}\-\d{2}\-\d{2}/g;
console.log(str.match(phoneNumbers));

var webSite = /w{3}\.\w+\.\w+/g;
console.log(str.match(webSite));

var address = /ul\.\w+\,\sd\.\d+/gi;
console.log(str.match(address));

var html = /\<\/?\w+\>/gi;
console.log(str.match(html));