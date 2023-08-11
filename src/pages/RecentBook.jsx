import Header from "../components/Header";
import styled from "styled-components";
import { Link } from "react-router-dom";

// 최근 본 도서
function RecentBook() {
  const storedRecentBooks = JSON.parse(localStorage.getItem("recentBooks"));
  return (
    <div>
      <Header />
      <RecentBookTitle>최근 본 도서</RecentBookTitle>
      <RecentBookWrapper>
        {storedRecentBooks.length > 0 ? (
          storedRecentBooks.map((book, index) => (
            <BookArticle key={index} to={`/detail/${book.title}`}>
              <BookImg src={book.thumbnail} alt="최근 본 도서 표지 사진" />
              <BookTitle>{book.title}</BookTitle>
              <BookAuthors>{book.authors}</BookAuthors>
            </BookArticle>
          ))
        ) : (
          <h3>최근 본 도서가 없습니다.</h3>
        )}
      </RecentBookWrapper>
    </div>
  );
}

const RecentBookWrapper = styled.main`
  display: flex;
  gap: 40px;
  padding: 0 3%;
  flex-wrap: wrap;
`;

const RecentBookTitle = styled.h2`
  margin: 10px 0;
  font-size: 25px;
  padding: 1% 3%;
`;

const BookArticle = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 380px;
  text-decoration: none;
  color: black;
`;

const BookImg = styled.img`
  width: 200px;
  height: 290px;
  border-radius: 10px;
`;

const BookTitle = styled.p`
  margin: 8px 0;
  font-size: 16px;
  font-weight: 600;
`;

const BookAuthors = styled.p`
  margin: 0;
  font-size: 14px;
`;

export default RecentBook;
