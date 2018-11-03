// Import react
import React from "react";
import SignUp from "./components/signup";
import Login from "./components/login";
import Header from "./components/header-component";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSignUp: false,
      showLogin: false
    };
  }
  render() {
    const { showSignUp, showLogin } = this.state;

    return (
      <React.Fragment>
        <Header
          showSignUp={() => {
            this.setState({ showSignUp: true });
          }}
          showLogin={() => {
            this.setState({ showLogin: true });
          }}
        />
        {showSignUp && <SignUp />}
        {showLogin && <Login />}
      </React.Fragment>
    );
  }
}
export default App;
