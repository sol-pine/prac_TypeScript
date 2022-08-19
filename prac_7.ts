// html 조작 narrowing

// <h4 id="title">hi</h4>
let title = document.querySelector("#title");

// 1. if 조건문 이용
if (title != null) {
  title.innerHTML = "hello";
}

// 2. instanceof 연산자 이용
if (title instanceof Element) {
  // title instanceof Element === true
  title.innerHTML = "hello";
}

// 3. 옵셔널 체이닝 ? 이용
if (title?.innerHTML != undefined) {
  title.innerHTML = "hello";
}

// 4. as 로 속이기 (별로 좋은 방법 아님! 에러 체크 못함)
let title2 = document.querySelector("#title") as Element;
title2.innerHTML = "hello";

// <a href="naver.com" class="link">링크</a>
let link = document.querySelector(".link");
if (link instanceof HTMLAnchorElement) {
  link.href = "https://kakao.com";
}

// <button id="button">버튼</button>
let button = document.querySelector("#button");
button?.addEventListener("click", function () {
  console.log("버튼 클릭");
});

// <img id="image" src="test.jpg" />
let image = document.querySelector("#image");
if (image instanceof HTMLImageElement) {
  image.src = "new.jpg";
}

// <a class="naver" href="naver.com">링크</a>
// <a class="naver" href="naver.com">링크</a>
// <a class="naver" href="naver.com">링크</a>
let naver = document.querySelectorAll(".naver");
naver.forEach((a) => {
  if (a instanceof HTMLAnchorElement) {
    a.href = "https://kakao.com";
  }
});
