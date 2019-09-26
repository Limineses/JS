 $('.single-item').slick(
{
	infinite: true,
	dots: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	fade: true,
	autoplay: true,
	arrows: true,
	autoplaySpeed: 3000
});

$('body').click(function(e)
{
	if(e.target.id == 'move')
	{
		$('#accord').slideDown(200);
	}
	else
	{
		$('#accord').slideUp(200);

	}
});
$('.acc').hover(function(e)
{
	$(this).next().slideDown(200);
},
function(e)
{
	$(this).next().slideUp(200);
});