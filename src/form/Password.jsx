import React, { useState } from "react";
import { FormContainer, Label, Input } from "./Form.styled";

const Password = () => {
  const [inputPassword, setInputPassword] = useState([
    {
      password: "",
      confirmPassword: "",
    },
  ]);

  function handleInputText(event) {
    const { name, value } = event.target;
    setInputPassword((prev) => ({
      ...prev,
      [name]: value,
    }));
    validatePassword(event);
  }

  function validatePassword(event) {


  }

  return (
    <>
      <FormContainer>
        <Label htmlFor="password1">Password</Label>
        <Input
          name="password"
          type="password"
          id="password1"
          placeholder="Create Password (Min 8 characters)"
          required
          pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
          title="Please include 1 uppercase, 1 lower case and 1 number."
          value={inputPassword.password}
          onChange={handleInputText}
          onBlur={validatePassword}
        />
      </FormContainer>
      <FormContainer>
        <Label htmlFor="password2">Confirm Password</Label>
        <Input
          type="password"
          id="password2"
          name="confirmPassword"
          placeholder="Confirm Password"
          required
          pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
          value={inputPassword.confirmPassword}
          onChange={handleInputText}
          onBlur={validatePassword}
        />
      </FormContainer>
    </>
  );
};

export default Password;
