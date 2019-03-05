import React from "react";
import NavBar from "./nav-bar";
import { Jumbotron, Button } from "reactstrap";

export default function Header(props) {
  return (
    <React.Fragment>
      <NavBar />
      <Jumbotron style={{ height: "50%" }}>
        <h1 className="display-3">Hello Art Lovers!</h1>
      </Jumbotron>
    </React.Fragment>
  );
}
