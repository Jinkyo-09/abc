const button = document.querySelector('.open');
const top = document.querySelector('.top');
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const bottom = document.querySelector('.bottom');

button.addEventListener('click', () => {
	new Anime(
		top,
		{ width: '100%' },
		{
			duration: 1000,
			callback: () => {
				new Anime(
					right,
					{ height: '100%' },
					{
						duration: 1000,
						callback: () => {
							new Anime(
								bottom,
								{ width: '100%' },
								{
									duration: 1000,
									callback: () => {
										new Anime(left, { height: '100%' }, { duration: 1000 });
									},
								}
							);
						},
					}
				);
			},
		}
	);
});
