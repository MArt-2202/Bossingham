import Swiper, { Navigation } from 'swiper';

export default function sliders() {
	if (
		document.querySelector('.landscaping-slider') &&
		document.querySelector('.landscaping-slider .swiper-wrapper')?.children.length
	) {
		new Swiper('.landscaping-slider', {
			modules: [Navigation],
			on: {
				init() {
					if (document.querySelector('.landscaping-slider-wrapper')) {
						document.querySelector('.landscaping-slider-wrapper').classList.remove('style-2');
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
				768: { slidesPerView: 4, spaceBetween: 30 },
				576: { slidesPerView: 3, spaceBetween: 20 },
				415: { slidesPerView: 2, spaceBetween: 20 },
				360: { slidesPerView: 2, spaceBetween: 15 },
				300: { slidesPerView: 1, spaceBetween: 15 },
			},
		});
	} else if (document.querySelector('.landscaping-slider-wrapper')) {
		document.querySelector('.landscaping-slider-wrapper').classList.remove('style-2');
	}
}
