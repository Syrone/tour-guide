import { throttle } from '../functions/throttle';

const dropdowns = document.querySelectorAll('.dropdown')

dropdowns?.forEach((elem) => {
	const btn = elem.querySelector('.dropdown__btn'),
		content = elem.querySelector('.dropdown__content')

	function hideContent() {
		elem.classList.remove('is-show');
	}

	function adjustDropdownPosition() {
		const rect = content.getBoundingClientRect();
		const contentRight = rect.left + rect.width;

		const shouldInverse = contentRight > window.innerWidth;

		if (shouldInverse) {
			elem.classList.add('is-inverse');
		} else {
			elem.classList.remove('is-inverse');
		}
	}

	btn.addEventListener('click', () => {
		elem.classList.toggle('is-show')
		if (elem.classList.contains('is-show') && elem.classList.contains('is-inverse')) {
			elem.classList.remove('is-inverse');
		}
		adjustDropdownPosition()
	})

	document.addEventListener('click', (event) => {
		if (!elem.contains(event.target) && !event.target.classList.contains('vanilla-calendar-month') && !event.target.classList.contains('vanilla-calendar-months__month') && !event.target.classList.contains('vanilla-calendar-year') && !event.target.classList.contains('vanilla-calendar-years__year')) {
			hideContent();
		}
	});

	document.addEventListener('keydown', (event) => {
		if (event.key === 'Escape' && elem.classList.contains('is-show')) {
			hideContent()
		}
	});

	let throttledAdjust = throttle(adjustDropdownPosition)

	adjustDropdownPosition()
	window.addEventListener('resize', throttledAdjust);
})