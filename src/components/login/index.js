import React, { useState } from "react";
import {
  CardTitle,
  Card,
  Button,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

import { cardWrapperStyle, buttonStyle } from "../../styles";

export default function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Card style={cardWrapperStyle}>
      <CardBody>
        <CardTitle>Login</CardTitle>
      </CardBody>
      <CardBody>
        <Form style={{ width: "75%", margin: "auto" }}>
          <FormGroup>
            <Label for="username">User Name</Label>
            <Input
              type="text"
              placeholder="username"
              onChange={({ target: { value } }) => setUsername(value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              placeholder="password"
              onChange={({ target: { value } }) => setPassword(value)}
            />
          </FormGroup>
        </Form>
      </CardBody>
      <Button
        color="primary"
        onClick={() => {
          console.log({ username, password });
        }}
        style={buttonStyle}
      >
        login
      </Button>
    </Card>
  );
}
