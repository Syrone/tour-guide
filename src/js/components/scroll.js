const scrollX = document.querySelectorAll('.scroll-x')

let isDragging = false

scrollX?.forEach((elem) => {
	const dragging = (e) => {
		if (!isDragging) return
		elem.scrollLeft -= e.movementX
		elem.classList.add('cursor-dragging')

		if (e.target.matches('[draggable]')) {
			e.target.addEventListener('mousedown', dragStop);
      e.target.addEventListener('mouseup', dragStop);
      e.target.addEventListener('mouseleave', dragStop);
    }
	}

	const dragStop = () => {
		isDragging = false
		elem.classList.remove('cursor-dragging')
	}
	
	elem.addEventListener('mousedown', () => isDragging = true, elem.classList.add('cursor-dragging'))
	elem.addEventListener('mousemove', dragging)
  elem.addEventListener('mouseup', dragStop);
  elem.addEventListener('mouseleave', dragStop);
})
