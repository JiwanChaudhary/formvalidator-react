import React, { useState } from "react";
import { FormContainer, Label, Input } from "./Form.styled";

const Password = () => {
  const [inputPassword, setInputPassword] = useState([
    {
      password: "",
      confirmPassword: "",
    },
  ]);

  function handleInputText(index, event) {
    let data = [...inputPassword];
    data[index][event.target.name] = event.target.value;
    setInputPassword(data);
    const { password, confirmPassword } = inputPassword;
    if (password !== confirmPassword) {
      alert("Password do not match");
    } else return;
  }

  return (
    <>
      {inputPassword.map((input, index) => {
        return (
          <>
            <FormContainer key={index}>
              <Label htmlFor="password1">Password</Label>
              <Input
                name="password"
                type="password"
                id="password1"
                placeholder="Create Password (Min 8 characters)"
                required
                pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
                title="Please include 1 uppercase, 1 lower case and 1 number."
                value={input.password}
                onChange={(event) => handleInputText(index, event)}
              />
            </FormContainer>
            <FormContainer key={index}>
              <Label htmlFor="password2">Confirm Password</Label>
              <Input
                type="password"
                id="password2"
                name="confirmPassword"
                placeholder="Confirm Password"
                required
                pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
                value={input.confirmPassword}
                onChange={(event) => handleInputText(index, event)}
              />
            </FormContainer>
          </>
        );
      })}
    </>
  );
};

export default Password;
