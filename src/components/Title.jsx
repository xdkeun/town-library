import styled from "styled-components"
const TitleText = styled.h3`
  font-size: 25px;
  margin: 10px 0;
`;
function Title(props){
  return (
    <TitleText>{props.text}</TitleText>
  )
}
export default Title