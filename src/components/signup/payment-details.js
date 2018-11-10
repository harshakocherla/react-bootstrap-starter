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

export default function PaymentDetails(props) {
  const [nameOnCard, setNameOnCard] = useState("");
  const [cardNumber, setCardNumer] = useState("");
  const [cvv, setCvv] = useState("");
  const [zip, setZip] = useState("");
  props.paymentDetails({
    nameOnCard,
    cardNumber,
    cvv,
    zip
  });
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
            onChange={({ target: { value } }) => setNameOnCard(value)}
            placeholder="Matt Granmoe"
          />
        </FormGroup>
        <FormGroup>
          <Label for="cardNumber">Card Number</Label>
          <Input
            type="text"
            name="cardNumber"
            id="cardNumber"
            onChange={({ target: { value } }) => setCardNumer(value)}
            placeholder="xxxx-xxxx-xxxx-xxxx"
          />
        </FormGroup>
        <Row form>
          <Col md={6}>
            <Label for="cvv">CVV</Label>
            <Input
              type="text"
              name="cvv"
              id="cvv"
              placeholder="cvv"
              onChange={({ target: { value } }) => setCvv(value)}
            />
          </Col>
          <Col md={6}>
            <Label for="zip">ZIP</Label>
            <Input
              type="text"
              name="zip"
              id="zip"
              placeholder="zip"
              onChange={({ target: { value } }) => setZip(value)}
            />
          </Col>
        </Row>
      </Form>
    </CardBody>
  );
}
