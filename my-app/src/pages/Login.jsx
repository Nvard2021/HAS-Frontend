import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import styled from 'styled-components';

import Button from '../components/common/Button.jsx';
import Input from '../components/common/Input.jsx';
import Checkbox from '../components/common/Checkbox.jsx';

function App() {
  // const [errorMessages, setErrorMessages] = useState({});
  // const [isSubmitted, setIsSubmitted] = useState(false);
  // const database = [
  //   {
  //     username: 'user',
  //     password: 'pass',
  //   },
  // ];
  // const errors = {
  //   uname: 'Please enter a valid username. ',
  //   pass: 'Please enter a valid password',
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   const { uname, pass } = document.forms[0];

  //   const userData = database.find((user) => user.username === uname.value);

  //   if (userData) {
  //     if (userData.password !== pass.value) {
  //       setErrorMessages({ name: 'pass', message: errors.pass });
  //     } else {
  //       setIsSubmitted(true);
  //     }
  //   } else {
  //     setErrorMessages({ name: 'uname', message: errors.uname });
  //   }
  // };
  // const renderErrorMessage = (name) => name === errorMessages.name && (
  //   <div className="error">{errorMessages.message}</div>
  // );
  return (
    <MainContainer>
      <FormComponent>
        <LogoImg>IMG</LogoImg>
        <InputContainer>
          <InputText>Username</InputText>
          <Input type="text"/>
          {/* {renderErrorMessage('uname')} */}
          <InputText>Password</InputText>
          <Input type="password"/>
          {/* {renderErrorMessage('pass')} */}
        </InputContainer>
        <CheckboxContainer>
          <Checkbox type="radio"/>
        </CheckboxContainer>
        <ButtonContainer>
          <Button content="LOGIN" />
        </ButtonContainer>
      </FormComponent>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  font-family: sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  height: 100vh;
  background-color: #f8f9fd;
`;

const LogoImg = styled.h3`
  margin: 3rem 0 2rem 0;
  color: #000;
`;
const InputText = styled.h5`
  margin: 2px;
  color: #000;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 144px;
  gap: 8px;
  margin: 10px;
  `;

const FormComponent = styled.form`
  background-color: white;
  padding: 2rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  `;
const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 300px;
  height: 28px;
  gap: 8px;
  margin-left: 7px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 300px;
  height: 48px;
  margin-left: 10px;
`;

export default App;
