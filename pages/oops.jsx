import React, { useEffect, useState } from "react";
// import PropTypes from "prop-types";
// import { useRouter } from "next/router";

const Opps = () => {
  const [callBackError, setCallBackError] = useState({});
  useEffect(() => {
    const { state } = window.history;
    if (state.options.error) {
      setCallBackError(state);
    }
  }, []);
  return (
    <>
      <h2>Error page</h2>
      <hr />
      <h3>Something went wrong please try logging in again, thank you!</h3>
      <hr />
      <pre>{JSON.stringify(callBackError, null, 2)}</pre>
    </>
  );
};

export default Opps;
