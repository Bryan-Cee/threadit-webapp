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
        <img
          src="./img/needle-with-thread-to-sew-clothes-1.svg"
          alt="threadit-logo"
          className={styles.logo}
        />
        <span>Threadit</span>
        <div style={{ margin: "auto" }}>
          <Search
            input={{ icon: "search", iconPosition: "left" }}
          />
        </div>
        <div>
          { Auth.isAuthenticated ? null : <Login />}
        </div>
      </div>
    </div>
  );
};

export default Header;
