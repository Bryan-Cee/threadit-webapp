import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import {
  Form, Button, Message, Icon, Dimmer, Loader
} from "semantic-ui-react";
import { useMutation } from "@apollo/react-hooks";

import { RESETPASSWORD } from "../../gql";
import styles from "../../styles/ResetPassword.scss";

import { isValidPassword } from "../../helpers";

const ResetPassword = ({ token }) => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [resetPasswordSuccess, setResetPasswordSuccess] = useState({
    message: null,
    success: null,
  });
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState("");
  const initialRender = useRef(true);

  const [resetPasswordMutation, {
    called,
    loading
  }] = useMutation(RESETPASSWORD, {
    context: {
      headers: {
        authorization: `Bearer ${token}`
      }
    }
  });

  useEffect(() => {
    if (!initialRender.current) {
      const pass = isValidPassword(newPassword);
      if (pass === "Valid" && newPassword === confirmNewPassword) {
        setDisabled(false);
        setError("");
      } else {
        if (pass === "Valid") {
          setError("Passwords do not match");
        } else {
          setError(pass);
        }
        setDisabled(true);
      }
    } else {
      initialRender.current = false;
    }
  }, [newPassword, confirmNewPassword]);

  useEffect(() => {
    if (!resetPasswordSuccess.success || resetPasswordSuccess.success) {
      setConfirmNewPassword("");
      setNewPassword("");
      initialRender.current = true;
      setError("");
    }
  }, [resetPasswordSuccess]);

  const showPassword = () => {
    if (passwordType === "text") {
      setPasswordType("password");
    } else {
      setPasswordType("text");
    }
  };
  const sendNewPassword = async () => {
    const { data: { resetPassword }} = await resetPasswordMutation({
      variables: { password: newPassword }
    });

    setResetPasswordSuccess(resetPassword);
  };

  return loading ? (
    <Dimmer active>
      <Loader
        size="large"
        inverted
        content="Sending password reset request..."
      />
    </Dimmer>
  ) : (
    <div className={styles.resetForm}>
      <Form
        error
        style={{ width: "300px" }}
        onSubmit={() => sendNewPassword()}
      >
        <Form.Field>
          <label>New Password</label>
          <div style={{ position: "relative" }} className={styles.noSelect}>
            <input
              type={passwordType}
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => {
                setNewPassword(e.target.value);
              }}
            />
            <Icon
              name="eye"
              style={{
                position: "absolute",
                right: "10px",
                top: "10px"
              }}
              onClick={showPassword}
            />
          </div>
          { error && (
            <Message
              error
              content={
                <span>{error}</span>
              }
            />
          ) }
        </Form.Field>
        <Form.Field>
          <label>Confirm Password</label>
          <input
            type={passwordType}
            value={confirmNewPassword}
            placeholder="Confirm Password"
            onChange={(e) => {
              setConfirmNewPassword(e.target.value);
            }}
          />
        </Form.Field>
        <Button type="submit" disabled={disabled}>Submit</Button>
      </Form>
      { called && !loading ? (
        <>
          { resetPasswordSuccess.success
            ? (
              <Message
                success
                content={<span>{resetPasswordSuccess.message}</span>}
              />
            ) : (
              <Message
                error
                content={<span>{resetPasswordSuccess.message}</span>}
              />
            )}
        </>
      ) : null }
    </div>
  );
};

ResetPassword.propTypes = {
  token: PropTypes.string.isRequired,
};

ResetPassword.getInitialProps = async ({ query }) => (
  { id: query.id, token: query.token }
);

export default ResetPassword;
