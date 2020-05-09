import React, { useEffect, useState } from "react";
import Router from "next/router";
// import { useAuth0 } from "../auth/AuthController";
// import PropTypes from "prop-types";

const Opps = () => {
  // TODO: Add handling different transient errors
  const [callBackError, setCallBackError] = useState({});
  useEffect(() => {
    const { state } = window.history;
    if (state.options.error) {
      setCallBackError(state);
    } else {
      Router.push("/");
    }
  }, []);

  return (
    <>
      <h2>Error page</h2>
      <h3>Something went wrong please try logging in again, thank you!</h3>
      <pre>{JSON.stringify(callBackError, null, 2)}</pre>
    </>
  );
};

export default Opps;
