import React from "react";
import NavBar from "./nav-bar";
import { Jumbotron, Button } from "reactstrap";

const Header = props => (
  <React.Fragment>
    <NavBar showSignUp={props.showSignUp} showLogin={props.showLogin} />
    <Jumbotron style={{ height: "50%" }}>
      <h1 className="display-3">Hello Art Lovers!</h1>
    </Jumbotron>
  </React.Fragment>
);
export default Header;
