var minutes = setInterval(function()
{
    var d = new Date;
    console.log(1440 - (d.getHours() * 60 + d.getMinutes()) );
}, 60000);