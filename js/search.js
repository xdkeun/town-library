function searchBook(){
searchValue = document.getElementById("search-book").value;
const yogi = document.querySelector(".yogi");
fetch(`https://dapi.kakao.com/v3/search/book?query=${searchValue}&size=50&`, {
method: "get",
headers: { Authorization: `KakaoAK ${REST_API_KEY}` },
})
.then((response) => response.json())
.then((data) => {
console.log(data);
yogi.innerHTML = `<div>${data.documents[0].title}</div>`
});
}