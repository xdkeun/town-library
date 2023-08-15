//주문할 상품의 정보와, 구매자 정보, 배송지 정보를 입력함
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

function Order() {
  //구매할 책의 정보를 가져옴
  const location = useLocation();
  const book = location.state.book;
  const [count, setCount] = useState(location.state.count);

  //주문자 정보
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  function nameChangeHandler(event) {
    setName(event.target.value);
  }
  function emailChangeHandler(event) {
    setEmail(event.target.value);
  }
  function phoneNumberChangeHandler(event) {
    setPhoneNumber(event.target.value);
  }
  //배송지 정보
  const [postCode, setPostCode] = useState("");
  const [addr, setAddr] = useState("");
  const [detailAddr, setDetailAddr] = useState("");
  function DaumPostcode() {
    new window.daum.Postcode({
      oncomplete: function (data) {
        setPostCode(data.zonecode);
        setAddr(data.address);
      },
    }).open();
  }
  function detailAddrChangeHandler(event) {
    setDetailAddr(event.target.value);
  }

  const navigate = useNavigate();
  function orderComplete() {
    navigate("/ordercomplete", {
      state: {
        book: book,
      },
    });
  }
  const Price = (
    book.sale_price === -1 ? book.price : book.sale_price
  ).toLocaleString();

  function countChangeHandler(value) {
    if (value == "minus" && count > 1) {
      setCount(count - 1);
    } else if (value == "plus" && count < 9) {
      setCount(count + 1);
    }
  }
  return (
    <div>
      <Header />
      <OrderWrapper>
        <OrderArticle>
          <OrderArticleTitle>주문자 정보</OrderArticleTitle>
          <OrderInput
            type="text"
            placeholder="이름"
            value={name}
            onChange={nameChangeHandler}
          />
          <OrderInput
            type="text"
            placeholder="이메일"
            value={email}
            onChange={emailChangeHandler}
          />
          <OrderInput
            type="text"
            placeholder="휴대폰 번호"
            value={phoneNumber}
            onChange={phoneNumberChangeHandler}
          />
        </OrderArticle>
        <OrderArticle>
          <OrderArticleTitle>배송지 정보</OrderArticleTitle>
          <PostCodeWrapper>
            <PostCode>{postCode}</PostCode>
            <PostCodeSearch onClick={DaumPostcode}>
              우편번호 찾기
            </PostCodeSearch>
          </PostCodeWrapper>
          <OrderInput
            type="text"
            placeholder="기본주소"
            disabled
            value={addr}
          />
          <OrderInput
            type="text"
            placeholder="상세주소"
            value={detailAddr}
            onChange={detailAddrChangeHandler}
          />
        </OrderArticle>
        <OrderArticle style={{ position: "relative" }}>
          <OrderArticleTitle>주문 상품</OrderArticleTitle>
          <OrderSection>
            <OrderBookImg src={book.thumbnail} />
            <OrderBook>
              <OrderBookTitle>{book.title}</OrderBookTitle>
              <OrderBookAuthors>{book.authors}</OrderBookAuthors>
            </OrderBook>
            <OrderCountWrapper>
              <OrderCountUpdateButton>
                <FontAwesomeIcon
                  icon={faMinus}
                  onClick={() => {
                    countChangeHandler("minus");
                  }}
                />
              </OrderCountUpdateButton>
              <OrderCount>{count}</OrderCount>

              <OrderCountUpdateButton>
                <FontAwesomeIcon
                  icon={faPlus}
                  onClick={() => {
                    countChangeHandler("plus");
                  }}
                />
              </OrderCountUpdateButton>
            </OrderCountWrapper>
            <OrderBookPriceWrapper>
              <OrderBookPrice>
                {(parseInt(Price.replace(/,/g, "")) * count).toLocaleString()}
              </OrderBookPrice>
              <span>원</span>
            </OrderBookPriceWrapper>
          </OrderSection>
          <OrderButton onClick={orderComplete}>주문하기</OrderButton>
        </OrderArticle>
      </OrderWrapper>
    </div>
  );
}

const OrderWrapper = styled.main`
  padding: 1%;
`;

const OrderArticle = styled.article`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  padding: 10px;
  width: 700px;
`;

const OrderArticleTitle = styled.h5`
  font-size: 20px;
  font-weight: 600;
  margin: 16px 0;
`;

const OrderInput = styled.input`
  width: 500px;
  height: 50px;
  font-size: 18px;
  padding: 4px 8px;
  margin-bottom: 10px;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
`;

const PostCodeWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  margin-bottom: 10px;
`;
const PostCode = styled.span`
  border: 1px solid rgba(0, 0, 0, 0.2);
  width: 70px;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PostCodeSearch = styled.button`
  all: unset;
  background-color: black;
  color: white;
  padding: 5px;
  height: 100%;
  box-sizing: border-box;
`;

const OrderSection = styled.section`
  display: flex;
  gap: 20px;
`;

const OrderBookImg = styled.img`
  width: 120px;
  height: 200px;
`;

const OrderBook = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-right: 40px;
`;

const OrderBookTitle = styled.span`
  font-size: 20px;
  font-weight: 600;
`;

const OrderBookAuthors = styled.span`
  color: rgba(0, 0, 0, 0.5);
`;

const OrderCountWrapper = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  margin-right: 40px;
`;

const OrderCountUpdateButton = styled.button`
  all: unset;
  padding: 5px;
  box-sizing: border-box;
  font-size: 20px;
  background-color: rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
`;

const OrderCount = styled.span`
  margin: 0 10px;
  font-size: 20px;
  box-sizing: border-box;
`;
const OrderBookPriceWrapper = styled.div`
  font-size: 18px;
`;
const OrderBookPrice = styled.span`
  font-size: 22px;
  font-weight: 600;
`;
const OrderButton = styled.button`
  all: unset;
  padding: 10px;
  background-color: black;
  color: white;
  font-size: 24px;
  font-weight: 600;
  position: absolute;
  bottom: -70px;
  right: 0;
`;
export default Order;
