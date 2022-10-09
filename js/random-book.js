const REST_API_KEY = "93965c2d87d826b6a2c82e922835057c";
const randomNumber = Math.floor(Math.random()*30); //난수
const randomBookImg = document.querySelectorAll(".random-book-img");
const bookTitle = document.querySelectorAll(".book-title");
const bookAuthor = document.querySelectorAll(".book-author");
const moreUrl = document.querySelectorAll(".more-url");
const modalBookImg = document.querySelectorAll(".modal-book-img");
const modalBookTitle = document.querySelectorAll(".modal-book-title");
const modalBookPrice = document.querySelectorAll(".modal-book-price");
const modalBookStory = document.querySelectorAll(".modal-book-story");


function book() {
  fetch("https://dapi.kakao.com/v3/search/book?query=이&size=50&", {
    method: "get",
    headers: { Authorization: `KakaoAK ${REST_API_KEY}` },
  })
    .then((response) => response.json())
    .then((data) => {
      for(var i = 0; i < 5; i++){      
      randomBookImg[i].src = `${data.documents[randomNumber+i].thumbnail}`;
      bookTitle[i].innerHTML = `${data.documents[randomNumber+i].title}`;
      bookAuthor[i].innerHTML = `${data.documents[randomNumber+i].authors}`;
      moreUrl[i].href = `${data.documents[randomNumber+i].url}`;
      modalBookImg[i].src = `${data.documents[randomNumber+i].thumbnail}`;
      modalBookTitle[i].innerHTML = `제목 : ${data.documents[randomNumber+i].title} <sub>저자 : ${data.documents[randomNumber+i].authors}</sub>`;
      modalBookPrice[i].innerHTML = `가격 : ${data.documents[randomNumber+i].price}`;
      modalBookStory[i].innerHTML = `${data.documents[randomNumber+i].contents}`;
    }
    });
}
book(); //처음 홈페이지 켰을 때 랜덤한 책 출력

const economy = document.querySelector(".economy");
economy.addEventListener("mouseover", economyBook);
function economyBook() {
  fetch("https://dapi.kakao.com/v3/search/book?query=경제&size=50&", {
    method: "get",
    headers: { Authorization: `KakaoAK ${REST_API_KEY}` },
  })
    .then((response) => response.json())
    .then((data) => {
      for(var i = 0; i < 5; i++){     
        randomBookImg[i].src = `${data.documents[randomNumber+i].thumbnail}`;
        bookTitle[i].innerHTML = `${data.documents[randomNumber+i].title}`;
        bookAuthor[i].innerHTML = `${data.documents[randomNumber+i].authors}`;
        moreUrl[i].href = `${data.documents[randomNumber+i].url}`;
        modalBookImg[i].src = `${data.documents[randomNumber+i].thumbnail}`;
        modalBookTitle[i].innerHTML = `제목 : ${data.documents[randomNumber+i].title} <sub>저자 : ${data.documents[randomNumber+i].authors}</sub>`;
        modalBookPrice[i].innerHTML = `가격 : ${data.documents[randomNumber+i].price}`;
        modalBookStory[i].innerHTML = `${data.documents[randomNumber+i].contents}`;
    }
    });
}

const stock = document.querySelector(".stock");
stock.addEventListener("mouseover", stockBook);
function stockBook() {
  fetch("https://dapi.kakao.com/v3/search/book?query=주식&size=50&", {
    method: "get",
    headers: { Authorization: `KakaoAK ${REST_API_KEY}` },
  })
    .then((response) => response.json())
    .then((data) => {
      for(var i = 0; i < 5; i++){     
        randomBookImg[i].src = `${data.documents[randomNumber+i].thumbnail}`;
        bookTitle[i].innerHTML = `${data.documents[randomNumber+i].title}`;
        bookAuthor[i].innerHTML = `${data.documents[randomNumber+i].authors}`;
        moreUrl[i].href = `${data.documents[randomNumber+i].url}`;
        modalBookImg[i].src = `${data.documents[randomNumber+i].thumbnail}`;
        modalBookTitle[i].innerHTML = `제목 : ${data.documents[randomNumber+i].title} <sub>저자 : ${data.documents[randomNumber+i].authors}</sub>`;
        modalBookPrice[i].innerHTML = `가격 : ${data.documents[randomNumber+i].price}`;
        modalBookStory[i].innerHTML = `${data.documents[randomNumber+i].contents}`;
    }
    });
}


