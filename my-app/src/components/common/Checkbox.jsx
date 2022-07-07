import styled from 'styled-components';

export default function Checkbox({ type }) {
  return <RadioButton type={type}/>;
}

const RadioButton = styled.input`
    margin-top: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    margin-right: 74%;
`;
