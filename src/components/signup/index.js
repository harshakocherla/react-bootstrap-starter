import React, { useState } from "react";
import PersonalDetails from "./personal-details";
import AccountDetails from "./account-details";
import { CardLink, Card, CardTitle, CardBody, Button } from "reactstrap";
import { cardWrapperStyle, buttonStyle } from "../../styles";
import PaymentDetails from "./payment-details";
import { connect } from "react-redux";
import { saveDetails } from "../../state/actions";

function SignUp({ saveDetails }) {
  const [route, setRoute] = useState(1);
  const [signupDetails, setSignupDetails] = useState({});
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
      {route === 1 && (
        <PersonalDetails
          personalDetails={details =>
            setSignupDetails({ ...signupDetails, ...details })
          }
        />
      )}
      {route === 2 && (
        <PaymentDetails
          paymentDetails={details =>
            setSignupDetails({ ...signupDetails, ...details })
          }
        />
      )}
      {route === 3 && (
        <AccountDetails
          accountDetails={details =>
            setSignupDetails({ ...signupDetails, ...details })
          }
        />
      )}
      <Button
        color="primary"
        onClick={() => {
          route < 3 ? setRoute(route + 1) : saveDetails({ signupDetails });
        }}
        style={buttonStyle}
      >
        {route < 3 ? "next" : "submit"}
      </Button>
    </Card>
  );
}

export default connect(
  null,
  { saveDetails }
)(SignUp);
