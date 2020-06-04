$(document).ready(function(){

			$('.drop').click(function() {
				    $(this).children('ul').slideToggle();
				  });
				
		$('.slider2').slick({
						arrows: true,
					  infinite: true,
					  slidesToShow: 3,
					  slidesToScroll: 1,
					nextArrow: $('.next6'),
				prevArrow: $('.prev6'),
				responsive: [
					{
	                        breakpoint: 600,
	                        settings: {
	                            slidesToShow: 1,
	                             slidesToScroll: 1,
	                             infinite: true,
	                        }
	                    },
	                    {
	                        breakpoint: 900,
	                        settings: {
	                            slidesToShow: 2,
	                             slidesToScroll: 1,
	                             infinite: true,
	                        }
	                    },
	                ]
				});
		 $('.slider-for').slick({
			  slidesToShow: 1,
			  slidesToScroll: 1,
			  arrows: true,
			  fade: true,
			  asNavFor: '.slider-nav',
			  nextArrow: $('.next5'),
				prevArrow: $('.prev5'),
			});
			$('.slider-nav').slick({
			  slidesToShow: 3,
			  slidesToScroll: 1,
			  asNavFor: '.slider-for',
			  dots: false,
			  vertical: true,
			  centerMode: true,
			  focusOnSelect: true,
			  adaptiveHeight: true,
			  arrows: true,
			  nextArrow: $('.next2'),
				prevArrow: $('.prev2'),
			});

		$('.multiple-items2').slick({
				arrows: true,
				infinite: true,
				slidesToShow: 4,
				slidesToScroll: 1,
				autoplay: false,
				nextArrow: $('.next3'),
				prevArrow: $('.prev3'),
				responsive: [
					{
	                        breakpoint: 600,
	                        settings: {
	                        	arrows: false,
	                            slidesToShow: 1.8,
	                             slidesToScroll: 1,
	                             infinite: true,

	                        }
	                    },
	                    {
	                        breakpoint: 900,
	                        settings: {
	                            slidesToShow: 3,
	                             slidesToScroll: 1,
	                             infinite: true,
	                        }
	                    },
	                ]
				});
		$('.multiple-items3').slick({
				arrows: true,
				infinite: true,
				slidesToShow: 2,
				slidesToScroll: 1,
				autoplay: false,
				nextArrow: $('.next4'),
				prevArrow: $('.prev4'),
				responsive: [
					{
	                        breakpoint: 600,
	                        settings: {
	                        	arrows: false,
	                            slidesToShow: 1.8,
	                             slidesToScroll: 1,
	                             infinite: true,

	                        }
	                    },
	                    {
	                        breakpoint: 900,
	                        settings: {
	                            slidesToShow: 2,
	                             slidesToScroll: 1,
	                             infinite: true,
	                        }
	                    },
	                ]
				});

		$('.multiple-items').slick({
				arrows: true,
				infinite: true,
				slidesToShow: 4,
				slidesToScroll: 1,
				autoplay: false,
				nextArrow: $('.next'),
				prevArrow: $('.prev'),
				responsive: [
					{
	                        breakpoint: 600,
	                        settings: {
	                        	arrows: false,
	                            slidesToShow: 1.8,
	                             slidesToScroll: 1,
	                             infinite: true,

	                        }
	                    },
	                    {
	                        breakpoint: 900,
	                        settings: {
	                            slidesToShow: 2,
	                             slidesToScroll: 1,
	                             infinite: true,
	                        }
	                    },
	                ]
				});
				
  /*mobile nav*/
  $('.hamburger').click(function() {
  $('.hamburger').toggleClass('active');
  $('.navbar-menu').toggleClass('active');
});
 $('.damskie').click(function() {
				    $(this).children('ul').slideToggle();
				  });

 $('.damskie_item').click(function() {
				    $(this).children('ul').slideToggle();
				  });
		});	