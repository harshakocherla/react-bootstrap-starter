import React from "react";
import {
  CardBody,
  CardSubtitle,
  Form,
  FormGroup,
  Label,
  Col,
  Row,
  Input
} from "reactstrap";
import { formStyle } from "../../styles";

export const PersonalDetails = props => (
  <CardBody>
    <CardSubtitle>Personal Details</CardSubtitle>
    <Form style={formStyle}>
      <FormGroup>
        <Label for="firstName">First Name</Label>
        <Input type="text" name="firstName" id="firstName" placeholder="Matt" />
      </FormGroup>
      <FormGroup>
        <Label for="lastName">Last Name</Label>
        <Input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Granmoe"
        />
      </FormGroup>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="matt.granmoe@gmail.com"
        />
      </FormGroup>
      <FormGroup>
        <Label for="address">Address</Label>
        <Input
          type="text"
          name="address.addressline1"
          id="addressLine1"
          placeholder="address line 1"
        />
        <br />
        <Input
          type="text"
          name="address.addressline2"
          id="addressline2"
          placeholder="address line 2"
        />
        <br />
        <Row form>
          <Col md={4}>
            <Input type="text" name="city" id="city" placeholder="city" />
          </Col>
          <Col md={4}>
            <Input type="text" name="state" id="state" placeholder="state" />
          </Col>
          <Col md={4}>
            <Input type="text" name="zip" id="zip" placeholder="zip" />
          </Col>
        </Row>
      </FormGroup>
    </Form>
  </CardBody>
);
