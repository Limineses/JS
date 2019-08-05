var scrollPage = setInterval(function()
{
    scrollBy(0, 5);
    if(scrollY == document.documentElement.scrollHeight - window.innerHeight)
    {
        clearInterval(scrollPage);        
    }
}, 20);
