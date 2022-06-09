import React from "react";
import { FormContainer, Label, Input } from "./Form.styled";

const Password = () => {
  return (
    <>
      <FormContainer>
        <Label htmlFor="password1">Password</Label>
        <Input
          type="password"
          id="password1"
          placeholder="Create Password (Min 8 characters)"
          required
          pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
          title="Please include 1 uppercase, 1 lower case and 1 number."
        />
      </FormContainer>
      <FormContainer>
        <Label htmlFor="password2">Confirm Password</Label>
        <Input
          type="password"
          id="password2"
          name="password"
          placeholder="Confirm Password"
          required
          pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
        />
      </FormContainer>
    </>
  );
};

export default Password;
