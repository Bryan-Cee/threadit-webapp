import React from "react";
import PropTypes from "prop-types";

function Error({ statusCode }) {
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : "An error occurred on client"}
    </p>
  );
}

Error.propTypes = {
  statusCode: PropTypes.number.isRequired
};

Error.getInitialProps = ({ res, err }) => {
  let statusCode = res ? res.statusCode : err;
  statusCode = statusCode ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
