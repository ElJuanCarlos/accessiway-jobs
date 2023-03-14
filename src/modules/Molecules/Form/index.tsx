import React from "react";
import { Button } from "@/modules/Atoms";
import { StyledForm, Input } from "./style";

const Form: React.FC = () => {
  return (
    <StyledForm action="/api/form" method="post">
      <label htmlFor="first">First Name</label>
      <Input type="text" id="first" name="first" required />
      <label htmlFor="last">Last Name</label>
      <Input type="text" id="last" name="last" required />
      <Button buttonType="primary" type="submit">
        Submit
      </Button>
    </StyledForm>
  );
};

export default Form;
