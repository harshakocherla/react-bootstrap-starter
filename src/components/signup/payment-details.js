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

export default function PaymentDetails(props) {
  return (
    <CardBody>
      <CardSubtitle>Payment Details</CardSubtitle>
      <Form style={formStyle}>
        <FormGroup>
          <Label for="nameOnCard">Name on card</Label>
          <Input
            type="text"
            name="nameOnCard"
            id="nameOnCard"
            placeholder="Matt Granmoe"
          />
        </FormGroup>
        <FormGroup>
          <Label for="cardNumber">Card Number</Label>
          <Input
            type="text"
            name="cardNumber"
            id="cardNumber"
            placeholder="xxxx-xxxx-xxxx-xxxx"
          />
        </FormGroup>
        <Row form>
          <Col md={4}>
            <Label for="cvv">CVV</Label>
            <Input type="text" name="cvv" id="cvv" placeholder="cvv" />
          </Col>
          <Col md={4}>
            <Label for="zip">ZIP</Label>
            <Input type="text" name="zip" id="zip" placeholder="zip" />
          </Col>
        </Row>
      </Form>
    </CardBody>
  );
}
