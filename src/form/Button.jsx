import React, { useState } from "react";
import { Button } from "./Form.styled";

const FormButton = () => {
    const [disabled, isDisabled] = useState(true);

  return <Button disabled={disabled}>Register</Button>;
};

export default FormButton;
