import React from "react";
import PropTypes from "prop-types";
import Nav from "./Nav";

const styles = require("../styles/Layout.scss");

const Layout = (props) => {
  const { children } = props;
  return (
    <div>
      <Nav />
      <div className={styles.center}>
        {children}
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Layout;
