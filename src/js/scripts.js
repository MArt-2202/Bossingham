'use strict';

import debounce from './modules/debounce';
import modal from './modules/modal';
import blocksStyles from './modules/blocksStyles';
import toggleContent from './modules/toggleContent';
import blockPosition from './modules/blockPosition';
import lightbox from './modules/lightbox';
import sendFormData from './modules/sendFormData';
import scrollAnimateNodes from './modules/scrollAnimateNodes';

if ('ontouchstart' in document.documentElement) {
	document.body.classList.add('touchdevice');
}

function isMobile(agent) {
	if (agent === void 0) agent = navigator.userAgent;

	return /Android|iPhone|iPad|iPod/i.test(agent);
}

if (isMobile()) {
	document.body.classList.remove('desktop-user-agent');
	document.body.classList.add('mobile-user-agent');
} else {
	document.body.classList.remove('mobile-user-agent');
	document.body.classList.add('desktop-user-agent');
}

document.addEventListener('DOMContentLoaded', () => {
	scrollAnimateNodes({
		node: 'h1, h2',
		animatedClass: 'slideInLeft',
	});
	scrollAnimateNodes({
		node: '.animate-3 > div',
		animatedClass: 'slideInUp',
	});
	scrollAnimateNodes({
		node: 'main p, .top-section__add .btn, .top-section__add .modal-btn, .top-section__img, .about-us__img, .breadcrumbs li, .info__btn',
		animatedClass: 'fadeIn',
	});
	lightbox({
		container: '#info__lightbox',
		selector: '.info-slider__item',
		plugins: [lgZoom],
		speed: 500,
		zoom: true,
		download: false,
		mode: 'lg-fade',
	});
	lightbox({
		container: '#our-works__lightbox',
		selector: '.our-works-slider__item',
		plugins: [lgZoom],
		speed: 500,
		zoom: true,
		download: false,
		mode: 'lg-fade',
	});
	sendFormData({
		closeBtn: '',
		hiddenNodes: '[data-modal="modal-1"] .modal__info',
		hasFormMessage: true,
		formMessageNode: '[data-modal="modal-1"] .form__message',
		formWrapper: '#consultation-form',
		formSubmitBtn: '#consultation-form__submit',
		dataAttr: '[data-key]',
		requiredSelector: '[required]',
		requiredClass: 'has-required',
		dataModal: 'modal-1',
	});
	toggleContent();
	debounce(function () {
		blockPosition();
		blocksStyles();
	}, 200);
	modal();
}); // END READY

window.addEventListener('resize', () => {
	debounce(function () {
		blockPosition();
	}, 200);
});

window.addEventListener('load', () => {});
