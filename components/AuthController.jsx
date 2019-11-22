import React, { Component, createContext } from "react";

const authState = {
  username: null,
  email: null,
  isAuthenticated: null,
};

export const AuthContext = createContext(authState);
// export const AuthRef = createRef();
export default class AuthController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      email: null,
      isAuthenticated: null,
    };
  }


  componentDidMount() {
    console.log("Authentincation checking in Mount");
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
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({ isAuthenticated: true });
      }
    }
  }

  login = () => {
    this.setState({ isAuthenticated: true });
  };

  render() {
    const { children } = this.props;
    return (
      <AuthContext.Provider value={
        { ...this.state, login: this.login }
      }
      >
        {children}
      </AuthContext.Provider>
    );
  }
}
