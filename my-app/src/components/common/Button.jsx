import styled from 'styled-components';

export default function Button({ content }) {
  return <StyledButton>{content}</StyledButton>;
}

const StyledButton = styled.button`
  margin-top: 5px;
  cursor: pointer;
  font-size: 15px;
  background: #5E5BFF;
  border: 1px solid #5E5BFF;
  color: #fff;
  padding: 10px 20px;
  width: 300px;
  height: 48px;
  border-radius: 10px;
`;
