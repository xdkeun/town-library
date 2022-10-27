function searchBookFunc() {
  searchValue = document.getElementById("search").value;
  searchBookThumbnail = document.querySelector(".search-book-thumbnail");
  searchBookTitle = document.querySelector(".search-book-title");
  searchBookSecondTitle = document.querySelector(".search-book-second-title");
  searchBookAuthor = document.querySelector(".search-book-author");
  searchBookPublisher = document.querySelector(".search-book-publisher");
  searchBookPrice = document.querySelector(".search-book-price");
  searchBookStory = document.querySelector(".search-book-story");
  searchBookUrl = document.querySelector(".search-book-url");
  fetch(`https://dapi.kakao.com/v3/search/book?query=${searchValue}&size=1&`, {
    method: "get",
    headers: { Authorization: `KakaoAK ${REST_API_KEY}` },
  })
    .then((response) => response.json())
    .then((data) => {
      searchBookThumbnail.src = `${data.documents[0].thumbnail}`;
      searchBookTitle.innerHTML = `${data.documents[0].title}`;
      searchBookSecondTitle.innerHTML = `<button class="modal-button-design">제목</button>${data.documents[0].title}`;
      searchBookAuthor.innerHTML = `<button class="modal-button-design">저자</button></div>${data.documents[0].authors}`;
      searchBookPublisher.innerHTML = `<button class="modal-button-design">출판사</button>${data.documents[0].publisher}`;
      searchBookPrice.innerHTML = `<button class="modal-button-design">가격</button>${data.documents[0].price}`;
      searchBookStory.innerHTML = `${data.documents[0].contents}`;
      searchBookUrl.innerHTML = `<a target="_blank" href="${data.documents[0].url}">더 보기</a>`;
    });
}

function modalFunc() {
  const searchBookModalOpenButton = document.querySelector(
    "#search-book-modal-open"
  );
  const searchBookModal = document.querySelector(".search-book-modal");
  const searchBookModalOverlay = document.querySelector(
    ".search-book-modal-overlay"
  );
  const searchBookModalCloseButton = document.querySelector(
    ".search-book-modal-close-button"
  );

  const searchBookOpenModal = () => {
    searchBookModal.classList.remove("hidden");
  };
  const searchBookCloseModal = () => {
    searchBookModal.classList.add("hidden");
  };

  searchBookModalOpenButton.addEventListener("click", searchBookOpenModal);
  searchBookModalCloseButton.addEventListener("click", searchBookCloseModal);
  searchBookModalOverlay.addEventListener("click", searchBookCloseModal);
}

modalFunc();
