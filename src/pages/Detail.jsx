//책 상세조회 페이지
import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import BooksData from "../data/BooksData";
import styled from "styled-components";
import Header from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
function formatDate(isoDateString) {
  const date = new Date(isoDateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}년 ${month}월 ${day}일`;
}

function Detail() {
  //책의 제목을 가져와 책의 상세정보를 출력시켜주도록 구현
  const { title } = useParams();
  const queryBook = BooksData(title, "accuracy", 1, 1, "title");
  const book = queryBook[0];

  //상세정보 페이지에서 수량을 +, - 클릭 시 수량 변경
  const [count, setCount] = useState(1);
  const countPlusHandler = () => {
    if (count < 99) {
      setCount(count + 1);
    }
  };
  const countMinusHandler = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };



  //Detail 페이지에 들어올때마다 최근본도서 localStorage에 저장하도록 구현
  const [recentBooks, setRecentBooks] = useState([]);
  useEffect(() => {
    // 기존의 최근본도서 목록을 localStorage에서 가져옴
    const storedRecentBooks =
      JSON.parse(localStorage.getItem("recentBooks")) || [];

    // 현재 책이 이미 최근본도서 목록에 있는지 확인
    const isBookInRecent = storedRecentBooks.some(
      (recentBook) => recentBook?.isbn === book?.isbn
    );

    // 최근본도서 목록을 업데이트
    if (!isBookInRecent && book) {
      const updatedRecentBooks = [...storedRecentBooks, book];
      localStorage.setItem("recentBooks", JSON.stringify(updatedRecentBooks));
      setRecentBooks(updatedRecentBooks);
    }
  }, [book]);


  const navigate = useNavigate();
  const buyButtonClickHandler = (book, count) => {
    navigate('/order',{
      state:{
        book: book,
        count: count
      }
    })
  }

  return (
    <>
      <Header />
      <DetailWrapper to={book?.url} target="_blank">
        <DetailImg src={book?.thumbnail} alt="책 표지 사진" />
        <DetailBox>
          <DetailIsbn>{book?.isbn}</DetailIsbn>
          <DetailTitle>
            [{book?.publisher}]{book?.title}
          </DetailTitle>
          <Row>
            <RowLabel>출판날짜</RowLabel>
            <RowData>{formatDate(book?.datetime)}</RowData>
          </Row>
          <Row>
            <RowLabel>저자</RowLabel>
            <RowData>{book?.authors}</RowData>
          </Row>
          <Row>
            <RowLabel>번역자</RowLabel>
            <RowData>{book?.translators}</RowData>
          </Row>
          <Row>
            <RowLabel>상태</RowLabel>
            <RowData>{book?.status}</RowData>
          </Row>
          <PriceWrapper>
            <DiscountRate>
              {(
                ((book?.price - book?.sale_price) / book?.sale_price) *
                100
              ).toFixed(0)}
              %
            </DiscountRate>
            <SalePrice>{book?.sale_price.toLocaleString()}원</SalePrice>
            <Price>{book?.price.toLocaleString()}원</Price>
          </PriceWrapper>
        </DetailBox>
      </DetailWrapper>
      <DetailContents>{book?.contents}</DetailContents>
      <BottomButton>
        <BottomOption>
          <TotalPriceText>총 상품 금액</TotalPriceText>
          <TotalPrice>
            {(book?.sale_price * count).toLocaleString()}원
          </TotalPrice>
          <ItemCount>
            <FontAwesomeIcon icon={faMinus} onClick={countMinusHandler} />
            <Count>{count}</Count>
            <FontAwesomeIcon icon={faPlus} onClick={countPlusHandler} />
          </ItemCount>
        </BottomOption>
        <OrderButtonWrapper>
          <OrderButton>장바구니</OrderButton>
          <OrderButton onClick={()=>buyButtonClickHandler(book, count)}>바로구매</OrderButton>
        </OrderButtonWrapper>
      </BottomButton>
    </>
  );
}

const DetailWrapper = styled(Link)`
  padding: 1% 3%;
  display: flex;
  text-decoration: none;
  color: black;
`;

const DetailImg = styled.img`
  width: 300px;
  height: 400px;
  border-radius: 10px;
`;
const DetailBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 20px;
`;
const DetailIsbn = styled.p`
  color: rgba(0, 0, 0, 0.5);
  margin: 0;
  font-size: 24px;
  margin-bottom: 5px;
`;
const DetailTitle = styled.p`
  margin: 0;
  font-size: 26px;
  font-weight: 600;
  padding-bottom: 5px;
  box-sizing: border-box;
  border-bottom: 1px solid black;
`;

const Row = styled.div`
  display: flex;
  gap: 5px;
  margin-top: 30px;
  font-size: 22px;
`;

const RowLabel = styled.span`
  color: rgba(0, 0, 0, 0.6);
`;

const RowData = styled.span``;

const PriceWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const DiscountRate = styled.span`
  font-size: 26px;
  font-weight: 600;
  color: green;
  margin-right: 3px;
`;

const SalePrice = styled.span`
  font-size: 26px;
  font-weight: 600;
`;

const Price = styled.span`
  font-size: 22px;
  color: rgba(0, 0, 0, 0.5);
  text-decoration: line-through;
`;

const DetailContents = styled.div`
  margin: 1% 3%;
  font-size: 20px;
  letter-spacing: 1px;
`;

const BottomButton = styled.button`
  all: unset;
  width: 100%;
  height: 100px;
  border-top: 1px solid rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BottomOption = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-left: 3%;
`;

const TotalPriceText = styled.p`
  font-size: 16px;
`;

const TotalPrice = styled.p`
  font-size: 24px;
  font-weight: 600;
  width: 120px;
`;

const ItemCount = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  padding: 0 10px;
  border-radius: 10px;
`;

const Count = styled.p`
  width: 40px;
  text-align: center;
`;

const OrderButtonWrapper = styled.div`
  display: flex;
  gap: 5px;
  padding-right: 20px;
`;

const OrderButton = styled.button`
  all: unset;
  border: 1px solid black;
  padding: 15px;
  border-radius: 10px;
  font-size: 22px;
  font-weight: 500;
`;

export default Detail;
