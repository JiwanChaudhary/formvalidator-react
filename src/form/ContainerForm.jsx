import React,{useState} from "react";
import { FormContainer, Label, Input, Button, Message, MessageContainer } from "./Form.styled";
import Password from "./Password";

const ContainerForm = ({form}) => {
  const [state,setState] = useState(form);
  const [message, setMessage] = useState(`Don't hesitate`);

  function handleClick() {
    setState('Oops!')
    setMessage('Complete the form');
  }
 
  return (
    <>
      <FormContainer>
        <Label htmlFor="name">Full Name</Label>
        <Input
          type="text"
          id="name"
          name="name"
          placeholder="Full Name"
          required
          minlength="3"
          maxlength="50"
        />
      </FormContainer>
      <FormContainer>
        <Label htmlFor="number">Pnone Number</Label>
        <Input
          type="tel"
          id="number"
          name="phone"
          placeholder="+977-9862981619"
          required
          pattern="[+][0-9]{3}-[0-9]{10}"
        />
      </FormContainer>
      <FormContainer>
        <Label htmlFor="website">Website</Label>
        <Input
          type="url"
          id="website"
          name="website"
          placeholder="https://jeewan.chaudhary"
          required
        />
      </FormContainer>
      <FormContainer>
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="jeewanchaudhary6@gmail.com"
          pattern="[a-z0-9]+@[a-z]+\.[a-z]{2,3}"
          required
        />
      </FormContainer>
      <Password form={'Register'}/>
      <Button onClick={handleClick}>{state}</Button>
      <MessageContainer >
      <Message>{message}</Message>
      </MessageContainer>
    </>
  );
};

export default ContainerForm;
