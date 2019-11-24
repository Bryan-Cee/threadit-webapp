import React, { useState, useContext, useEffect } from "react";
import { useMutation } from "@apollo/react-hooks";
import Router from "next/router";
import PropTypes from "prop-types";
import {
  Grid, Card, Feed, Icon,
} from "semantic-ui-react";
import { AuthContext } from "../../components/AuthController";

import { VERIFYACCOUNT } from "../../gql";
// TODO: check if the user is authenticated
//  the show the correct page
//  set the auth context with the authentication details
const Verify = ({ token }) => {
  const [verifyMutation, { loading }] = useMutation(VERIFYACCOUNT);
  const Auth = useContext(AuthContext);
  useEffect(() => {
    localStorage.setItem("token", token);
    const verifyAccount = async () => {
      try {
        const {
          data: {
            verifyAccount: { token: authToken, user }
          }
        } = await verifyMutation();
        // Set the authentication details for the user to
        // login the user
        localStorage.setItem("token", authToken);
        localStorage.setItem("userId", user.userId);
        localStorage.setItem("email", user.email);
        localStorage.setItem("username", user.username);
        localStorage.removeItem("verified");

        Auth.login(
          user.userId,
          user.email,
          user.username,
          authToken,
        );
        Auth.register(null);
        await Router.push("/");
      } catch (e) {
        // TODO: handle error in on Error
        console.error(e.message);
      }
    };
    verifyAccount();
  }, []);

  return loading
    ? <div>Loading</div>
    : <div>This is the verification page.</div>;
};

Verify.getInitialProps = async ({ query }) => ({ token: query.token });

Verify.propTypes = {
  token: PropTypes.string.isRequired,
};
export default Verify;
