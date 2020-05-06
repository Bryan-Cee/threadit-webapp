import React from "react";
import { Button } from "semantic-ui-react";
import classes from "../styles/Header.scss";
import { useAuth0 } from "../auth/AuthController";
import { PrivateRoute, PublicRoute } from "./Routes";
import ThreaditLogo from "./Logo";

const Nav = () => {
  const {
    isAuthenticated, loginWithRedirect, logout
  } = useAuth0();
  return (
    <div className={classes.customHeader}>
      <div className={classes.customHeader__navbar}>
        <ThreaditLogo />
        <PublicRoute path="/public/outside" title="Outside" />
        <PrivateRoute path="/profile" title="Profile" />
        <PrivateRoute path="/threads" title="Threads" />
        <div>
          <Button
            inverted
            onClick={isAuthenticated ? logout : () => loginWithRedirect({ appState: window.history.state })}
          >
            {isAuthenticated ? "LOGOUT" : "LOGIN/SIGN UP"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
