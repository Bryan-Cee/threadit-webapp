import React from "react";
import PropTypes from "prop-types";
import CustomHeader from "./Header";

const styles = require("../styles/Layout.scss");
// TODO:
//  - Add the main container styling
//  - Specify fonts
//  - Consider using grid to structure the layout.
const Layout = (props) => {
  const { children } = props;
  return (
    <div>
      <CustomHeader />
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
