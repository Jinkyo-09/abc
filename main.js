/*
  window.scrollY : 실제 브라우저 스크롤 시 스크롤되는 거리값 (동적)
  Dom.offsetTop : 전체 페이지에서 특정 DOM의 세로 위치값 (정적)
 */

const secs = document.querySelectorAll('section');
const h1 = secs[0].querySelector('h1');
const h1_2 = secs[1].querySelector('h1');
//baseLine은 박스의 스크롤 모션이 시작되는 위치값을 기존 박스영역에서 300만큼 위로 올림
const baseLine = window.innerHeight / 2;

window.addEventListener('scroll', () => {
	const scroll = window.scrollY;
	//박스의 실적용되는 스크롤 수치값은 반대로 300만큼 더해줘야함
	const initScroll = 0;

	h1.style.transform = `translateX(${scroll}px) rotate(${scroll}deg) scale(${
		1 + scroll / 300
	})`;
	h1.style.opacity = 1 - scroll / 600;

	let scroll_2 = 0;

	//스크롤거리값이 2번째 섹션영역에 들어가면 scroll_2에는 scroll적용되는 값을 담고
	//반대로 2번째 섹션영역을 벗어나면 scroll_2의 값을 0으로 초기화
	scroll >= secs[1].offsetTop + baseLine
		? (scroll_2 = scroll - secs[1].offsetTop - baseLine)
		: (scroll_2 = 0);

	h1_2.style.transform = `translateX(${scroll_2}px) rotate(${scroll_2}deg) scale(${
		1 + scroll_2 / 200
	})`;
	h1_2.style.opacity = 1 - scroll_2 / 400;
});
