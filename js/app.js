const REST_API_KEY = "93965c2d87d826b6a2c82e922835057c";

function book() {
  fetch("https://dapi.kakao.com/v3/search/book?query=우리&size=50&", {
    method : "get",
    headers: { Authorization: `KakaoAK ${REST_API_KEY}` },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data.documents[0].title);
      console.log(data.documents[0].url);
    });
}

book();

const reactCategory = document.querySelector(".react-category");
const randomBookList = document.querySelector(".random-book-list");

reactCategory.addEventListener("click", reactBook);

function reactBook(){
  fetch("https://dapi.kakao.com/v3/search/book?query=리액트&size=50&", {
    method : "get",
    headers: { Authorization: `KakaoAK ${REST_API_KEY}` },
  })
    .then((response) => response.json())
    .then((data) => {

      const newImg = document.createElement("img");
      newImg.src = `images/logo.png`;
      randomBookList.appendChild(newImg);
      newImg.classList.add("test");
      
      const newDiv = document.createElement("div");
      newDiv.innerHTML = `<strong>aaa</strong>`;
      randomBookList.appendChild(newDiv);

      console.log(data.documents[0].title);
      console.log(data.documents[0].url);
    });
}