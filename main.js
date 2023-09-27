const box = document.querySelector('article');

box.addEventListener('click', () => {
	new Anime(
		box, //선택자
		{ left: 600, backgroundColor: '#ff5a75' }, //모션 적용할 속성값
		{
			duration: 1000,
			easeType: 'linear',
			callback: () => {
				new Anime(box, { top: 300, background: '#add8e6' });
			},
		}
	);
});
