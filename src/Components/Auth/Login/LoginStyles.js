import styled from "styled-components";

const LoginContainer = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const LoginContent = styled.div`
  width: 100%;
  max-width: 600px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  align-self: center;
`;

const WelcomeText = styled.h2`
  margin: 3rem 0 2rem 0;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  /* height: 20%; */
  width: 100%;
`;

const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginWith = styled.h5`
  cursor: pointer;
`;

const HorizontalRule = styled.hr`
  width: 90%;
  height: 0.3rem;
  border-radius: 0.8rem;
  border: none;
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  background-color: #ebd0d0;
  margin: 1.5rem 0 1rem 0;
  backdrop-filter: blur(25px);
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 2rem 0 3rem 0;
  width: 80%;
`;

const ForgotPassword = styled.h4`
  cursor: pointer;
`;

const BgImage = styled.div`
  background-image: url("/images/9263.jpeg");
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  opacity: 0.5;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
  height: 100%;
`;

function Input({ type, placeholder, onChange }) {
  return (
    <StyledInput type={type} placeholder={placeholder} onChange={onChange} />
  );
}

const StyledInput = styled.input`
  background: rgba(255, 255, 255, 0.35);
  border-radius: 1rem;
  width: 80%;
  padding: 1rem;
  border: none;
  outline: none;
  margin: 5px;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  &:focus {
    display: inline-block;
    backdrop-filter: blur(12rem);
    /* border-radius: 2rem; */
  }
  &::placeholder {
    color: white;
    font-weight: 100;
    font-size: 1rem;
  }
`;

function Button({ content, onClick }) {
  return <StyledButton onClick={onClick}>{content}</StyledButton>;
}

const StyledButton = styled.button`
  background: red;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 65%;
  height: 3rem;
  border: none;
  margin: 5px;
  color: white;
  border-radius: 2rem;
  cursor: pointer;
`;

export {
  BgImage,
  LoginContainer,
  LoginContent,
  WelcomeText,
  InputContainer,
  ButtonContainer,
  LoginWith,
  HorizontalRule,
  IconsContainer,
  ForgotPassword,
  Input,
  Button,
  StyledButton,
  StyledInput,
};
