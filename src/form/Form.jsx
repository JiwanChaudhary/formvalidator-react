import React from "react";
import {
  Container,
  Heading,
  MainForm,
} from "./Form.styled";
import ContainerForm from "./ContainerForm";

const Form = () => {
  
  return (
    <Container>
      <Heading>Sign Up!</Heading>
      <MainForm>
        <ContainerForm form={'Register'}/>
      </MainForm>
    </Container>
  );
};

export default Form;
