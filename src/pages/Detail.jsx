import React from "react";
import { useParams } from "react-router-dom";
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
  const { title } = useParams();
  const queryBook = BooksData(title, "accuracy", 1, 1, "title");
  const book = queryBook[0];

  return (
    <>
      <Header />
      <DetailWrapper>
        <DetailImg src={book?.thumbnail} alt="" />
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
            <SalePrice>{book?.sale_price}원</SalePrice>
            <Price>{book?.price}원</Price>
          </PriceWrapper>
        </DetailBox>
      </DetailWrapper>
      <DetailContents>{book?.contents}</DetailContents>
      <BottomButton>
        <BottomOption>
          <TotalPriceText>총 상품 금액</TotalPriceText>
          <TotalPrice>{book?.sale_price}원</TotalPrice>
          <ItemCount>
            <FontAwesomeIcon icon={faMinus} />
            <Count>1</Count>
            <FontAwesomeIcon icon={faPlus} />
          </ItemCount>
        </BottomOption>
        <OrderButtonWrapper>
          <OrderButton>장바구니</OrderButton>
          <OrderButton>바로구매</OrderButton>
        </OrderButtonWrapper>
      </BottomButton>
    </>
  );
}

const DetailWrapper = styled.section`
  padding: 1% 3%;
  display: flex;
`;

const DetailImg = styled.img`
  width: 300px;
  height: 400px;
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
  margin-right: 20px;
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
