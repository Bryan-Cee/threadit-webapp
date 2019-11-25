import React, { useState, useEffect } from "react";
import {
  Form, Message, Header, Button, Dimmer, Loader
} from "semantic-ui-react";
import { useMutation } from "@apollo/react-hooks";

import { RESETPASSWORD } from "../../gql";
import { isValidEmail } from "../../helpers";

import styles from "../../styles/ResetPassword.scss";

const Password = () => {
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState("");
  const [disabled, setDisabled] = useState(true);

  const [resetPasswordMutation, { loading }] = useMutation(RESETPASSWORD);

  useEffect(() => {
    if (isValidEmail(email)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [email]);
  const resetPasswordRequest = () => resetPasswordMutation({
    variables: { email }
  }).then(({ data }) => {
    setEmailSent(data.resetRequest);
  }).catch((err) => {
    console.log(err);
  });

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
      { emailSent
        ? (
          <Message size="huge" positive>
            <Message.Header>Success</Message.Header>
            <p>
              {emailSent}
            </p>
          </Message>
        ) : (
          <div className={styles.center}>
            <Header as="h2">Forgot Password</Header>
            <Form error onSubmit={resetPasswordRequest}>
              <Form.Field>
                <Form.Field>
                  <label>Email</label>
                  <input
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    type="email"
                  />
                </Form.Field>
              </Form.Field>
              <Button fluid disabled={disabled} type="submit">
                Reset Password
              </Button>
            </Form>
          </div>
        ) }
    </div>
  );
};

export default Password;
