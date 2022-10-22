  const allBook = document.querySelector(".all-book");
  const randomNumber30 = Math.floor(Math.random() * 30); //난수

  function allBookFunc() {
    fetch("https://dapi.kakao.com/v3/search/book?query=이&size=50&", {
      method: "get",
      headers: { Authorization: `KakaoAK ${REST_API_KEY}` },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
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
                          <div class="modal-content-info">
                              <div class="modal-left-content">
                                  <img src="${data.documents[randomNumber30].thumbnail}">
                                  <div>${data.documents[randomNumber30].title}</div>
                              </div>
                              <div class="modal-right-content">
                                  <div><button class="modal-button-design">제목</button>${data.documents[randomNumber30].title}</div>
                                  <div><button class="modal-button-design">저자</button>${data.documents[randomNumber30].authors}</div>
                                  <div><button class="modal-button-design">출판사</button>${data.documents[randomNumber30].publisher}</div>
                                  <div><button class="modal-button-design">가격</button>${data.documents[randomNumber30].price}원</div>
                              </div>
                          </div>
                          <div class="modal-content-bottom-info">
                              <div class="modal-content-bottom-story">${data.documents[randomNumber30].contents}</div>
                              <div class="modal-content-bottom-button">
                              <div class="modal-content-bottom-flex">
                              <button class="modal-more-button"><a href="${data.documents[randomNumber30].url}">더 보기</a></button>
                              <button class="close-button">X</button>
                              </div>
                              </div>
                          </div>
                      </div>
                      </div>
                      </div>
                  </div>

                  <div class="all-book-box">
                  <div class="all-book-img">
                      <img src="${data.documents[randomNumber30+1].thumbnail}">
                  </div>
                  <div class="all-book-info">
                      <h3>${data.documents[randomNumber30+1].title}</h3>
                      <h5>${data.documents[randomNumber30+1].authors}</h5>

                      <button class="all-book-button" id="open">더 보기</button>
                      <div class="modal hidden">
                          <div class="modal-overlay"></div>

                          <div class="modal-content">
                          <div class="modal-content-info">
                              <div class="modal-left-content">
                                  <img src="${data.documents[randomNumber30+1].thumbnail}">
                                  <div>${data.documents[randomNumber30+1].title}</div>
                              </div>
                              <div class="modal-right-content">
                                  <div><button class="modal-button-design">제목</button>${data.documents[randomNumber30+1].title}</div>
                                  <div><button class="modal-button-design">저자</button>${data.documents[randomNumber30+1].authors}</div>
                                  <div><button class="modal-button-design">출판사</button>${data.documents[randomNumber30+1].publisher}</div>
                                  <div><button class="modal-button-design">가격</button>${data.documents[randomNumber30+1].price}원</div>
                              </div>
                          </div>
                          <div class="modal-content-bottom-info">
                              <div class="modal-content-bottom-story">${data.documents[randomNumber30+1].contents}</div>
                              <div class="modal-content-bottom-button">
                              <div class="modal-content-bottom-flex">
                              <button class="modal-more-button"><a href="${data.documents[randomNumber30+1].url}">더 보기</a></button>
                              <button class="close-button">X</button>
                              </div>
                              </div>
                          </div>
                      </div>
                      </div>
                      </div>
                  </div>

                  <div class="all-book-box">
                  <div class="all-book-img">
                      <img src="${data.documents[randomNumber30+2].thumbnail}">
                  </div>
                  <div class="all-book-info">
                      <h3>${data.documents[randomNumber30+2].title}</h3>
                      <h5>${data.documents[randomNumber30+2].authors}</h5>

                      <button class="all-book-button" id="open">더 보기</button>
                      <div class="modal hidden">
                          <div class="modal-overlay"></div>

                          <div class="modal-content">
                          <div class="modal-content-info">
                              <div class="modal-left-content">
                                  <img src="${data.documents[randomNumber30+2].thumbnail}">
                                  <div>${data.documents[randomNumber30+2].title}</div>
                              </div>
                              <div class="modal-right-content">
                                  <div><button class="modal-button-design">제목</button>${data.documents[randomNumber30+2].title}</div>
                                  <div><button class="modal-button-design">저자</button>${data.documents[randomNumber30+2].authors}</div>
                                  <div><button class="modal-button-design">출판사</button>${data.documents[randomNumber30+2].publisher}</div>
                                  <div><button class="modal-button-design">가격</button>${data.documents[randomNumber30+2].price}원</div>
                              </div>
                          </div>
                          <div class="modal-content-bottom-info">
                              <div class="modal-content-bottom-story">${data.documents[randomNumber30+2].contents}</div>
                              <div class="modal-content-bottom-button">
                              <div class="modal-content-bottom-flex">
                              <button class="modal-more-button"><a href="${data.documents[randomNumber30+2].url}">더 보기</a></button>
                              <button class="close-button">X</button>
                              </div>
                              </div>
                          </div>
                      </div>
                      </div>
                      </div>
                  </div>

                  <div class="all-book-box">
                  <div class="all-book-img">
                      <img src="${data.documents[randomNumber30+3].thumbnail}">
                  </div>
                  <div class="all-book-info">
                      <h3>${data.documents[randomNumber30+3].title}</h3>
                      <h5>${data.documents[randomNumber30+3].authors}</h5>

                      <button class="all-book-button" id="open">더 보기</button>
                      <div class="modal hidden">
                          <div class="modal-overlay"></div>

                          <div class="modal-content">
                          <div class="modal-content-info">
                              <div class="modal-left-content">
                                  <img src="${data.documents[randomNumber30+3].thumbnail}">
                                  <div>${data.documents[randomNumber30+3].title}</div>
                              </div>
                              <div class="modal-right-content">
                                  <div><button class="modal-button-design">제목</button>${data.documents[randomNumber30+3].title}</div>
                                  <div><button class="modal-button-design">저자</button>${data.documents[randomNumber30+3].authors}</div>
                                  <div><button class="modal-button-design">출판사</button>${data.documents[randomNumber30+3].publisher}</div>
                                  <div><button class="modal-button-design">가격</button>${data.documents[randomNumber30+3].price}원</div>
                              </div>
                          </div>
                          <div class="modal-content-bottom-info">
                              <div class="modal-content-bottom-story">${data.documents[randomNumber30+3].contents}</div>
                              <div class="modal-content-bottom-button">
                              <div class="modal-content-bottom-flex">
                              <button class="modal-more-button"><a href="${data.documents[randomNumber30+3].url}">더 보기</a></button>
                              <button class="close-button">X</button>
                              </div>
                              </div>
                          </div>
                      </div>
                      </div>
                      </div>
                  </div>

                  <div class="all-book-box">
                  <div class="all-book-img">
                      <img src="${data.documents[randomNumber30+4].thumbnail}">
                  </div>
                  <div class="all-book-info">
                      <h3>${data.documents[randomNumber30+4].title}</h3>
                      <h5>${data.documents[randomNumber30+4].authors}</h5>

                      <button class="all-book-button" id="open">더 보기</button>
                      <div class="modal hidden">
                          <div class="modal-overlay"></div>

                          <div class="modal-content">
                          <div class="modal-content-info">
                              <div class="modal-left-content">
                                  <img src="${data.documents[randomNumber30+4].thumbnail}">
                                  <div>${data.documents[randomNumber30+4].title}</div>
                              </div>
                              <div class="modal-right-content">
                                  <div><button class="modal-button-design">제목</button>${data.documents[randomNumber30+4].title}</div>
                                  <div><button class="modal-button-design">저자</button>${data.documents[randomNumber30+4].authors}</div>
                                  <div><button class="modal-button-design">출판사</button>${data.documents[randomNumber30+4].publisher}</div>
                                  <div><button class="modal-button-design">가격</button>${data.documents[randomNumber30+4].price}원</div>
                            </div>
                        </div>
                        <div class="modal-content-bottom-info">
                            <div class="modal-content-bottom-story">${data.documents[randomNumber30+4].contents}</div>
                            <div class="modal-content-bottom-button">
                            <div class="modal-content-bottom-flex">
                            <button class="modal-more-button"><a href="${data.documents[randomNumber30+4].url}">더 보기</a></button>
                            <button class="close-button">X</button>
                            </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>

                <div class="all-book-box">
                <div class="all-book-img">
                    <img src="${data.documents[randomNumber30+5].thumbnail}">
                </div>
                <div class="all-book-info">
                    <h3>${data.documents[randomNumber30+5].title}</h3>
                    <h5>${data.documents[randomNumber30+5].authors}</h5>

                    <button class="all-book-button" id="open">더 보기</button>
                    <div class="modal hidden">
                        <div class="modal-overlay"></div>

                        <div class="modal-content">
                        <div class="modal-content-info">
                            <div class="modal-left-content">
                                <img src="${data.documents[randomNumber30+5].thumbnail}">
                                <div>${data.documents[randomNumber30+5].title}</div>
                            </div>
                            <div class="modal-right-content">
                                <div><button class="modal-button-design">제목</button>${data.documents[randomNumber30+5].title}</div>
                                <div><button class="modal-button-design">저자</button>${data.documents[randomNumber30+5].authors}</div>
                                <div><button class="modal-button-design">출판사</button>${data.documents[randomNumber30+5].publisher}</div>
                                <div><button class="modal-button-design">가격</button>${data.documents[randomNumber30+5].price}원</div>
                            </div>
                        </div>
                        <div class="modal-content-bottom-info">
                            <div class="modal-content-bottom-story">${data.documents[randomNumber30+5].contents}</div>
                            <div class="modal-content-bottom-button">
                            <div class="modal-content-bottom-flex">
                            <button class="modal-more-button"><a href="${data.documents[randomNumber30+5].url}">더 보기</a></button>
                            <button class="close-button">X</button>
                            </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>

                <div class="all-book-box">
                <div class="all-book-img">
                    <img src="${data.documents[randomNumber30+6].thumbnail}">
                </div>
                <div class="all-book-info">
                    <h3>${data.documents[randomNumber30+6].title}</h3>
                    <h5>${data.documents[randomNumber30+6].authors}</h5>

                    <button class="all-book-button" id="open">더 보기</button>
                    <div class="modal hidden">
                        <div class="modal-overlay"></div>

                        <div class="modal-content">
                        <div class="modal-content-info">
                            <div class="modal-left-content">
                                <img src="${data.documents[randomNumber30+6].thumbnail}">
                                <div>${data.documents[randomNumber30+6].title}</div>
                            </div>
                            <div class="modal-right-content">
                                <div><button class="modal-button-design">제목</button>${data.documents[randomNumber30+6].title}</div>
                                <div><button class="modal-button-design">저자</button>${data.documents[randomNumber30+6].authors}</div>
                                <div><button class="modal-button-design">출판사</button>${data.documents[randomNumber30+6].publisher}</div>
                                <div><button class="modal-button-design">가격</button>${data.documents[randomNumber30+6].price}원</div>
                            </div>
                        </div>
                        <div class="modal-content-bottom-info">
                            <div class="modal-content-bottom-story">${data.documents[randomNumber30+6].contents}</div>
                            <div class="modal-content-bottom-button">
                            <div class="modal-content-bottom-flex">
                            <button class="modal-more-button"><a href="${data.documents[randomNumber30+6].url}">더 보기</a></button>
                            <button class="close-button">X</button>
                            </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>

                <div class="all-book-box">
                <div class="all-book-img">
                    <img src="${data.documents[randomNumber30+7].thumbnail}">
                </div>
                <div class="all-book-info">
                    <h3>${data.documents[randomNumber30+7].title}</h3>
                    <h5>${data.documents[randomNumber30+7].authors}</h5>

                    <button class="all-book-button" id="open">더 보기</button>
                    <div class="modal hidden">
                        <div class="modal-overlay"></div>

                        <div class="modal-content">
                        <div class="modal-content-info">
                            <div class="modal-left-content">
                                <img src="${data.documents[randomNumber30+7].thumbnail}">
                                <div>${data.documents[randomNumber30+7].title}</div>
                            </div>
                            <div class="modal-right-content">
                                <div><button class="modal-button-design">제목</button>${data.documents[randomNumber30+7].title}</div>
                                <div><button class="modal-button-design">저자</button>${data.documents[randomNumber30+7].authors}</div>
                                <div><button class="modal-button-design">출판사</button>${data.documents[randomNumber30+7].publisher}</div>
                                <div><button class="modal-button-design">가격</button>${data.documents[randomNumber30+7].price}원</div>
                            </div>
                        </div>
                        <div class="modal-content-bottom-info">
                            <div class="modal-content-bottom-story">${data.documents[randomNumber30+7].contents}</div>
                            <div class="modal-content-bottom-button">
                            <div class="modal-content-bottom-flex">
                            <button class="modal-more-button"><a href="${data.documents[randomNumber30+7].url}">더 보기</a></button>
                            <button class="close-button">X</button>
                            </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>

                <div class="all-book-box">
                <div class="all-book-img">
                    <img src="${data.documents[randomNumber30+8].thumbnail}">
                </div>
                <div class="all-book-info">
                    <h3>${data.documents[randomNumber30+8].title}</h3>
                    <h5>${data.documents[randomNumber30+8].authors}</h5>

                    <button class="all-book-button" id="open">더 보기</button>
                    <div class="modal hidden">
                        <div class="modal-overlay"></div>

                        <div class="modal-content">
                        <div class="modal-content-info">
                            <div class="modal-left-content">
                                <img src="${data.documents[randomNumber30+8].thumbnail}">
                                <div>${data.documents[randomNumber30+8].title}</div>
                            </div>
                            <div class="modal-right-content">
                                <div><button class="modal-button-design">제목</button>${data.documents[randomNumber30+8].title}</div>
                                <div><button class="modal-button-design">저자</button>${data.documents[randomNumber30+8].authors}</div>
                                <div><button class="modal-button-design">출판사</button>${data.documents[randomNumber30+8].publisher}</div>
                                <div><button class="modal-button-design">가격</button>${data.documents[randomNumber30+8].price}원</div>
                            </div>
                        </div>
                        <div class="modal-content-bottom-info">
                            <div class="modal-content-bottom-story">${data.documents[randomNumber30+8].contents}</div>
                            <div class="modal-content-bottom-button">
                            <div class="modal-content-bottom-flex">
                            <button class="modal-more-button"><a href="${data.documents[randomNumber30+8].url}">더 보기</a></button>
                            <button class="close-button">X</button>
                            </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>

                <div class="all-book-box">
                <div class="all-book-img">
                    <img src="${data.documents[randomNumber30+9].thumbnail}">
                </div>
                <div class="all-book-info">
                    <h3>${data.documents[randomNumber30+9].title}</h3>
                    <h5>${data.documents[randomNumber30+9].authors}</h5>

                    <button class="all-book-button" id="open">더 보기</button>
                    <div class="modal hidden">
                        <div class="modal-overlay"></div>

                        <div class="modal-content">
                        <div class="modal-content-info">
                            <div class="modal-left-content">
                                <img src="${data.documents[randomNumber30+9].thumbnail}">
                                <div>${data.documents[randomNumber30+9].title}</div>
                            </div>
                            <div class="modal-right-content">
                                <div><button class="modal-button-design">제목</button>${data.documents[randomNumber30+9].title}</div>
                                <div><button class="modal-button-design">저자</button>${data.documents[randomNumber30+9].authors}</div>
                                <div><button class="modal-button-design">출판사</button>${data.documents[randomNumber30+9].publisher}</div>
                                <div><button class="modal-button-design">가격</button>${data.documents[randomNumber30+9].price}원</div>
                            </div>
                        </div>
                        <div class="modal-content-bottom-info">
                            <div class="modal-content-bottom-story">${data.documents[randomNumber30+9].contents}</div>
                            <div class="modal-content-bottom-button">
                            <div class="modal-content-bottom-flex">
                            <button class="modal-more-button"><a href="${data.documents[randomNumber30+9].url}">더 보기</a></button>
                            <button class="close-button">X</button>
                            </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>

                <div class="all-book-box">
                <div class="all-book-img">
                    <img src="${data.documents[randomNumber30+10].thumbnail}">
                </div>
                <div class="all-book-info">
                    <h3>${data.documents[randomNumber30+10].title}</h3>
                    <h5>${data.documents[randomNumber30+10].authors}</h5>

                    <button class="all-book-button" id="open">더 보기</button>
                    <div class="modal hidden">
                        <div class="modal-overlay"></div>

                        <div class="modal-content">
                        <div class="modal-content-info">
                            <div class="modal-left-content">
                                <img src="${data.documents[randomNumber30+10].thumbnail}">
                                <div>${data.documents[randomNumber30+10].title}</div>
                            </div>
                            <div class="modal-right-content">
                                <div><button class="modal-button-design">제목</button>${data.documents[randomNumber30+10].title}</div>
                                <div><button class="modal-button-design">저자</button>${data.documents[randomNumber30+10].authors}</div>
                                <div><button class="modal-button-design">출판사</button>${data.documents[randomNumber30+10].publisher}</div>
                                <div><button class="modal-button-design">가격</button>${data.documents[randomNumber30+10].price}원</div>
                            </div>
                        </div>
                        <div class="modal-content-bottom-info">
                            <div class="modal-content-bottom-story">${data.documents[randomNumber30+10].contents}</div>
                            <div class="modal-content-bottom-button">
                            <div class="modal-content-bottom-flex">
                            <button class="modal-more-button"><a href="${data.documents[randomNumber30+10].url}">더 보기</a></button>
                            <button class="close-button">X</button>
                            </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>

                <div class="all-book-box">
                <div class="all-book-img">
                    <img src="${data.documents[randomNumber30+11].thumbnail}">
                </div>
                <div class="all-book-info">
                    <h3>${data.documents[randomNumber30+11].title}</h3>
                    <h5>${data.documents[randomNumber30+11].authors}</h5>

                    <button class="all-book-button" id="open">더 보기</button>
                    <div class="modal hidden">
                        <div class="modal-overlay"></div>

                        <div class="modal-content">
                        <div class="modal-content-info">
                            <div class="modal-left-content">
                                <img src="${data.documents[randomNumber30+11].thumbnail}">
                                <div>${data.documents[randomNumber30+11].title}</div>
                            </div>
                            <div class="modal-right-content">
                                <div><button class="modal-button-design">제목</button>${data.documents[randomNumber30+11].title}</div>
                                <div><button class="modal-button-design">저자</button>${data.documents[randomNumber30+11].authors}</div>
                                <div><button class="modal-button-design">출판사</button>${data.documents[randomNumber30+11].publisher}</div>
                                <div><button class="modal-button-design">가격</button>${data.documents[randomNumber30+11].price}원</div>
                            </div>
                        </div>
                        <div class="modal-content-bottom-info">
                            <div class="modal-content-bottom-story">${data.documents[randomNumber30+11].contents}</div>
                            <div class="modal-content-bottom-button">
                            <div class="modal-content-bottom-flex">
                            <button class="modal-more-button"><a href="${data.documents[randomNumber30+11].url}">더 보기</a></button>
                            <button class="close-button">X</button>
                            </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>

                <div class="all-book-box">
                <div class="all-book-img">
                    <img src="${data.documents[randomNumber30+12].thumbnail}">
                </div>
                <div class="all-book-info">
                    <h3>${data.documents[randomNumber30+12].title}</h3>
                    <h5>${data.documents[randomNumber30+12].authors}</h5>

                    <button class="all-book-button" id="open">더 보기</button>
                    <div class="modal hidden">
                        <div class="modal-overlay"></div>

                        <div class="modal-content">
                        <div class="modal-content-info">
                            <div class="modal-left-content">
                                <img src="${data.documents[randomNumber30+12].thumbnail}">
                                <div>${data.documents[randomNumber30+12].title}</div>
                            </div>
                            <div class="modal-right-content">
                                <div><button class="modal-button-design">제목</button>${data.documents[randomNumber30+12].title}</div>
                                <div><button class="modal-button-design">저자</button>${data.documents[randomNumber30+12].authors}</div>
                                <div><button class="modal-button-design">출판사</button>${data.documents[randomNumber30+12].publisher}</div>
                                <div><button class="modal-button-design">가격</button>${data.documents[randomNumber30+12].price}원</div>
                            </div>
                        </div>
                        <div class="modal-content-bottom-info">
                            <div class="modal-content-bottom-story">${data.documents[randomNumber30+12].contents}</div>
                            <div class="modal-content-bottom-button">
                            <div class="modal-content-bottom-flex">
                            <button class="modal-more-button"><a href="${data.documents[randomNumber30+12].url}">더 보기</a></button>
                            <button class="close-button">X</button>
                            </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>

                <div class="all-book-box">
                <div class="all-book-img">
                    <img src="${data.documents[randomNumber30+13].thumbnail}">
                </div>
                <div class="all-book-info">
                    <h3>${data.documents[randomNumber30+13].title}</h3>
                    <h5>${data.documents[randomNumber30+13].authors}</h5>

                    <button class="all-book-button" id="open">더 보기</button>
                    <div class="modal hidden">
                        <div class="modal-overlay"></div>

                        <div class="modal-content">
                        <div class="modal-content-info">
                            <div class="modal-left-content">
                                <img src="${data.documents[randomNumber30+13].thumbnail}">
                                <div>${data.documents[randomNumber30+13].title}</div>
                            </div>
                            <div class="modal-right-content">
                                <div><button class="modal-button-design">제목</button>${data.documents[randomNumber30+13].title}</div>
                                <div><button class="modal-button-design">저자</button>${data.documents[randomNumber30+13].authors}</div>
                                <div><button class="modal-button-design">출판사</button>${data.documents[randomNumber30+13].publisher}</div>
                                <div><button class="modal-button-design">가격</button>${data.documents[randomNumber30+13].price}원</div>
                            </div>
                        </div>
                        <div class="modal-content-bottom-info">
                            <div class="modal-content-bottom-story">${data.documents[randomNumber30+13].contents}</div>
                            <div class="modal-content-bottom-button">
                            <div class="modal-content-bottom-flex">
                            <button class="modal-more-button"><a href="${data.documents[randomNumber30+13].url}">더 보기</a></button>
                            <button class="close-button">X</button>
                            </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>

                <div class="all-book-box">
                <div class="all-book-img">
                    <img src="${data.documents[randomNumber30+14].thumbnail}">
                </div>
                <div class="all-book-info">
                    <h3>${data.documents[randomNumber30+14].title}</h3>
                    <h5>${data.documents[randomNumber30+14].authors}</h5>

                    <button class="all-book-button" id="open">더 보기</button>
                    <div class="modal hidden">
                        <div class="modal-overlay"></div>

                        <div class="modal-content">
                        <div class="modal-content-info">
                            <div class="modal-left-content">
                                <img src="${data.documents[randomNumber30+14].thumbnail}">
                                <div>${data.documents[randomNumber30+14].title}</div>
                            </div>
                            <div class="modal-right-content">
                                <div><button class="modal-button-design">제목</button>${data.documents[randomNumber30+14].title}</div>
                                <div><button class="modal-button-design">저자</button>${data.documents[randomNumber30+14].authors}</div>
                                <div><button class="modal-button-design">출판사</button>${data.documents[randomNumber30+14].publisher}</div>
                                <div><button class="modal-button-design">가격</button>${data.documents[randomNumber30+14].price}원</div>
                            </div>
                        </div>
                        <div class="modal-content-bottom-info">
                            <div class="modal-content-bottom-story">${data.documents[randomNumber30+14].contents}</div>
                            <div class="modal-content-bottom-button">
                            <div class="modal-content-bottom-flex">
                            <button class="modal-more-button"><a href="${data.documents[randomNumber30+14].url}">더 보기</a></button>
                            <button class="close-button">X</button>
                            </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>

                <div class="all-book-box">
                <div class="all-book-img">
                    <img src="${data.documents[randomNumber30+15].thumbnail}">
                </div>
                <div class="all-book-info">
                    <h3>${data.documents[randomNumber30+15].title}</h3>
                    <h5>${data.documents[randomNumber30+15].authors}</h5>

                    <button class="all-book-button" id="open">더 보기</button>
                    <div class="modal hidden">
                        <div class="modal-overlay"></div>

                        <div class="modal-content">
                        <div class="modal-content-info">
                            <div class="modal-left-content">
                                <img src="${data.documents[randomNumber30+15].thumbnail}">
                                <div>${data.documents[randomNumber30+15].title}</div>
                            </div>
                            <div class="modal-right-content">
                                <div><button class="modal-button-design">제목</button>${data.documents[randomNumber30+15].title}</div>
                                <div><button class="modal-button-design">저자</button>${data.documents[randomNumber30+15].authors}</div>
                                <div><button class="modal-button-design">출판사</button>${data.documents[randomNumber30+15].publisher}</div>
                                <div><button class="modal-button-design">가격</button>${data.documents[randomNumber30+15].price}원</div>
                            </div>
                        </div>
                        <div class="modal-content-bottom-info">
                            <div class="modal-content-bottom-story">${data.documents[randomNumber30+15].contents}</div>
                            <div class="modal-content-bottom-button">
                            <div class="modal-content-bottom-flex">
                            <button class="modal-more-button"><a href="${data.documents[randomNumber30+15].url}">더 보기</a></button>
                            <button class="close-button">X</button>
                            </div>
                            </div>
                        </div>
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
