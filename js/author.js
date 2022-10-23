const koreanAuthor = document.getElementById("korean-author");
const foreignAuthor = document.getElementById("foreign-author");
const authorContent = document.querySelector(".author .content");

function koreanAuthorFunc() {
  // 국내 저자 테이블
  authorContent.innerHTML = `
  <a href="https://namu.wiki/w/%EA%B9%80%EC%A7%84%EB%AA%85">
    <div class="author-box">
        <div class="imgBx">
            <img src="images/korean-author-1.png">
        </div>
        <div class="author-text">
            <p> 대한민국의 대중소설가 1993년 첫 출간작인 <무궁화 꽃이 피었습니다> 출간 1년 만에 600만 부 판매로 밀리언셀러 작가에 올랐다.
                    어릴 때부터 수많은 책을 보며 자연스럽게 생긴 비판의식이 생겼고 그것이 글로 옮겨지며 자연스럽게 작가의 길로 가게 되었다.</p>
            <h3>김진명</h3>
        </div>
    </div>
</a>

<a href="https://namu.wiki/w/%EC%8B%A0%EA%B2%BD%EC%88%99">
    <div class="author-box">
        <div class="imgBx">
            <img src="images/korean-author-2.png">
        </div>
        <div class="author-text">
            <p> 대한민국의 소설가. 전라북도 정읍 출생으로 서울예전 문예창작과를 졸업하고 1985년 문예중앙 신인문학상에 당선되어 등단.
                이후 <겨울우화>, <풍금이 있던 자리>, <깊은 슬픔>, <외딴방>, <엄마를 부탁해> 등을 집필했다. 산문집으로는 <아름다운 그늘>, 시집으로는 <내 마음의 빈집
                                            한 채> 등이 있다.</p>
            <h3>신경숙</h3>
        </div>
    </div>
</a>

<a href="https://namu.wiki/w/%EC%A1%B0%EC%A0%95%EB%9E%98(%EC%86%8C%EC%84%A4%EA%B0%80)">
    <div class="author-box">
        <div class="imgBx">
            <img src="images/korean-author-3.png">
        </div>
        <div class="author-text">
            <p> 대한민국의 소설가. 1943년 8월 17일 전라남도 승주군 쌍암면 죽학리(현 순천시 승주읍) 선암사에서 출생. 종교는 불교이며,
                법명은 인천이다. 등단작은 '누명'. 대표작은 태백산맥, 아리랑, 한강, 정글만리 등이 있다.</p>
            <h3>조정래</h3>
        </div>
    </div>
</a>

<a href="https://namu.wiki/w/%EC%A0%95%EC%9D%80%EA%B6%90">
    <div class="author-box">
        <div class="imgBx">
            <img src="images/korean-author-4.png">
        </div>
        <div class="author-text">
            <p> 국내 로맨스 소설 작가. 출판사 파란미디어에서의 인터뷰에 따르면 (이쪽 분야와) 전혀 상관없는 과를 나왔다고 밝혔다. 실제로 역사 쪽 지식이 해박한 것으로 보이며,
                2016년 작품 <홍천기>까지 두 편의 소설을 제외한 모든 소설이 역사 로맨스 소설이다.</p>
            <h3>정은궐</h3>
        </div>
    </div>
</a>

<a href="https://namu.wiki/w/%ED%99%A9%EC%A0%95%EC%9D%80">
    <div class="author-box">
        <div class="imgBx">
            <img src="images/korean-author-5.png">
        </div>
        <div class="author-text">
            <p> 대한민국의 소설가. 1976년 서울에서 태어났으며, 인천대학교 불어불문학과를 중퇴했다. 2005년 경향신문 신춘문예에서 단편소설 '마더'로 등단했다.
                2014년 다른 소설가 11인과 함께 '눈먼 자들의 국가'를 내기도 했다.</p>
            <h3>황정은</h3>
        </div>
    </div>
</a>

<a href="https://namu.wiki/w/%EC%B5%9C%EC%9D%B8%ED%9B%88">
    <div class="author-box">
        <div class="imgBx">
            <img src="images/korean-author-6.png">
        </div>
        <div class="author-text">
            <p> 대한민국의 소설가 겸 극작가. 대한민국 현대 문학을 대표하는 작가 중 한 명이다.
                그의 가장 큰 특징이라고 한다면, 이데올로기와 같은 무거운 주제를 다루면서도 언제나 사랑을 강조한다는 것이다.
            </p>
            <h3>최인훈</h3>
        </div>
    </div>
</a>

<a href="https://namu.wiki/w/%ED%95%9C%EA%B0%95(%EC%86%8C%EC%84%A4%EA%B0%80)">
    <div class="author-box">
        <div class="imgBx">
            <img src="images/korean-author-7.png">
        </div>
        <div class="author-text">
            <p> 1993년 문예지 문학과 사회에 시 〈서울의 겨울>을 발표했으며, 이듬해인 1994년 서울신문 신춘문예 소설 부문에에 단편소설〈붉은 닻>이 당선되어 등단했다.
                신춘문예로 등단할 당시에는 한강현이라는 필명을 사용했으나, 차기작부터는 한강이라는 이름을 사용했다.
            </p>
            <h3>한강</h3>
        </div>
    </div>
</a>

<a href="https://thewiki.kr/w/%EC%9D%B4%EA%B8%B0%EC%A3%BC(%EC%9E%91%EA%B0%80)">
    <div class="author-box">
        <div class="imgBx">
            <img src="images/korean-author-8.png">
        </div>
        <div class="author-text">
            <p> 대한민국의 작가, 출판인. 대표작은 2017년 현재 베스트셀러인 '언어의 온도', '말의 품격' 이 있다.
                서울경제신문 등에서 사회부, 문화부, 경제부, 정치부 기자로 8년 가량 근무했다.
                한때 종교 및 예술 분야 연설문 작성을 감수했으며, 이후 전업 작가로 활동 중이다.
            </p>
            <h3>이기주</h3>
        </div>
    </div>
</a>`;
}

