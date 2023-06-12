import Header from "./Header";
import styled from "styled-components";

const LoginBoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;
const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 40vw;
  padding: 5vw 10vw;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 20px;
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
  width: 200px;
  height: 30px;
  border-radius: 30px;
  text-align: center;
  margin: 0 auto;
`;
function Login() {
  return (
    <div>
      <Header />
      <LoginBoxWrapper>
        <LoginBox>
          <h4>LOGIN</h4>
          <LoginBoxLabel htmlFor="id-input">ID</LoginBoxLabel>
          <LoginBoxInput
            type="text"
            name=""
            id="id-input"
            placeholder="Enter your id"
          />
          <LoginBoxLabel htmlFor="password-input">PASSWORD</LoginBoxLabel>
          <LoginBoxInput
            type="password"
            name=""
            id="password-input"
            placeholder="Enter your password"
          />
          <LoginButton>LOGIN</LoginButton>
        </LoginBox>
      </LoginBoxWrapper>
    </div>
  );
}
export default Login;
