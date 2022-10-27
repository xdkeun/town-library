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
                <button class="random-book-btn" id="random-book-modal-open">더 보기</button>
                <div class="random-book-modal hidden">
                <div class="random-book-modal-overlay"></div>

                <div class="modal-content">
                <div class="modal-content-info">
                    <div class="modal-left-content">
                        <img src="${data.documents[randomNumber50].thumbnail}">
                        <div>${data.documents[randomNumber50].title}</div>
                    </div>
                    <div class="modal-right-content">
                        <div><button class="modal-button-design">제목</button>${data.documents[randomNumber50].title}</div>
                        <div><button class="modal-button-design">저자</button>${data.documents[randomNumber50].authors}</div>
                        <div><button class="modal-button-design">출판사</button>${data.documents[randomNumber50].publisher}</div>
                        <div><button class="modal-button-design">가격</button>${data.documents[randomNumber50].price}원</div>
                    </div>
                </div>
                <div class="modal-content-bottom-info">
                    <div class="modal-content-bottom-story">${data.documents[randomNumber50].contents}</div>
                    <div class="modal-content-bottom-button">
                    <div class="modal-content-bottom-flex">
                    <button class="modal-more-button"><a target="_blank" href="${data.documents[randomNumber50].url}">더 보기</a></button>
                    <button class="random-book-modal-close-button">X</button>
                    </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
            </div>
            `;

      const randomBookModalOpenButton = document.querySelector(
        "#random-book-modal-open"
      );
      const randomBookModal = document.querySelector(".random-book-modal");
      const randomBookModalOverlay = document.querySelector(
        ".random-book-modal-overlay"
      );
      const randomBookModalCloseButton = document.querySelector(
        ".random-book-modal-close-button"
      );

      const randomBookOpenModal = () => {
        randomBookModal.classList.remove("hidden");
      };
      const randomBookCloseModal = () => {
        randomBookModal.classList.add("hidden");
      };

      randomBookModalOpenButton.addEventListener("click", randomBookOpenModal);
      randomBookModalCloseButton.addEventListener(
        "click",
        randomBookCloseModal
      );
      randomBookModalOverlay.addEventListener("click", randomBookCloseModal);
    });
}
randomBookFunc();
