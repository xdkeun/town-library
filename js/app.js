const REST_API_KEY = "93965c2d87d826b6a2c82e922835057c";

function book() {
  fetch("https://dapi.kakao.com/v3/search/book?query=우리&size=50&", {
    method: "get",
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
const randomBookFirst = document.querySelector(".random-book-first");
const randomBookSecond = document.querySelector(".random-book-second");
const randomBookThird = document.querySelector(".random-book-third");

reactCategory.addEventListener("mouseover", reactBook);

function reactBook() {
  fetch("https://dapi.kakao.com/v3/search/book?query=리액트&size=50&", {
    method: "get",
    headers: { Authorization: `KakaoAK ${REST_API_KEY}` },
  })
    .then((response) => response.json())
    .then((data) => {
      const firstImg = document.createElement("img");
      firstImg.src = data.documents[0].thumbnail;
      randomBookFirst.appendChild(firstImg);
      firstImg.classList.add("random-book");

      const firstDiv = document.createElement("div");
      firstDiv.innerHTML = `${data.documents[0].title}
                            <div>${data.documents[0].price}</div>
                            <a href=${data.documents[0].url}>More</a>`;
      randomBookFirst.appendChild(firstDiv);

      const secondImg = document.createElement("img");
      secondImg.src = data.documents[1].thumbnail;
      randomBookSecond.appendChild(secondImg);
      secondImg.classList.add("random-book");

      const secondDiv = document.createElement("div");
      secondDiv.innerHTML = data.documents[1].title;
      randomBookSecond.appendChild(secondDiv);

      const thirdImg = document.createElement("img");
      thirdImg.src = data.documents[2].thumbnail;
      randomBookThird.appendChild(thirdImg);
      thirdImg.classList.add("random-book");

      const thirdDiv = document.createElement("div");
      thirdDiv.innerHTML = data.documents[2].title;
      randomBookThird.appendChild(thirdDiv);
    });
}
