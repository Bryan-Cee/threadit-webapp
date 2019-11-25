import React, { useContext } from "react";
import { Search } from "semantic-ui-react";
import styles from "../styles/Header.scss";
import Login from "./Login";
import { AuthContext } from "./AuthController";

const Header = () => {
  const Auth = useContext(AuthContext);
  return (
    <div className={styles.customHeader}>
      <div className={styles.customHeader__navbar}>
        <a href="/" className={styles.logo}>
          <img
            src="/img/needle-with-thread-to-sew-clothes-1.svg"
            alt="threadit-logo"
            className={styles.logoPic}
          />
          <span>Threadit</span>
        </a>
        <div style={{ margin: "auto" }}>
          { Auth.isAuthenticated ? (
            <Search
              input={{ icon: "search", iconPosition: "left" }}
            />
          ) : null }
        </div>
        <div>
          { Auth.isAuthenticated
            ? <h5>Welcome to Threadit</h5>
            : <Login />}
        </div>
      </div>
    </div>
  );
};

export default Header;
