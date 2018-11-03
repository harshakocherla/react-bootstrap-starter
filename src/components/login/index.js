import React from "react";
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

const Login = props => (
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
        <Button
          color="primary"
          onClick={() => {
            console.log("data saved");
          }}
          style={buttonStyle}
        >
          login
        </Button>
      </Form>
    </CardBody>
  </Card>
);
export default Login;