function foreignAuthorFunc() {
  //국외 저자 테이블
  authorContent.innerHTML = `
    <a href="https://namu.wiki/w/%EB%B2%A0%EB%A5%B4%EB%82%98%EB%A5%B4%20%EB%B2%A0%EB%A5%B4%EB%B2%A0%EB%A5%B4">
      <div class="author-box">
          <div class="imgBx">
              <img src="images/foreign-author-1.png">
          </div>
          <div class="author-text">
              <p> 베르나르 베르베르는 프랑스의 소설가, 저널리스트이다. 《르 누벨 옵세르바퇴르(Le Nouvel Observateur)》사에서 과학부 기자로 활동하였고 이는 그의 작품 활동에도 큰 영향을 주었다.
              대표작으로는 데뷔작인 《개미》 3부작과 《타나토노트》 3부작이 있다.</p>
              <h3>베르나르 베르베르</h3>
          </div>
      </div>
  </a>
  
  <a href="https://namu.wiki/w/%ED%9E%88%EA%B0%80%EC%8B%9C%EB%85%B8%20%EA%B2%8C%EC%9D%B4%EA%B3%A0">
      <div class="author-box">
          <div class="imgBx">
              <img src="images/foreign-author-2.png">
          </div>
          <div class="author-text">
              <p> 일본의 소설가. 일본추리작가협회 13대 이사장을 역임했다.
              한국에서 매우 유명한 대중적인 작가이며 나미야 잡화점의 기적, 용의자 X의 헌신 등의 베스트 셀러를 쓴 작가로 유명하다.</p>
              <h3>히가시노 게이고</h3>
          </div>
      </div>
  </a>
  
  <a href="https://namu.wiki/w/%EB%AC%B4%EB%9D%BC%EC%B9%B4%EB%AF%B8%20%ED%95%98%EB%A3%A8%ED%82%A4">
      <div class="author-box">
          <div class="imgBx">
              <img src="images/foreign-author-3.png">
          </div>
          <div class="author-text">
              <p> 일본의 소설가, 수필가, 르포 작가이자 번역가.

              무라카미 류와 함께 일본의 한 세대를 풍미한 작가로 대접받는다. 요시모토 바나나와 함께 해외에서도 유명한 작가인데,
              특히 서구권에서 인물의 작품 대부분이 번역된 몇 안 되는 일본 작가이다.</p>
              <h3>무라카미 하루키</h3>
          </div>
      </div>
  </a>
  
  <a href="https://namu.wiki/w/%EA%B8%B0%EC%9A%A4%20%EB%AE%88%EC%86%8C">
      <div class="author-box">
          <div class="imgBx">
              <img src="images/foreign-author-4.png">
          </div>
          <div class="author-text">
              <p> 프랑스 앙티브 출신의 소설가. 2001년 스키다마링크(Skidamarink)로 데뷔한 이래 꾸준히 책을 쓰고 있다. 지금의 인기를 얻게 된 발단은 2005년 발표한 구해줘(Sauve moi).
              본업은 고등학교 교사였으나 현재는 그만두고 작가 활동에 전념하고 있다.</p>
              <h3>기욤 뮈소</h3>
          </div>
      </div>
  </a>
  
  <a href="https://namu.wiki/w/J.%20K.%20%EB%A1%A4%EB%A7%81?from=%EC%A1%B0%EC%95%A4%20K%20%EB%A1%A4%EB%A7%81">
      <div class="author-box">
          <div class="imgBx">
              <img src="images/foreign-author-5.png">
          </div>
          <div class="author-text">
              <p> 영국의 소설가, 각본가.

              대표작으로는 매우 유명한 해리 포터 시리즈가 있으며 이는 세계에서 가장 많이 팔린 소설 시리즈다.
              해리 포터 시리즈의 대성공으로 억만장자가 되었고, 21세기에 들어서며 상업적으로 가장 성공한 작가 중 한 명이 되었다.</p>
              <h3>조앤 캐슬린 롤링</h3>
          </div>
      </div>
  </a>
  
  <a href="https://namu.wiki/w/%ED%8C%8C%EC%9A%B8%EB%A1%9C%20%EC%BD%94%EC%97%98%EB%A3%8C">
      <div class="author-box">
          <div class="imgBx">
              <img src="images/foreign-author-6.png">
          </div>
          <div class="author-text">
              <p> 브라질의 소설가.
              세계적으로 명망있는 브라질의 신비주의 작가이며, 극작가, 연극연출가, 저널리스트, 대중가요 작사가로도 활동하였다.
              인기가 많은 만큼 비판도 상당한데, 이유는 대충 별것도 아닌 단순한 주제를 길게 늘어놓고 대중에 영합하려는 면이 강하다는 것이다.
              </p>
              <h3>파울로 코엘료</h3>
          </div>
      </div>
  </a>
  
  <a href="https://namu.wiki/w/%EB%8C%84%20%EB%B8%8C%EB%9D%BC%EC%9A%B4">
      <div class="author-box">
          <div class="imgBx">
              <img src="images/foreign-author-7.png">
          </div>
          <div class="author-text">
              <p> 종교와 음모론을 기본으로 이것저것 떡밥을 잔뜩 넣은 소설로 유명한 작가.
              천사와 악마, 다빈치 코드, 로스트 심벌 등의 '로버트 랭던 시리즈' 가 대표작이다. 특히 2003년 출간된 다빈치 코드가 뜨거운 붐을 일으키며 유명해졌다.
              </p>
              <h3>댄 브라운</h3>
          </div>
      </div>
  </a>
  
  <a href="https://namu.wiki/w/%ED%8D%BC%ED%8A%B8%EB%A6%AC%EC%83%A4%20%ED%95%98%EC%9D%B4%EC%8A%A4%EB%AF%B8%EC%8A%A4">
      <div class="author-box">
          <div class="imgBx">
              <img src="images/foreign-author-8.png">
          </div>
          <div class="author-text">
              <p> 톰 리플리라는 사이코패스 범죄자를 주인공으로 한 리플리 시리즈로 유명하다. 그 첫 번째 작품인 《재능있는 리플리씨》(The Talented Mr. Ripley)는
              《태양은 가득히》라는 제목으로 영화화되어 우리나라에서도 널리 알려졌다.
              </p>
              <h3>퍼트리샤 하이스미스</h3>
          </div>
      </div>
  </a>`;
}

koreanAuthor.addEventListener("click", koreanAuthorFunc);
foreignAuthor.addEventListener("click", foreignAuthorFunc);
