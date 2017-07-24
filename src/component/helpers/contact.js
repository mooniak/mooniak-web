import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';

export const SubscribeInput = styled.input`
  width: 100%;
  border: none;
  border-bottom-style: solid;
  outline: none;
  padding: 5px;
  font-size: 14px;
  font-weight: 600;
  background-color: transparent;
  border-bottom-width: ${props => ((props.validated) ? '2px' : '0px')};
  border-bottom-color: '#333';
  -webkit-transition: border-bottom-width 0.5s;
  transition: border-bottom-width 0.5s;
  text-align: right;
`;

export const SubscribeRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SubmitButton = styled(FontAwesome)`
  cursor: pointer;
`;

export const validateEmail = (data) => {
  const validationOutput = {};

  const emailRegEx = /\S+@\S+\.\S+/;
  if (!emailRegEx.test(data)) {
    validationOutput.emailValid = false;
  } else {
    validationOutput.emailValid = true;
  }

  return validationOutput;
};
