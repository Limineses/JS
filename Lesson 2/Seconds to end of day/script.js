var d1 = new Date();
var hours = d1.getHours();
var minutes = d1.getMinutes();
var seconds = d1.getSeconds();
var secondsInDay = 24 * 60 * 60;
var secondsPassed = hours * 3600 + minutes * 60 + seconds;
alert(secondsInDay - secondsPassed);