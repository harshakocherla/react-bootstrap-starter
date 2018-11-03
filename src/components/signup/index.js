import React, { Component } from "react";
import { PersonalDetails } from "./personal-details";
import { AccountDetails } from "./account-details";
import { CardLink, Card, CardTitle, CardBody, Button } from "reactstrap";
import { cardWrapperStyle, buttonStyle } from "../../styles";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNext: false
    };
  }
  render() {
    const { showNext } = this.state;
    return (
      <Card style={cardWrapperStyle}>
        <CardBody>
          <CardTitle>Sign up</CardTitle>
          {showNext && (
            <CardLink
              onClick={() => {
                this.setState({ showNext: false });
              }}
            >
              {`<Back`}
            </CardLink>
          )}
        </CardBody>
        {!showNext && <PersonalDetails />}
        {showNext && <AccountDetails />}
        <Button
          color="primary"
          onClick={() => {
            showNext
              ? console.log("data saved")
              : this.setState({ showNext: true });
          }}
          style={buttonStyle}
        >
          {showNext ? "submit" : "next"}
        </Button>
      </Card>
    );
  }
}
