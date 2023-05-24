export default function modal() {
	let modalIsVisible = false;

	if (document.querySelector('.modal-btn')) {
		document.querySelectorAll('.modal-btn').forEach((el) => {
			el.addEventListener('click', function (e) {
				e.preventDefault();

				if (el.dataset.modalBtn !== '') {
					const targetModal = document.querySelector(`[data-modal="${el.dataset.modalBtn}"]`);

					targetModal.classList.remove('dn');

					if (targetModal.querySelector('.form__message')) {
						targetModal.querySelector('.form__message').style.display = '';
					}
					if (targetModal.querySelector('.hidden')) {
						targetModal
							.querySelectorAll('.hidden')
							.forEach((el) => el.classList.remove('hidden'));
					}
					modalIsVisible = true;
					setTimeout(() => {
						targetModal.classList.add('show');
					}, 50);

					document.body.style.paddingRight =
						window.innerWidth - document.documentElement.clientWidth + 'px';
					document.body.style.overflowY = 'hidden';

					if (modalIsVisible) {
						window.addEventListener('keydown', function (e) {
							if ((e?.key && e.key === 'Escape') || (e?.code && e.code === 'Escape')) {
								targetModal.classList.remove('show');
								setTimeout(() => {
									targetModal.classList.add('dn');
								}, 200);

								document.body.style.overflowY = '';
								document.body.style.paddingRight = '';
							}
						});
					} else {
						return;
					}
				}
			});
		});
	}

	if (document.querySelector('.modal-overlay')) {
		document.querySelectorAll('.modal-overlay').forEach((el) => {
			el.addEventListener('click', function (e) {
				const target = e.target;

				e.stopPropagation();

				if (!target.closest('.modal__content') || target.closest('.modal__close')) {
					if (document.querySelector('.modal-overlay.show .form__message')) {
						document.querySelector('.modal-overlay.show .form__message').style.display = '';
					}
					if (document.querySelector('.modal-overlay.show .hidden')) {
						document
							.querySelectorAll('.modal-overlay.show .hidden')
							.forEach((el) => el.classList.remove('hidden'));
					}

					modalIsVisible = false;
					el.classList.remove('show');

					setTimeout(() => {
						el.classList.add('dn');
					}, 200);

					document.body.style.overflowY = '';
					document.body.style.paddingRight = '';
				}
			});
		});
	}
}
