import React, { useState } from "react";
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

export default function PersonalDetails(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [addressline1, setAddressline1] = useState("");
  const [addressline2, setAddressline2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  props.personalDetails({
    firstName,
    lastName,
    email,
    address: {
      addressline1,
      addressline2,
      city,
      state,
      zip
    }
  });
  return (
    <CardBody>
      <CardSubtitle>Personal Details</CardSubtitle>
      <Form style={formStyle}>
        <FormGroup>
          <Label for="firstName">First Name</Label>
          <Input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="Matt"
            onChange={({ target: { value } }) => setFirstName(value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="lastName">Last Name</Label>
          <Input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Granmoe"
            onChange={({ target: { value } }) => setLastName(value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="matt.granmoe@gmail.com"
            onChange={({ target: { value } }) => setEmail(value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="address">Address</Label>
          <Input
            type="text"
            name="address.addressline1"
            id="addressLine1"
            placeholder="address line 1"
            onChange={({ target: { value } }) => setAddressline1(value)}
          />
          <br />
          <Input
            type="text"
            name="address.addressline2"
            id="addressline2"
            placeholder="address line 2"
            onChange={({ target: { value } }) => setAddressline2(value)}
          />
          <br />
          <Row form>
            <Col md={4}>
              <Input
                type="text"
                name="city"
                id="city"
                placeholder="city"
                onChange={({ target: { value } }) => setCity(value)}
              />
            </Col>
            <Col md={4}>
              <Input
                type="text"
                name="state"
                id="state"
                placeholder="state"
                onChange={({ target: { value } }) => setState(value)}
              />
            </Col>
            <Col md={4}>
              <Input
                type="text"
                name="zip"
                id="zip"
                placeholder="zip"
                onChange={({ target: { value } }) => setZip(value)}
              />
            </Col>
          </Row>
        </FormGroup>
      </Form>
    </CardBody>
  );
}
