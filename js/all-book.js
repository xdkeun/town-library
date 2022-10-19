const allBook = document.querySelector(".all-book");
const randomNumber30 = Math.floor(Math.random() * 30); //난수

function allBookFunc() {
  fetch("https://dapi.kakao.com/v3/search/book?query=이&size=50&", {
    method: "get",
    headers: { Authorization: `KakaoAK ${REST_API_KEY}` },
  })
    .then((response) => response.json())
    .then((data) => {
      allBook.innerHTML = `
            <div class="all-book-box">
                <div class="all-book-img">
                    <img src="${data.documents[randomNumber30].thumbnail}">
                </div>
                <div class="all-book-info">
                    <h3>${data.documents[randomNumber30].title}</h3>
                    <h5>${data.documents[randomNumber30].authors}</h5>

                    <button class="all-book-button" id="open">더 보기</button>
                    <div class="modal hidden">
                        <div class="modal-overlay"></div>
                        <div class="modal-content">
                            ${data.documents[randomNumber30].title}
                            <button class="close-button">X</button>
                        </div>
                    </div>
                    </div>
                </div>  
                
                <div class="all-book-box">
                <div class="all-book-img">
                    <img src="${data.documents[randomNumber30].thumbnail}">
                </div>
                <div class="all-book-info">
                    <h3>${data.documents[randomNumber30].title}</h3>
                    <h5>${data.documents[randomNumber30].authors}</h5>

                    <button class="all-book-button" id="open">더 보기</button>
                    <div class="modal hidden">
                        <div class="modal-overlay"></div>
                        <div class="modal-content">
                            ${data.documents[randomNumber30].title}
                            <button class="close-button">X</button>
                        </div>
                    </div>
                    </div>
                </div>   

                <div class="all-book-box">
                <div class="all-book-img">
                    <img src="${data.documents[randomNumber30].thumbnail}">
                </div>
                <div class="all-book-info">
                    <h3>${data.documents[randomNumber30].title}</h3>
                    <h5>${data.documents[randomNumber30].authors}</h5>

                    <button class="all-book-button" id="open">더 보기</button>
                    <div class="modal hidden">
                        <div class="modal-overlay"></div>
                        <div class="modal-content">
                            ${data.documents[randomNumber30].title}
                            <button class="close-button">X</button>
                        </div>
                    </div>
                    </div>
                </div>   

                <div class="all-book-box">
                <div class="all-book-img">
                    <img src="${data.documents[randomNumber30].thumbnail}">
                </div>
                <div class="all-book-info">
                    <h3>${data.documents[randomNumber30].title}</h3>
                    <h5>${data.documents[randomNumber30].authors}</h5>

                    <button class="all-book-button" id="open">더 보기</button>
                    <div class="modal hidden">
                        <div class="modal-overlay"></div>
                        <div class="modal-content">
                            ${data.documents[randomNumber30].title}
                            <button class="close-button">X</button>
                        </div>
                    </div>
                    </div>
                </div>   

                <div class="all-book-box">
                <div class="all-book-img">
                    <img src="${data.documents[randomNumber30].thumbnail}">
                </div>
                <div class="all-book-info">
                    <h3>${data.documents[randomNumber30].title}</h3>
                    <h5>${data.documents[randomNumber30].authors}</h5>

                    <button class="all-book-button" id="open">더 보기</button>
                    <div class="modal hidden">
                        <div class="modal-overlay"></div>
                        <div class="modal-content">
                            ${data.documents[randomNumber30].title}
                            <button class="close-button">X</button>
                        </div>
                    </div>
                    </div>
                </div>   

                <div class="all-book-box">
                <div class="all-book-img">
                    <img src="${data.documents[randomNumber30].thumbnail}">
                </div>
                <div class="all-book-info">
                    <h3>${data.documents[randomNumber30].title}</h3>
                    <h5>${data.documents[randomNumber30].authors}</h5>

                    <button class="all-book-button" id="open">더 보기</button>
                    <div class="modal hidden">
                        <div class="modal-overlay"></div>
                        <div class="modal-content">
                            ${data.documents[randomNumber30].title}
                            <button class="close-button">X</button>
                        </div>
                    </div>
                    </div>
                </div>   

                <div class="all-book-box">
                <div class="all-book-img">
                    <img src="${data.documents[randomNumber30].thumbnail}">
                </div>
                <div class="all-book-info">
                    <h3>${data.documents[randomNumber30].title}</h3>
                    <h5>${data.documents[randomNumber30].authors}</h5>

                    <button class="all-book-button" id="open">더 보기</button>
                    <div class="modal hidden">
                        <div class="modal-overlay"></div>
                        <div class="modal-content">
                            ${data.documents[randomNumber30].title}
                            <button class="close-button">X</button>
                        </div>
                    </div>
                    </div>
                </div>   

                <div class="all-book-box">
                <div class="all-book-img">
                    <img src="${data.documents[randomNumber30].thumbnail}">
                </div>
                <div class="all-book-info">
                    <h3>${data.documents[randomNumber30].title}</h3>
                    <h5>${data.documents[randomNumber30].authors}</h5>

                    <button class="all-book-button" id="open">더 보기</button>
                    <div class="modal hidden">
                        <div class="modal-overlay"></div>
                        <div class="modal-content">
                            ${data.documents[randomNumber30].title}
                            <button class="close-button">X</button>
                        </div>
                    </div>
                    </div>
                </div>   

                <div class="all-book-box">
                <div class="all-book-img">
                    <img src="${data.documents[randomNumber30].thumbnail}">
                </div>
                <div class="all-book-info">
                    <h3>${data.documents[randomNumber30].title}</h3>
                    <h5>${data.documents[randomNumber30].authors}</h5>

                    <button class="all-book-button" id="open">더 보기</button>
                    <div class="modal hidden">
                        <div class="modal-overlay"></div>
                        <div class="modal-content">
                            ${data.documents[randomNumber30].title}
                            <button class="close-button">X</button>
                        </div>
                    </div>
                    </div>
                </div>   

                <div class="all-book-box">
                <div class="all-book-img">
                    <img src="${data.documents[randomNumber30].thumbnail}">
                </div>
                <div class="all-book-info">
                    <h3>${data.documents[randomNumber30].title}</h3>
                    <h5>${data.documents[randomNumber30].authors}</h5>

                    <button class="all-book-button" id="open">더 보기</button>
                    <div class="modal hidden">
                        <div class="modal-overlay"></div>
                        <div class="modal-content">
                            ${data.documents[randomNumber30].title}
                            <button class="close-button">X</button>
                        </div>
                    </div>
                    </div>
                </div>   

                <div class="all-book-box">
                <div class="all-book-img">
                    <img src="${data.documents[randomNumber30].thumbnail}">
                </div>
                <div class="all-book-info">
                    <h3>${data.documents[randomNumber30].title}</h3>
                    <h5>${data.documents[randomNumber30].authors}</h5>

                    <button class="all-book-button" id="open">더 보기</button>
                    <div class="modal hidden">
                        <div class="modal-overlay"></div>
                        <div class="modal-content">
                            ${data.documents[randomNumber30].title}
                            <button class="close-button">X</button>
                        </div>
                    </div>
                    </div>
                </div>   

                <div class="all-book-box">
                <div class="all-book-img">
                    <img src="${data.documents[randomNumber30].thumbnail}">
                </div>
                <div class="all-book-info">
                    <h3>${data.documents[randomNumber30].title}</h3>
                    <h5>${data.documents[randomNumber30].authors}</h5>

                    <button class="all-book-button" id="open">더 보기</button>
                    <div class="modal hidden">
                        <div class="modal-overlay"></div>
                        <div class="modal-content">
                            ${data.documents[randomNumber30].title}
                            <button class="close-button">X</button>
                        </div>
                    </div>
                    </div>
                </div>   

                <div class="all-book-box">
                <div class="all-book-img">
                    <img src="${data.documents[randomNumber30].thumbnail}">
                </div>
                <div class="all-book-info">
                    <h3>${data.documents[randomNumber30].title}</h3>
                    <h5>${data.documents[randomNumber30].authors}</h5>

                    <button class="all-book-button" id="open">더 보기</button>
                    <div class="modal hidden">
                        <div class="modal-overlay"></div>
                        <div class="modal-content">
                            ${data.documents[randomNumber30].title}
                            <button class="close-button">X</button>
                        </div>
                    </div>
                    </div>
                </div>   

                <div class="all-book-box">
                <div class="all-book-img">
                    <img src="${data.documents[randomNumber30].thumbnail}">
                </div>
                <div class="all-book-info">
                    <h3>${data.documents[randomNumber30].title}</h3>
                    <h5>${data.documents[randomNumber30].authors}</h5>

                    <button class="all-book-button" id="open">더 보기</button>
                    <div class="modal hidden">
                        <div class="modal-overlay"></div>
                        <div class="modal-content">
                            ${data.documents[randomNumber30].title}
                            <button class="close-button">X</button>
                        </div>
                    </div>
                    </div>
                </div>   

                <div class="all-book-box">
                <div class="all-book-img">
                    <img src="${data.documents[randomNumber30].thumbnail}">
                </div>
                <div class="all-book-info">
                    <h3>${data.documents[randomNumber30].title}</h3>
                    <h5>${data.documents[randomNumber30].authors}</h5>

                    <button class="all-book-button" id="open">더 보기</button>
                    <div class="modal hidden">
                        <div class="modal-overlay"></div>
                        <div class="modal-content">
                            ${data.documents[randomNumber30].title}
                            <button class="close-button">X</button>
                        </div>
                    </div>
                    </div>
                </div>   

                <div class="all-book-box">
                <div class="all-book-img">
                    <img src="${data.documents[randomNumber30].thumbnail}">
                </div>
                <div class="all-book-info">
                    <h3>${data.documents[randomNumber30].title}</h3>
                    <h5>${data.documents[randomNumber30].authors}</h5>

                    <button class="all-book-button" id="open">더 보기</button>
                    <div class="modal hidden">
                        <div class="modal-overlay"></div>
                        <div class="modal-content">
                            ${data.documents[randomNumber30].title}
                            <button class="close-button">X</button>
                        </div>
                    </div>
                    </div>
                </div>   

                `;

      const openButton = document.querySelectorAll("#open");
      const modal = document.querySelectorAll(".modal");
      const overlay = document.querySelectorAll(".modal-overlay");
      const closeBtn = document.querySelectorAll(".close-button");

      for (let i = 0; i < openButton.length; i++) {
        const openModal = () => {
          modal[i].classList.remove("hidden");
        };
        const closeModal = () => {
          modal[i].classList.add("hidden");
        };

        openButton[i].addEventListener("click", openModal);
        closeBtn[i].addEventListener("click", closeModal);
        overlay[i].addEventListener("click", closeModal);
      }
    });
}
allBookFunc();
