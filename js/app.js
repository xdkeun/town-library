const REST_API_KEY = "93965c2d87d826b6a2c82e922835057c";

const love = document.querySelector(".love");
const randomBookImg = document.querySelector(".random-book-img");
const bookTitle = document.querySelector(".book-title");
const bookAuthor = document.querySelector(".book-author");

love.addEventListener("mouseover", loveBook);

function loveBook() {
  fetch("https://dapi.kakao.com/v3/search/book?query=사랑&size=50&", {
    method: "get",
    headers: { Authorization: `KakaoAK ${REST_API_KEY}` },
  })
    .then((response) => response.json())
    .then((data) => {
      randomBookImg.src = `${data.documents[49].thumbnail}`;
      bookTitle.innerHTML = `${data.documents[49].title}`;
      bookAuthor.innerHTML = `${data.documents[49].authors}`;
      console.log(data);
    });
}

const react = document.querySelector(".react");
react.addEventListener("mouseover", reactBook);

function reactBook() {
  fetch("https://dapi.kakao.com/v3/search/book?query=리액트&size=50&", {
    method: "get",
    headers: { Authorization: `KakaoAK ${REST_API_KEY}` },
  })
    .then((response) => response.json())
    .then((data) => {
      randomBookImg.src = `${data.documents[1].thumbnail}`;
      bookTitle.innerHTML = `${data.documents[1].title}`;
      bookAuthor.innerHTML = `${data.documents[1].authors}`;
      console.log(data);
    });
}
