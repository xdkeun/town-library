import { useLocation, Link } from "react-router-dom";
import Header from "../components/Header";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWonSign, faCopy } from "@fortawesome/free-solid-svg-icons";
function OrderComplete() {
  const location = useLocation();
  const book = location.state.book;
  const count = location.state.count;
  const name = location.state.name;
  const email = location.state.email;
  const phoneNumber = location.state.phoneNumber;
  const fullAddr = location.state.fullAddr;

  //현재 날짜부터 3일 후의 날짜를 구하는 로직, 입금기한을 사용자에게 명시
  const currentDate = new Date();
  const futureDate = new Date();
  futureDate.setDate(currentDate.getDate() + 3);
  function formatDate(date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // 월은 0부터 시작하므로 1을 더함
    const day = date.getDate();
    const hours = date.getHours();
    return `${year}년 ${month}월 ${day}일 ${hours}시 59분까지`;
  }

  //입금계좌가 클릭되면 클릭된 텍스트(계좌)를 복사함
  function copyToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    alert("클립보드에 복사되었습니다.");
  }

  return (
    <div>
      <Header />
      <OrderCompleteWrapper>
        <OrderCompleteHeader>
          <FontAwesomeIcon
            icon={faWonSign}
            style={{
              color: "cornflowerblue",
              backgroundColor: "rgba(0,0,0,0.1)",
              borderRadius: "50%",
              padding: "15px",
              fontSize: "25px",
            }}
          />
          <OrderCompleteMainMessage>
            {name}님 주문 접수가 완료되었습니다.
          </OrderCompleteMainMessage>
          <OrderCompleteSubMessage>
            주문 내역은 {email}로 전송됩니다.
          </OrderCompleteSubMessage>
        </OrderCompleteHeader>
        <OrderSummaryWrapper>
          <OrderSummary>
            <OrderInfo>결제상품</OrderInfo>
            <OrderValue>
              {book.title}[{count}권]
            </OrderValue>
          </OrderSummary>
          <OrderSummary>
            <OrderInfo>입금자명</OrderInfo>
            <OrderValue>{name}</OrderValue>
          </OrderSummary>
          <OrderSummary>
            <OrderInfo>입금계좌</OrderInfo>
            <OrderValue
              style={{ cursor: "pointer" }}
              onClick={() => copyToClipboard("그냥은행 1-22-333-4444")}
            >
              그냥은행 1-22-333-4444
              <FontAwesomeIcon
                icon={faCopy}
                style={{ marginLeft: "5px", color: "rgba(0,0,0,0.7)" }}
              />
            </OrderValue>
          </OrderSummary>
          <OrderSummary>
            <OrderInfo>입금기한</OrderInfo>
            <OrderValue>{formatDate(futureDate)}</OrderValue>
          </OrderSummary>
          <OrderSummary>
            <OrderInfo>입금금액</OrderInfo>
            <OrderValue style={{ color: "cornflowerblue" }}>
              {(
                (book.sale_price == -1 ? book.price : book.sale_price) * count
              ).toLocaleString()}
              원
            </OrderValue>
          </OrderSummary>
          <OrderSummary>
            <OrderInfo>배송주소</OrderInfo>
            <OrderValue>{fullAddr}</OrderValue>
          </OrderSummary>
          <HomeButton to="/">홈으로 돌아가기</HomeButton>
        </OrderSummaryWrapper>
      </OrderCompleteWrapper>
    </div>
  );
}

const OrderCompleteWrapper = styled.main`
  padding: 1% 3%;
`;
const OrderCompleteHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 50px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
`;

const OrderCompleteMainMessage = styled.p`
  margin: 12px 0;
  font-size: 20px;
  font-weight: 600;
`;

const OrderCompleteSubMessage = styled.p`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.4);
`;

const OrderSummaryWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 15%;
  gap: 20px;
`;

const OrderSummary = styled.span`
  display: flex;
  justify-content: space-between;
`;

const OrderInfo = styled.span`
  color: rgba(0, 0, 0, 0.7);
`;

const OrderValue = styled.span`
  font-size: 18px;
  font-weight: 600;
`;

const HomeButton = styled(Link)`
  all: unset;
  margin-top: 40px;
  text-align: center;
  background-color: cornflowerblue;
  color: white;
  font-size: 30px;
  font-weight: 600;
  padding: 10px 10px;
  cursor:pointer;
`;
export default OrderComplete;
