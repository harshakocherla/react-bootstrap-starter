import React, { useState } from "react";
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
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  props.accountDetails({
    username,
    password,
    confirmPassword
  });
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
            onChange={({ target: { value } }) => setUsername(value)}
            placeholder="username"
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            onChange={({ target: { value } }) => setPassword(value)}
            placeholder="password"
          />
        </FormGroup>
        <FormGroup>
          <Label for="confirmPassword">Confirm Password</Label>
          <Input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            onChange={({ target: { value } }) => setConfirmPassword(value)}
            placeholder="confirm password"
          />
        </FormGroup>
      </Form>
    </CardBody>
  );
}
