const randomBook = document.querySelector(".random-book");
const randomNumber50 = Math.floor(Math.random() * 49); //난수

function randomBookFunc() {
  fetch("https://dapi.kakao.com/v3/search/book?query=이&size=50&", {
    method: "get",
    headers: { Authorization: `KakaoAK ${REST_API_KEY}` },
  })
    .then((response) => response.json())
    .then((data) => {
      randomBook.innerHTML = `
            <h1>오늘의 추천도서</h1>
            <img src="${data.documents[randomNumber50].thumbnail}" class="random-book-img">
            <div class="random-book-info">
                <h3 class="random-book-title">${data.documents[randomNumber50].title}</h3>
                <h5>${data.documents[randomNumber50].authors}</h5>
                <button class="random-book-btn">더 보기</button>
            </div>
            `;
    });
}
randomBookFunc();
