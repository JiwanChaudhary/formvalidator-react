import React from "react";
import { FormContainer, Label, Input } from "./Form.styled";

const ContainerForm = () => {
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
          required
        />
      </FormContainer>
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

export default ContainerForm;
