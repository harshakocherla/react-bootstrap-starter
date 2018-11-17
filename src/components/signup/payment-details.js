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
  const { paymentDetails } = props;
  return (
    <CardBody>
      <CardSubtitle>Payment Details</CardSubtitle>
      <Form style={formStyle}>
        <FormGroup>
          <Label for="nameOnCard">Name on card</Label>
          <Input
            type="text"
            onChange={({ target: { value } }) =>
              paymentDetails({ nameoncard: value })
            }
            placeholder="Matt Granmoe"
          />
        </FormGroup>
        <FormGroup>
          <Label for="cardNumber">Card Number</Label>
          <Input
            type="text"
            onChange={({ target: { value } }) =>
              paymentDetails({ cardNumber: value })
            }
            placeholder="xxxx-xxxx-xxxx-xxxx"
          />
        </FormGroup>
        <Row form>
          <Col md={6}>
            <Label for="cvv">CVV</Label>
            <Input
              type="text"
              placeholder="cvv"
              onChange={({ target: { value } }) =>
                paymentDetails({ cvv: value })
              }
            />
          </Col>
          <Col md={6}>
            <Label for="zip">ZIP</Label>
            <Input
              type="text"
              placeholder="zip"
              onChange={({ target: { value } }) =>
                paymentDetails({ zip: value })
              }
            />
          </Col>
        </Row>
      </Form>
    </CardBody>
  );
}
