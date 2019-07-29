var scrollPage = setInterval(function()
{
    scrollBy(0, 1);
    if(scrollY == document.documentElement.scrollHeight - window.innerHeight)
    {
        clearInterval(scrollPage);        
    }
}, 1);
