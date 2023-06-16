import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 5px 15px;
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

const HeaderRight = styled.ul`
  list-style: none;
  display: flex;
  gap: 10px;
`;

function Header() {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate("/")
  };
  const goToLogin = () => {
    navigate("/login");
  };
  return (
    <HeaderWrapper>
      <HeaderLeft>
        <span onClick={goToMain}>TOWN LIBRARY</span>
        <HeaderSearch>
          <HeaderSearchInput type="text" />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            style={{
              position: "absolute",
              bottom: "15px",
              right: "15px",
              color: "rgba(0,0,0,0.8)",
            }}
          />
        </HeaderSearch>
      </HeaderLeft>
      <HeaderRight>
        <li onClick={goToLogin}>로그인</li>
        <li>회원가입</li>
        <li>고객센터</li>
        <li>이벤트</li>
      </HeaderRight>
    </HeaderWrapper>
  );
}
export default Header;