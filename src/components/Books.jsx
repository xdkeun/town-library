import BooksData from "../data/BooksData";
import styled from "styled-components";
import {Link} from "react-router-dom";
const BooksWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  position:relative;
`;

const Book = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 380px;
  text-decoration:none;
  color:black;
`;
const BookTitle = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin: 8px 0;
`;

const BookAuthors = styled.p`
  font-size: 14px;
  margin: 0;
  color: rgba(0, 0, 0, 0.5);
`;

function Books(props) {
  const books = BooksData(
    props.query,
    props.sort,
    props.page,
    props.size,
    props.target
  );
  return (
    <BooksWrapper>
      {books.map((book) => (
        <Book key={book.isbn} to={`/detail/${book.title}`}>
          <img src={book.thumbnail} alt="책 표지" />
          <BookTitle>{book.title}</BookTitle>
          <BookAuthors>{book.authors}</BookAuthors>
        </Book>
      ))}
    </BooksWrapper>
  );
}

export default Books;
