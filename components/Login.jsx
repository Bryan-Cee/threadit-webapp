import React, { useState, useContext } from "react";
import { useMutation } from "@apollo/react-hooks";
import {
  Button, Form, Grid, Message, Modal
} from "semantic-ui-react";
import styles from "../styles/Register.scss";
import { LOGIN, REGISTER } from "../gql";
import { AuthContext } from "./AuthController";

const Login = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [register, setRegister] = useState(false);

  const mutation = register ? REGISTER : LOGIN;
  const [AuthMutation, { loading: mutationLoading }] = useMutation(mutation);
  const Auth = useContext(AuthContext);
  const onOpen = () => { setOpen(true); };
  const onClose = () => { setOpen(false); };

  const signUp = () => AuthMutation({ variables: { email, password } })
    .then(({ data }) => {
      localStorage.setItem("token", data.login.token);
      localStorage.setItem("email", data.login.user.email);
      localStorage.setItem("username", data.login.user.username);

      // Reset the login modal states
      setOpen(false);
      setError("");
      setEmail("");
      setPassword("");
      if (error) {
        setError("");
      }

      // Update the AuthContext
      Auth.login();
    })
    .catch((err) => {
      if (err && err.graphQLErrors) {
        err.graphQLErrors.map((e) => {
          if (e.extensions.authenticationErrors) {
            setError(e.extensions.authenticationErrors);
          }
        });
      }
    });

  return (
    <Modal
      trigger={<Button inverted>LOGIN/REGISTER</Button>}
      closeIcon
      closeOnDimmerClick={false}
      onClose={onClose}
      onOpen={onOpen}
      open={open}
    >
      <Modal.Content className={styles.zeroPadding}>
        <Grid stretched>
          <Grid.Row className={styles.zeroPadding}>
            <Grid.Column width={6}>
              <div className={styles.side} />
            </Grid.Column>
            <Grid.Column width={10}>
              <div className={styles.addPadding}>
                { register ? <h1>Sign Up</h1> : <h1>Sign In</h1>}
                <Form
                  className={styles.width}
                  onSubmit={signUp}
                  error
                  loading={mutationLoading}
                >
                  <Form.Field>
                    <label>Email</label>
                    <input
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      type="email"
                    />
                    {error.email ? (
                      <Message
                        error
                        content={error.email}
                      />
                    ) : null}
                  </Form.Field>
                  <Form.Field>
                    <label text="text">Password</label>
                    <input
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      required
                    />
                    {error.password ? (
                      <Message
                        error
                        content={error.password}
                      />
                    ) : null}
                  </Form.Field>
                  { register ? (
                    <Form.Field>
                      <label text="text">Confirm Password</label>
                      <input
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        type="password"
                        required
                      />
                      {error.confirmPassword ? (
                        <Message
                          error
                          content={error.confirmPassword}
                        />
                      ) : null}
                    </Form.Field>
                  ) : null }
                  <Button type="submit">
                    { register ? `SIGN UP` : `SIGN IN` }
                  </Button>
                </Form>
                { mutationLoading ? null : (
                  <>
                    <h5 color="blue">
                      <a href="/">Forgot Password?</a>
                    </h5>
                    <button
                      type="button"
                      onClick={() => setRegister(!register)}
                    >
                      { register
                        ? <h5 color="blue">Have an account? Login</h5>
                        : <h5 color="blue">New to Threadit? Create Account</h5>}
                    </button>
                  </>
                )}

              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Modal.Content>
    </Modal>
  );
};

export default Login;
