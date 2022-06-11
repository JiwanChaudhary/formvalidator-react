import React, { useState } from "react";
import {
  Container,
  Heading,
  MainForm,
  MessageContainer,
  Message,
} from "./Form.styled";
import ContainerForm from "./ContainerForm";
import FormButton from "./Button";

const Form = () => {
  const [message, setMessage] = useState(`Don't Hesitate`);
  return (
    <Container>
      <Heading>Sign Up!</Heading>
      <MainForm>
        <ContainerForm />
        <FormButton />
      </MainForm>

      <MessageContainer>
        <Message>{message}</Message>
      </MessageContainer>
    </Container>
  );
};

export default Form;
