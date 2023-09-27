/*
  window.scrollY : 실제 브라우저 스크롤 시 스크롤되는 거리값 (동적)
  Dom.offsetTop : 전체 페이지에서 특정 DOM의 세로 위치값 (정적)
 */

const secs = document.querySelectorAll('section');
const h1 = secs[0].querySelector('h1');
const h1_2 = secs[1].querySelector('h1');
//baseLine은 박스의 스크롤 모션이 시작되는 위치값을 기존 박스영역에서 300만큼 위로 올림
const baseLine = -300;

window.addEventListener('scroll', () => {
	const scroll = window.scrollY;
	//박스의 실적용되는 스크롤 수치값은 반대로 300만큼 더해줘야함
	const scroll_2 = scroll - secs[1].offsetTop - baseLine;
	const initScroll = 0;

	h1.style.transform = `translateX(${scroll}px) rotate(${scroll}deg) scale(${
		1 + scroll / 300
	})`;
	h1.style.opacity = 1 - scroll / 600;

	if (scroll >= secs[1].offsetTop + baseLine) {
		h1_2.style.transform = `translateX(${scroll_2}px) rotate(${scroll_2}deg) scale(${
			1 + scroll_2 / 200
		})`;
	} else {
		//원래위치로 스크롤시 조금씩 오차범위가 발생하기 때문에 원래값으로 강제 보정 처리
		h1_2.style.transform = `translateX(${initScroll}px) rotate(${initScroll}deg) scale(${
			1 + initScroll / 200
		})`;
	}
});
