import React, { Component, createContext } from "react";
import Proptypes from "prop-types";

const authState = {
  username: null,
  email: null,
  isAuthenticated: null,
};

export const AuthContext = createContext(authState);

export default class AuthController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: null,
      username: null,
      email: null,
      isAuthenticated: null,
      verified: null,
      token: null,
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("token");
    const verified = localStorage.getItem("verified");
    if (token === null) {
      this.setState({ isAuthenticated: false, verified });
    } else {
      this.setState({ isAuthenticated: true, verified });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { isAuthenticated, verified } = this.state;
    if (prevState.isAuthenticated !== isAuthenticated) {
      const token = localStorage.getItem("token");
      if (token === null) {
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({ isAuthenticated: false });
      } else {
        const username = localStorage.getItem("username");
        const email = localStorage.getItem("email");
        const userId = localStorage.getItem("userId");
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({
          isAuthenticated: true, username, email, userId
        });
      }
    }

    if (prevState.verified !== verified) {
      const registerText = localStorage.getItem("verified");
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ verified: registerText });
    }
  }

  login = (userId, email, username, token) => {
    this.setState({
      isAuthenticated: true,
      userId,
      email,
      username,
      token
    });
  };

  register = (verified) => {
    this.setState({
      verified,
    });
  };

  render() {
    const { children } = this.props;
    return (
      <AuthContext.Provider
        value={{ ...this.state, login: this.login, register: this.register }}
      >
        {children}
      </AuthContext.Provider>
    );
  }
}

AuthController.propTypes = {
  children: Proptypes.any.isRequired,
};
