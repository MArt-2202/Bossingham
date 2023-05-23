'use strict';

import debounce from './modules/debounce';
import modal from './modules/modal';
import blocksStyles from './modules/blocksStyles';
import toggleContent from './modules/toggleContent';
import blockPosition from './modules/blockPosition';
import sliders from './modules/sliders';

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
	sliders();
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
