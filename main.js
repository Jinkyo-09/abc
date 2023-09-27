const box = document.querySelector('article');

box.addEventListener('click', () => {
	new Anime(
		box, //선택자
		{ left: 300, backgroundColor: '#ff5a75', width: 400 }, //모션 적용할 속성값
		{ duration: 1000, easeType: 'ease1' }
	);
	//duration:시간, easeType:가속도,callback:첫번째 모션이 끝나고 이어서 실행할 콜백 함수
});
