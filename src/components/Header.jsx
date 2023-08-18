import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 10px 15px;
  box-sizing: border-box;
`;

const HeaderLeft = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 20px;
`;

const HeaderSearch = styled.div`
  position: relative;
`;

const HeaderSearchInput = styled.input`
  all: unset;
  border: 1px solid rgba(0, 0, 0, 0.3);
  padding: 10px;
  padding-right: 40px;
  border-radius: 30px;
`;

const RecentSearch = styled.div`
  position: absolute;
  top: 50px;
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 14px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  z-index: 100;
`;

const RecentSearchHeader = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 8px 4px;
  z-index: 100;
`;

const RecentSearchInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4px;
  gap: 2px;
  font-size: 16px;
  background-color: white;
  z-index: 100;
`;

const HeaderRight = styled.ul`
  list-style: none;
  display: flex;
  gap: 10px;
  cursor: pointer;
`;

function Header() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [showRecentSearch, setShowRecentSearch] = useState(false);
  const [recentSearches, setRecentSearches] = useState(
    JSON.parse(localStorage.getItem("recentSearches")) || []
  );

  const goToMain = () => {
    navigate("/");
  };

  const goToLogin = () => {
    navigate("/login");
  };

  const goToSignup = () => {
    navigate("/signup");
  };

  const goToSearch = () => {
    navigate(`/search/${search}`);
  };

  const goToRecentBook = () => {
    navigate("/recentbook");
  };

  const searchChangeHandler = (event) => {
    const searchInput = event.target.value;
    setSearch(searchInput);
  };

  const searchKeyDownHandler = (event) => {
    if (event.key === "Enter") {
      goToSearch();
    }
  };

  const clearRecentSearches = () => {
    localStorage.removeItem("recentSearches");
    setRecentSearches([]); // 상태 업데이트로 컴포넌트 재렌더링
  };

  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === "recentSearches") {
        setRecentSearches(JSON.parse(event.newValue));
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <HeaderWrapper>
      <HeaderLeft>
        <span onClick={goToMain} style={{ cursor: "pointer" }}>
          TOWN LIBRARY
        </span>
        <HeaderSearch
          onKeyDown={searchKeyDownHandler}
          onFocus={() => {
            setShowRecentSearch(true);
          }}
        >
          <HeaderSearchInput type="text" onChange={searchChangeHandler} />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            style={{
              position: "absolute",
              bottom: "15px",
              right: "15px",
              color: "rgba(0,0,0,0.8)",
              cursor: "pointer",
            }}
            onClick={goToSearch}
          />
          <RecentSearch
            style={{ display: showRecentSearch ? "block" : "none" }}
            onMouseOver={() => {
              setShowRecentSearch(true);
            }}
            onMouseOut={() => {
              setShowRecentSearch(false);
            }}
          >
            <RecentSearchHeader>
              <span>최근 검색어</span>
              <span
                style={{ color: "rgba(0,0,0,0.5)", cursor: "pointer" }}
                onClick={clearRecentSearches}
              >
                전체 삭제
              </span>
            </RecentSearchHeader>
            <RecentSearchInfo>
              {recentSearches.length === 0 ? (
                <span>최근 검색어가 없습니다.</span>
              ) : (
                recentSearches.map((recentSearch, index) => (
                  <span
                    key={index}
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      navigate(`/search/${recentSearch}`);
                    }}
                  >
                    {recentSearch}
                  </span>
                ))
              )}
            </RecentSearchInfo>
          </RecentSearch>
        </HeaderSearch>
      </HeaderLeft>
      <HeaderRight>
        <li onClick={goToLogin}>로그인</li>
        <li onClick={goToSignup}>회원가입</li>
        <li>장바구니</li>
        <li onClick={goToRecentBook}>최근본도서</li>
      </HeaderRight>
    </HeaderWrapper>
  );
}

export default Header;
