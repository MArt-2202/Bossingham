import Swiper, { Navigation, EffectFade } from 'swiper';

export default function sliders() {
	// LANDSCAPING SLIDER
	if (document.querySelector('.landscaping-slider')) {
		if (document.querySelector('.landscaping-slider .swiper-wrapper')?.children.length) {
			new Swiper('.landscaping-slider', {
				modules: [Navigation],
				on: {
					init() {
						if (document.querySelector('.landscaping-slider-wrapper')) {
							document
								.querySelector('.landscaping-slider-wrapper')
								.classList.remove('style-2');
						}
					},
				},
				loop: true,
				slidesPerView: 5,
				spaceBetween: 25,
				forceToAxis: true,
				speed: 600,
				navigation: {
					nextEl: '.landscaping-slider__btn--next',
					prevEl: '.landscaping-slider__btn--prev',
				},
				breakpoints: {
					1230: { slidesPerView: 5, spaceBetween: 25 },
					1024: { slidesPerView: 5, spaceBetween: 25 },
					768: { slidesPerView: 4, spaceBetween: 25 },
					576: { slidesPerView: 3, spaceBetween: 25 },
					415: { slidesPerView: 2, spaceBetween: 20 },
					360: { slidesPerView: 2, spaceBetween: 20 },
					300: { slidesPerView: 2, spaceBetween: 15 },
				},
			});
		} else if (document.querySelector('.landscaping-slider-wrapper')) {
			document.querySelector('.landscaping-slider-wrapper').classList.remove('style-2');
		}
	}

	// OUR WORKS SLIDER
	if (
		document.body.classList.contains('desktop-user-agent') &&
		document.querySelector('.our-works-slider')
	) {
		if (document.querySelector('.our-works-slider .swiper-wrapper')?.children.length) {
			new Swiper('.our-works-slider', {
				modules: [Navigation],
				on: {
					init() {
						document.querySelector('.our-works-slider-wrapper').classList.remove('style-2');
					},
				},
				loop: true,
				slidesPerView: 3,
				spaceBetween: 25,
				forceToAxis: true,
				speed: 600,
				navigation: {
					nextEl: '.our-works-slider__btn--next',
					prevEl: '.our-works-slider__btn--prev',
				},
			});
		} else if (document.querySelector('.our-works-slider-wrapper')) {
			document.querySelector('.our-works-slider-wrapper').classList.remove('style-2');
		}
	}
	if (
		document.body.classList.contains('mobile-user-agent') &&
		document.querySelector('.our-works-slider-wrapper')
	) {
		document.querySelector('.our-works-slider-wrapper').classList.remove('style-2');
	}

	// INFO SLIDER
	if (document.querySelector('.info-slider')) {
		if (document.querySelector('.info-slider .swiper-wrapper').children.length) {
			if (
				[...document.querySelectorAll('.info-slider-wrapper .swiper-wrapper .swiper-slide')]
					?.length < 2
			) {
				if (document.querySelector('.info-slider-wrapper')) {
					document.querySelector('.info-slider-wrapper').classList.remove('style-2');
					document
						.querySelectorAll('.info-slider-wrapper .slider-btn')
						.forEach((btn) => (btn.style.display = 'none'));
				}
			} else {
				new Swiper('.info-slider', {
					modules: [Navigation, EffectFade],
					on: {
						init() {
							document
								.querySelectorAll('.info-slider-wrapper .slider-btn')
								.forEach((btn) => (btn.style.display = ''));
							if (document.querySelector('.info-slider-wrapper')) {
								document.querySelector('.info-slider-wrapper').classList.remove('style-2');
							}
						},
					},
					effect: 'fade',
					fadeEffect: {
						crossFade: true,
					},
					setWrapperSize: true,
					loop: true,
					navigation: {
						prevEl: '.info-slider__btn--prev',
						nextEl: '.info-slider__btn--next',
					},
				});
			}
		} else if (document.querySelector('.info-slider-wrapper')) {
			document.querySelector('.info-slider-wrapper').classList.remove('style-2');
		}
	}
}
