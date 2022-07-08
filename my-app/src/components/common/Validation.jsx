import styled from 'styled-components';

export default function Val(values) {
  const errors = {};
  if (!values.username) {
    errors.username = 'Username is required!!!';
  }
  if (!values.password) {
    errors.username = 'Password is required!!!';
  }
  return <StyledVal/>;
}

const StyledVal = styled.div`
    height: 48px;
    border: 1px solid red;
    border-radius: 10px;
`;