const love = document.querySelector(".love");
love.addEventListener("mouseover", loveBook);
function loveBook() {
  fetch("https://dapi.kakao.com/v3/search/book?query=사랑&size=50&", {
    method: "get",
    headers: { Authorization: `KakaoAK ${REST_API_KEY}` },
  })
    .then((response) => response.json())
    .then((data) => {
      for(var i = 0; i < 5; i++){     
        randomBookImg[i].src = `${data.documents[randomNumber+i].thumbnail}`;
        bookTitle[i].innerHTML = `${data.documents[randomNumber+i].title}`;
        bookAuthor[i].innerHTML = `${data.documents[randomNumber+i].authors}`;
        moreUrl[i].href = `${data.documents[randomNumber+i].url}`;
        modalBookImg[i].src = `${data.documents[randomNumber+i].thumbnail}`;
        modalBookTitle[i].innerHTML = `제목 : ${data.documents[randomNumber+i].title} <sub>저자 : ${data.documents[randomNumber+i].authors}</sub>`;
        modalBookPrice[i].innerHTML = `가격 : ${data.documents[randomNumber+i].price}`;
        modalBookStory[i].innerHTML = `${data.documents[randomNumber+i].contents}`;
    }
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
      for(var i = 0; i < 5; i++){     
        randomBookImg[i].src = `${data.documents[randomNumber+i].thumbnail}`;
        bookTitle[i].innerHTML = `${data.documents[randomNumber+i].title}`;
        bookAuthor[i].innerHTML = `${data.documents[randomNumber+i].authors}`;
        moreUrl[i].href = `${data.documents[randomNumber+i].url}`;
        modalBookImg[i].src = `${data.documents[randomNumber+i].thumbnail}`;
        modalBookTitle[i].innerHTML = `제목 : ${data.documents[randomNumber+i].title} <sub>저자 : ${data.documents[randomNumber+i].authors}</sub>`;
        modalBookPrice[i].innerHTML = `가격 : ${data.documents[randomNumber+i].price}`;
        modalBookStory[i].innerHTML = `${data.documents[randomNumber+i].contents}`;
    }
    });
}

const math = document.querySelector(".math");
math.addEventListener("mouseover", mathBook);
function mathBook() {
  fetch("https://dapi.kakao.com/v3/search/book?query=수학&size=50&", {
    method: "get",
    headers: { Authorization: `KakaoAK ${REST_API_KEY}` },
  })
    .then((response) => response.json())
    .then((data) => {
      for(var i = 0; i < 5; i++){     
        randomBookImg[i].src = `${data.documents[randomNumber+i].thumbnail}`;
        bookTitle[i].innerHTML = `${data.documents[randomNumber+i].title}`;
        bookAuthor[i].innerHTML = `${data.documents[randomNumber+i].authors}`;
        moreUrl[i].href = `${data.documents[randomNumber+i].url}`;
        modalBookImg[i].src = `${data.documents[randomNumber+i].thumbnail}`;
        modalBookTitle[i].innerHTML = `제목 : ${data.documents[randomNumber+i].title} <sub>저자 : ${data.documents[randomNumber+i].authors}</sub>`;
        modalBookPrice[i].innerHTML = `가격 : ${data.documents[randomNumber+i].price}`;
        modalBookStory[i].innerHTML = `${data.documents[randomNumber+i].contents}`;
    }
    });
}
