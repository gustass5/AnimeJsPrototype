const paths = document.querySelectorAll('path');
paths.forEach(path => {
	const offset = anime.setDashoffset(path);
	path.setAttribute('stroke-dashoffset', offset);
	anime({
		targets: paths,
		strokeDashoffset: [offset, 0],
		stroke: '#03f7eb',
		duration: anime.random(2000, 4000),
		loop: true,
		direction: 'alternate',
		easing: 'easeInOutSine',
		autoplay: true
	});
});
