import React from "react";
import {
  CardSubtitle,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import { formStyle } from "../../styles";

export default function AccountDetails(props) {
  return (
    <CardBody>
      <CardSubtitle>Account Details</CardSubtitle>
      <Form style={formStyle}>
        <FormGroup>
          <Label for="username">User Name</Label>
          <Input
            type="text"
            name="username"
            id="username"
            placeholder="username"
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="password"
          />
        </FormGroup>
        <FormGroup>
          <Label for="confirmPassword">Confirm Password</Label>
          <Input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="confirm password"
          />
        </FormGroup>
      </Form>
    </CardBody>
  );
}
