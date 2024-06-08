import { getHeaderHeight } from '../functions/header-height';
import { throttle } from '../functions/throttle';

window.onload = function () {
	getHeaderHeight()

	let throttledHeader= throttle(getHeaderHeight)
	window.addEventListener('resize', throttledHeader);
}