import styled from 'styled-components';

export default function Input({ type }) {
  return <StyledInput type={type} required/>;
}

const StyledInput = styled.input`
    height: 48px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 10px;
`;
