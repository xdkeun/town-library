const REST_API_KEY = "93965c2d87d826b6a2c82e922835057c";
const randomNumber = Math.floor(Math.random()*30); //난수
const randomBookImg = document.querySelector(".random-book-img");
const bookTitle = document.querySelector(".book-title");
const bookAuthor = document.querySelector(".book-author");

const love = document.querySelector(".love");
love.addEventListener("mouseover", loveBook);
function loveBook() {
  fetch("https://dapi.kakao.com/v3/search/book?query=사랑&size=50&", {
    method: "get",
    headers: { Authorization: `KakaoAK ${REST_API_KEY}` },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);      
      randomBookImg.src = `${data.documents[randomNumber].thumbnail}`;
      bookTitle.innerHTML = `${data.documents[randomNumber].title}`;
      bookAuthor.innerHTML = `${data.documents[randomNumber].authors}`;
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
      randomBookImg.src = `${data.documents[randomNumber].thumbnail}`;
      bookTitle.innerHTML = `${data.documents[randomNumber].title}`;
      bookAuthor.innerHTML = `${data.documents[randomNumber].authors}`;
    });
}
