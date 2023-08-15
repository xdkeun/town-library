import { useState } from "react";
import styled from "styled-components";
import UsersData from "../data/UsersData";
import { useNavigate } from "react-router-dom";

//styled-components~
const LoginBoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;
const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40vw;
  padding: 1vw 5vw 3vw 5vw;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 20px;
`;

const LoginBoxTitle = styled.h4`
  font-size: 30px;
  text-align: center;
  font-weight: 600;
`;

const LoginBoxLabel = styled.label`
  font-size: 20px;
  padding-bottom: 5px;
`;

const LoginBoxInput = styled.input`
  all: unset;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  margin-bottom: 20px;
`;

const LoginButton = styled.button`
  all: unset;
  background-color: cornflowerblue;
  color: white;
  font-size: 20px;
  width: 200px;
  height: 50px;
  border-radius: 30px;
  text-align: center;
  margin: 0 auto;
  cursor:pointer;
`;
//~styled-components

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loginValidation, setLoginValidation] = useState(false);
  const emailChangeHandler = (event) => {
    const emailInput = event.target.value;
    setEmail(emailInput)
  }
  const loginValidationCheck = () => {
    if (email && UsersData.some((userData) => email === userData.email)) {
      setLoginValidation(true);
      navigate("/");
    } else {
      setLoginValidation(false);
      alert("로그인에 실패했습니다.")
    }
  };
  return (
    <div>
      <LoginBoxWrapper>
        <LoginBox>
          <LoginBoxTitle>LOGIN</LoginBoxTitle>
          <LoginBoxLabel htmlFor="email-input">Email</LoginBoxLabel>
          <LoginBoxInput
            type="text"
            name=""
            id="email-input"
            placeholder="Enter your email"
            onChange={emailChangeHandler}
          />
          <LoginBoxLabel htmlFor="password-input">Password</LoginBoxLabel>
          <LoginBoxInput
            type="password"
            name=""
            id="password-input"
            placeholder="Enter your password"
          />
          <LoginButton onClick={loginValidationCheck}>LOGIN</LoginButton>
        </LoginBox>
      </LoginBoxWrapper>
    </div>
  );
}
export default Login;
