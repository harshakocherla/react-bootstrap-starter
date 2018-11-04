import React, { useState } from "react";
import PersonalDetails from "./personal-details";
import AccountDetails from "./account-details";
import { CardLink, Card, CardTitle, CardBody, Button } from "reactstrap";
import { cardWrapperStyle, buttonStyle } from "../../styles";
import PaymentDetails from "./payment-details";

export default function SignUp() {
  const [route, setRoute] = useState(1);
  return (
    <Card style={cardWrapperStyle}>
      <CardBody>
        <CardTitle>Sign up</CardTitle>
        {route > 1 && (
          <CardLink
            onClick={() => {
              setRoute(route - 1);
            }}
          >
            {`<Back`}
          </CardLink>
        )}
      </CardBody>
      {route === 1 && <PersonalDetails />}
      {route === 2 && <PaymentDetails />}
      {route === 3 && <AccountDetails />}
      <Button
        color="primary"
        onClick={() => {
          route < 3 ? setRoute(route + 1) : console.log("data saved");
        }}
        style={buttonStyle}
      >
        {route < 3 ? "next" : "submit"}
      </Button>
    </Card>
  );
}
