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
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token === null) {
      this.setState({ isAuthenticated: false });
    } else {
      this.setState({ isAuthenticated: true });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { isAuthenticated } = this.state;
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
  }

  login = (userId, email, username) => {
    this.setState({
      isAuthenticated: true,
      userId,
      email,
      username
    });
  };

  render() {
    const { children } = this.props;
    return (
      <AuthContext.Provider value={{ ...this.state, login: this.login }}>
        {children}
      </AuthContext.Provider>
    );
  }
}

AuthController.propTypes = {
  children: Proptypes.any.isRequired,
};
