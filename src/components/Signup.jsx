import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const SignupBoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

const SignupBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40vw;
  padding: 1vw 5vw 3vw 5vw;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 20px;
`;

const SignupBoxTitle = styled.h4`
  font-size: 30px;
  text-align: center;
  font-weight: 600;
`;

const SignupBoxLabel = styled.label`
  font-size: 20px;
  margin-bottom: 5px;
`;

const SignupBoxInput = styled.input`
  all: unset;
  width: 80%;
  height: 30px;
  padding: 5px;
  margin-bottom: 15px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.3);
`;

const PasswordInputWrapper = styled.div`
  position: relative;
`;
const PasswordToggleButton = styled.button`
  all: unset;
  position: absolute;
  right: 20%;
  top: 25%;
  color: rgba(0, 0, 0, 0.6);
`;

const PasswordInput = styled.input`
  all: unset;
  width: 80%;
  height: 30px;
  padding: 5px;
  margin-bottom: 5px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.3);
`;

const SignupButton = styled.button`
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

function Signup() {
  return (
    <SignupBoxWrapper>
      <SignupBox>
        <SignupBoxTitle>Sign Up</SignupBoxTitle>
        <SignupBoxLabel htmlFor="email-input">Email</SignupBoxLabel>
        <SignupBoxInput
          type="email"
          name=""
          id="email-input"
          placeholder="영문, 숫자 6~12자"
        />
        <SignupBoxLabel htmlFor="password-input">Password</SignupBoxLabel>
        <PasswordInputWrapper>
          <PasswordInput
            type="password"
            name=""
            id="password-input"
            placeholder="영문, 숫자, 특수문자 10~15자"
          />
          <PasswordToggleButton>
            <FontAwesomeIcon icon={faEye} />
          </PasswordToggleButton>
          {/* <FontAwesomeIcon icon={faEyeSlash} /> 눈 감기는 아이콘*/}
        </PasswordInputWrapper>
        <PasswordInputWrapper>
          <SignupBoxInput
            type="password"
            name=""
            id="password-input"
            placeholder="비밀번호 재입력"
          />
          <PasswordToggleButton>
            <FontAwesomeIcon icon={faEye} />
          </PasswordToggleButton>
        </PasswordInputWrapper>
        <SignupBoxLabel htmlFor="name-input">Name</SignupBoxLabel>
        <SignupBoxInput type="text" name="" id="name-input" />
        {/* 이용약관동의 구현할 것 */}
        <SignupButton>Sign Up</SignupButton>
      </SignupBox>
    </SignupBoxWrapper>
  );
}
export default Signup;
