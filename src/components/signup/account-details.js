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
  const { accountDetails } = props;
  return (
    <CardBody>
      <CardSubtitle>Account Details</CardSubtitle>
      <Form style={formStyle}>
        <FormGroup>
          <Label for="username">User Name</Label>
          <Input
            type="text"
            onChange={({ target: { value } }) =>
              accountDetails({ username: value })
            }
            placeholder="username"
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            onChange={({ target: { value } }) =>
              accountDetails({ password: value })
            }
            placeholder="password"
          />
        </FormGroup>
        <FormGroup>
          <Label for="confirmPassword">Confirm Password</Label>
          <Input
            type="password"
            onChange={({ target: { value } }) =>
              accountDetails({ confirmpassword: value })
            }
            placeholder="confirm password"
          />
        </FormGroup>
      </Form>
    </CardBody>
  );
}
