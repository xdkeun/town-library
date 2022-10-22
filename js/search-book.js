const searchBook = document.querySelector(".search-book");
const changegogo = document.querySelector(".changegogo");

function searchBookFunc() {
  fetch("https://dapi.kakao.com/v3/search/book?query=이&size=50&", {
    method: "get",
    headers: { Authorization: `KakaoAK ${REST_API_KEY}` },
  })
  .then((response) => response.json())
  .then((data) => {
    changegogo.innerHTML = "이거로 바꿔봐";

    const searchBookModalOpenButton = document.querySelector("#search-book-modal-open");
    const searchBookModal = document.querySelector(".search-book-modal");
    const searchBookModalOverlay = document.querySelector(".search-book-modal-overlay");
    const searchBookModalCloseButton = document.querySelector(".search-book-modal-close-button");

    const searchBookOpenModal = () => {
      searchBookModal.classList.remove("hidden");
    };
    const searchBookCloseModal = () => {
      searchBookModal.classList.add("hidden");
    };

    searchBookModalOpenButton.addEventListener("click", searchBookOpenModal);
    searchBookModalCloseButton.addEventListener("click", searchBookCloseModal);
    searchBookModalOverlay.addEventListener("click", searchBookCloseModal);
  });
}

searchBookFunc();