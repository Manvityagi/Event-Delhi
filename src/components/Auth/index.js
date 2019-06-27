import React from "react";
import { Login, SignUp } from "./components";

class Auth extends React.Component {
  state = {
    isLogin: true
  };

  toggleScreen = () => {
    this.setState(prevState => ({
      isLogin: !prevState.isLogin
    }));
  };

  render() {
    if (!this.state.isLogin) {
      return <SignUp toggleScreen={this.toggleScreen} />;
    }
    return <Login toggleScreen={this.toggleScreen} />;
  }
}

export default Auth;
