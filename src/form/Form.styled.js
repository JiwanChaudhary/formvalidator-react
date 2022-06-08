import styled from "styled-components";

export const Container = styled.div`
  width: 400px;
  height: 530px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 5px 30px 10px rgba(0, 0, 0, 0.4);
`;
export const Heading = styled.h1``;

export const MainForm = styled.form`
  width: 90%;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 65px;
`;

export const Label = styled.label`
  position: relative;
  bottom: 3px;
`;

export const Input = styled.input`
  width: 100%;
  height: 34px;
  padding: 5px;
  border: 1px solid #000;
  border-radius: 5px;
  outline: none;

  &:valid {
    border: 1px solid green;
  }

  &:invalid {
    border: 1px solid red;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  color: #fff;
  background-color: #000;
  border: none;
  border-radius: 5px;
  width: 100%;
  height: 40px;
  padding: 5px;
  font-size: 20px;
  font-family: "Sen", sans-serif;
  letter-spacing: 2px;
  margin-top: 5px;

  &:hover {
    filter: brightness(200%);
    background: rgb(20, 20, 20);
  }

  &:focus {
    outline: none;
  }
`;

export const MessageContainer = styled.div`
  border: 1px solid #000;
  width: 90%;
  margin-top: 10px;
  border-radius: 5px;
  padding: 5px;
  display: flex;
  justify-content: center;
  color: #000;
`;
export const Message = styled.h3``;
