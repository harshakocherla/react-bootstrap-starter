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
import { FormStyle } from "../../styles";

export default function Personaldetails(props) {
  const { personalDetails } = props;
  return (
    <CardBody>
      <CardSubtitle>personal details</CardSubtitle>
      <Form style={FormStyle}>
        <FormGroup>
          <Label for="firstname">first name</Label>
          <Input
            type="text"
            placeholder="matt"
            onChange={({ target: { value } }) =>
              personalDetails({ firstname: value })
            }
          />
        </FormGroup>
        <FormGroup>
          <Label for="lastname">last name</Label>
          <Input
            type="text"
            placeholder="granmoe"
            onChange={({ target: { value } }) =>
              personalDetails({ lastname: value })
            }
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">email</Label>
          <Input
            type="email"
            placeholder="matt.granmoe@gmail.com"
            onChange={({ target: { value } }) =>
              personalDetails({ email: value })
            }
          />
        </FormGroup>
        <FormGroup>
          <Label for="address">address</Label>
          <Input
            type="text"
            placeholder="address line 1"
            onChange={({ target: { value } }) =>
              personalDetails({ addressline1: value })
            }
          />
          <br />
          <Input
            type="text"
            placeholder="address line 2"
            onChange={({ target: { value } }) =>
              personalDetails({ addressline2: value })
            }
          />
          <br />
          <Row Form>
            <Col md={4}>
              <Input
                type="text"
                placeholder="city"
                onChange={({ target: { value } }) =>
                  personalDetails({ city: value })
                }
              />
            </Col>
            <Col md={4}>
              <Input
                type="text"
                placeholder="state"
                onChange={({ target: { value } }) =>
                  personalDetails({ state: value })
                }
              />
            </Col>
            <Col md={4}>
              <Input
                type="text"
                placeholder="zip"
                onChange={({ target: { value } }) =>
                  personalDetails({ zip: value })
                }
              />
            </Col>
          </Row>
        </FormGroup>
      </Form>
    </CardBody>
  );
}
