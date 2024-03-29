//책 검색 결과 페이지
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import BooksData from "../data/BooksData";
import Header from "../components/Header";
import styled from "styled-components";
function Search() {
  const { search } = useParams();
  const books = BooksData(search);
  //검색어를 localStorage에 저장, Header에서 최근 검색어에 사용
  useEffect(() => {
    if (search) {
      const recentSearches = localStorage.getItem("recentSearches");
      const searchesArray = recentSearches ? JSON.parse(recentSearches) : [];
      if (!searchesArray.includes(search)) {
        searchesArray.unshift(search);
        localStorage.setItem("recentSearches", JSON.stringify(searchesArray));
      }
    }
  }, [search]);

  //바로 구매 버튼 클릭 시, Order로 이동
  const navigate = useNavigate();
  const buyButtonClickHandler = (book) => {
    navigate("/order", {
      state: {
        book: book,
        count: 1, //검색 페이지에서는 수량 지정이 없으므로 1로 넘김
      },
    });
  };
  return (
    <>
      <Header />
      <Main>
        <SearchNav>
          <SearchResultWrapper>
            <p>
              <SearchText>{search}</SearchText>에 대한 검색결과
            </p>
            <SearchResultCount>{books.length}</SearchResultCount>
            <p>건</p>
          </SearchResultWrapper>
          <SortSelect>
            <option>정확도 순</option>
            <option>최신 순</option>
            <option>할인율 순</option>
            <option>가격 높은 순</option>
            <option>가격 낮은 순</option>
          </SortSelect>
        </SearchNav>
        {books.length == 0 ? (
          <h3>검색된 도서가 없습니다.</h3>
        ) : (
          books.map((book) => (
            <SearchBookArticle key={book.isbn}>
              <SearchBookImg src={book.thumbnail} alt="검색된 도서" />
              <SearchBookContents to={`/detail/${book.title}`}>
                <SearchBookTitle>
                  [{book.publisher}]{book.title}
                </SearchBookTitle>
                <SearchBookAuthors>{book.authors}</SearchBookAuthors>
                <SearchBookPriceWrapper>
                  <DiscountRate>
                    {(
                      ((book.price - book.sale_price) / book.sale_price) *
                      100
                    ).toFixed(0)}
                    %
                  </DiscountRate>
                  <SearchBookSalePrice>
                    {book.sale_price.toLocaleString()}원
                  </SearchBookSalePrice>
                  <SearchBookPrice>
                    {book.price.toLocaleString()}원
                  </SearchBookPrice>
                </SearchBookPriceWrapper>
              </SearchBookContents>
              <OrderButtonWrapper>
                <OrderButton>장바구니</OrderButton>
                <OrderButton
                  onClick={() => {
                    buyButtonClickHandler(book);
                  }}
                >
                  바로구매
                </OrderButton>
              </OrderButtonWrapper>
            </SearchBookArticle>
          ))
        )}
      </Main>
    </>
  );
}

const Main = styled.main`
  padding: 1% 3%;
`;
const SearchNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SearchResultWrapper = styled.div`
  display: flex;
  font-size: 22px;
  font-weight: 600;
`;

const SearchText = styled.span`
  color: green;
`;

const SearchResultCount = styled.p`
  color: green;
  margin-left: 5px;
`;

const SearchBookArticle = styled.article`
  display: flex;
  margin-bottom: 20px;
`;

const SearchBookImg = styled.img`
  width: 150px;
  height: 200px;
  margin-right: 10px;
`;

const SearchBookContents = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 600px;
  text-decoration: none;
  color: black;
`;

const SearchBookTitle = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin: 0;
`;

const SearchBookAuthors = styled.p`
  color: rgba(0, 0, 0, 0.5);
  margin: 0;
`;

const SearchBookPriceWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  font-size: 26px;
`;

const DiscountRate = styled.p`
  color: green;
`;

const SearchBookSalePrice = styled.p`
  font-weight: 600;
`;
const SearchBookPrice = styled.p`
  color: rgba(0, 0, 0, 0.5);
  text-decoration: line-through;
  font-size: 22px;
`;

const OrderButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 20px;
  gap: 20px;
`;

const OrderButton = styled.button`
  all: unset;
  background-color: black;
  padding: 10px;
  color: white;
`;

const SortSelect = styled.select`
  height: 30px;
  font-size: 16px;
  padding: 0 5px;
`;
export default Search;
