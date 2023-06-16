import { useState } from "react";
import styled from "styled-components";
import usersData from "../data/usersData";

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
`;
//~styled-components

function Login() {
  const [email, setEmail] = useState("");
  const [loginValidation, setLoginValidation] = useState(false);
  const loginValidationCheck = () => {
    const emailCheck = usersData.some((userData) => {
      return email === userData.email;
    });
    setLoginValidation(emailCheck);
    console.log(loginValidation);
  };
  return (
    <div>
      <LoginBoxWrapper>
        <LoginBox>
          <LoginBoxTitle>LOGIN</LoginBoxTitle>
          <LoginBoxLabel htmlFor="id-input">Email</LoginBoxLabel>
          <LoginBoxInput
            type="text"
            name=""
            id="id-input"
            placeholder="Enter your email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <LoginBoxLabel htmlFor="password-input">PASSWORD</LoginBoxLabel>
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
