const REST_API_KEY = "93965c2d87d826b6a2c82e922835057c";

function book() {
  fetch("https://dapi.kakao.com/v3/search/book?query=우리&size=50", {
    headers: { Authorization: `KakaoAK ${REST_API_KEY}` },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data.documents[0].title);
      console.log(data.documents[0].url);
    });
}

book();
