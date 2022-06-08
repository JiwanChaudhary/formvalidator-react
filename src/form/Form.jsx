import React, { useState } from "react";
import {
  Container,
  Heading,
  MainForm,
  Button,
  MessageContainer,
  Message,
} from "./Form.styled";
import ContainerForm from "./ContainerForm";

const Form = () => {
  const [message, setMeaasge] = useState(`Don't Hesitate`);
  return (
    <Container>
      <Heading>Sign Up!</Heading>
      <MainForm>
        <ContainerForm />
        <Button>Register</Button>
      </MainForm>

      <MessageContainer>
        <Message>{message}</Message>
      </MessageContainer>
    </Container>
  );
};

export default Form;
