/////////Slider////////
$(document).ready(function(){
	$('.next').on('click',function(){
		var currentImg = $('.active');
		var nextImg = currentImg.next();

		if(nextImg.length){
			currentImg.removeClass('active').css('z-index', -10);
			nextImg.addClass('active').css('z-index', 10);
		}
	});

	$('.prev').on('click',function(){
		var currentImg = $('.active');
		var prevImg = currentImg.prev();

		if(prevImg.length){
			currentImg.removeClass('active').css('z-index', -10);
			prevImg.addClass('active').css('z-index', 10);
		}
	});

//////Scroll////////
	var documentElem = $(document),
		nav = $('nav'),
		lastScrollTop = 0;

		documentElem.on('scroll',function(){
			var currentScrollTop = $(this).scrollTop();

			if(currentScrollTop > lastScrollTop) nav.addClass('hidden');
			else nav.removeClass('hidden');
			lastScrollTop = currentScrollTop;
		});


//////Hover text animation///


    $('.item-animation-1').hover(
         function(){ $(this).addClass('.animated pulse') },
         function(){ $(this).removeClass('.animated pulse') }
    )

});

