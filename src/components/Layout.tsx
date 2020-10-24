import React from 'react';
import BackToTop from "./NavMenu";

const Layout = ({ children }: any) => {
    return (
      <>
          <BackToTop>
              {children}
          </BackToTop>
      </>
    );
};

export default Layout;
