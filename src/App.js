// Import react
import React, { useState } from "react";
import SignUp from "./components/signup";
import Login from "./components/login";
import Header from "./components/header-component";
export default function App() {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <React.Fragment>
      <Header
        showSignUp={() => {
          setShowSignUp(true);
          setShowLogin(false);
        }}
        showLogin={() => {
          setShowLogin(true);
          setShowSignUp(false);
        }}
      />
      {showSignUp && <SignUp />}
      {showLogin && <Login />}
    </React.Fragment>
  );
}
