import { useState, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

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
  margin-top: 15px;
`;

const SignupBoxInput = styled.input`
  all: unset;
  width: 80%;
  height: 30px;
  padding: 5px;
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
  cursor: pointer;
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
  margin: 15px auto;
  cursor: pointer;
`;

const ValidationFalseText = styled.span`
  color: red;
  margin: 5px 0 0 5px;
`;

function Signup() {
  const [passwordToggle, setPasswordToggle] = useState(true);
  const [passwordType, setPasswordType] = useState("password");
  const passwordToggleButtonOnClick = () => {
    if (passwordToggle) {
      setPasswordToggle(false);
      setPasswordType("text");
    } else {
      setPasswordToggle(true);
      setPasswordType("password");
    }
  };
  const [repasswordToggle, setRepasswordToggle] = useState(true);
  const [repasswordType, setRepasswordType] = useState("password");
  const [email, setEmail] = useState("");
  const [emailValidation, setEmailValidation] = useState(true);
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [passwordValidation, setPasswordValidation] = useState(true);
  const [name, setName] = useState("");
  const [nameValidation, setNameValidation] = useState(true);
  const emailChangeHandler = (event) => {
    const emailInput = event.target.value;
    setEmail(emailInput);
    setEmailValidation(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)); //이메일
  };
  const passwordChangeHandler = (event) => {
    const passwordInput = event.target.value;
    setPassword(passwordInput);
  };
  const repasswordChangeHandler = (event) => {
    const repasswordInput = event.target.value;
    setRepassword(repasswordInput);
  };

  useEffect(() => {
    if (password === repassword) {
      setPasswordValidation(true);
    } else {
      setPasswordValidation(false);
    }
  }, [password, repassword]);

  const nameChangeHandler = (event) => {
    const nameInput = event.target.value;
    setName(nameInput);
  };
  useEffect(() => {
    if (name === "") {
      setNameValidation(false);
    } else {
      setNameValidation(true);
    }
  }, [name]);
  const repasswordToggleButtonOnClick = () => {
    if (repasswordToggle) {
      setRepasswordToggle(false);
      setRepasswordType("text");
    } else {
      setRepasswordToggle(true);
      setRepasswordType("password");
    }
  };
  const navigate = useNavigate();
  const validationCheck = () => {
    if (
      emailValidation &&
      email.length > 0 &&
      passwordValidation &&
      password.length > 0 &&
      name.length > 0 &&
      nameValidation
    ) {
      navigate("/");
    } else {
      alert("회원가입에 실패했습니다.");
    }
  };
  return (
    <SignupBoxWrapper>
      <SignupBox>
        <SignupBoxTitle>Sign Up</SignupBoxTitle>
        <SignupBoxLabel htmlFor="email-input">Email</SignupBoxLabel>
        <SignupBoxInput
          type="email"
          name=""
          id="email-input"
          onChange={emailChangeHandler}
        />
        {emailValidation ? (
          ""
        ) : (
          <ValidationFalseText>
            이메일을 올바르게 입력하세요
          </ValidationFalseText>
        )}
        <SignupBoxLabel htmlFor="password-input">Password</SignupBoxLabel>
        <PasswordInputWrapper>
          <PasswordInput
            type={passwordType}
            name=""
            id="password-input"
            placeholder="비밀번호 입력"
            onChange={passwordChangeHandler}
          />
          <PasswordToggleButton onClick={passwordToggleButtonOnClick}>
            {passwordToggle ? (
              <FontAwesomeIcon icon={faEye} />
            ) : (
              <FontAwesomeIcon icon={faEyeSlash} />
            )}
          </PasswordToggleButton>
        </PasswordInputWrapper>
        <PasswordInputWrapper>
          <SignupBoxInput
            type={repasswordType}
            name=""
            id="repassword-input"
            placeholder="비밀번호 재입력"
            onChange={repasswordChangeHandler}
          />
          <PasswordToggleButton onClick={repasswordToggleButtonOnClick}>
            {repasswordToggle ? (
              <FontAwesomeIcon icon={faEye} />
            ) : (
              <FontAwesomeIcon icon={faEyeSlash} />
            )}
          </PasswordToggleButton>
        </PasswordInputWrapper>
        {passwordValidation ? (
          ""
        ) : (
          <ValidationFalseText>
            비밀번호가 일치하지 않습니다.
          </ValidationFalseText>
        )}
        <SignupBoxLabel htmlFor="name-input">Name</SignupBoxLabel>
        <SignupBoxInput
          type="text"
          name=""
          id="name-input"
          onChange={nameChangeHandler}
        />
        {/* 이용약관동의 구현할 것 */}
        <SignupButton onClick={validationCheck}>Sign Up</SignupButton>
      </SignupBox>
    </SignupBoxWrapper>
  );
}
export default Signup;
