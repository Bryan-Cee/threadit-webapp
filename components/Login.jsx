import React, { useState, useContext, useEffect } from "react";
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
  const [registerResponse, setRegisterResponse] = useState(false);

  const mutation = register ? REGISTER : LOGIN;
  const [AuthMutation, { loading: mutationLoading }] = useMutation(mutation);
  const Auth = useContext(AuthContext);
  const onOpen = () => { setOpen(true); };
  const onClose = () => { setOpen(false); };

  const resetLoginState = () => {
    setError("");
    setEmail("");
    setPassword("");
    if (error) {
      setError("");
    }
  };
  const signUp = () => AuthMutation({ variables: { email, password } })
    .then(({ data }) => {
      if (data && data.register) {
        // Reset the login modal states
        resetLoginState();
        const verifiedText = localStorage.setItem("verified", data.register);
        setRegisterResponse(verifiedText);
        Auth.register(
          data.register
        );
      } else {
        const { token, user } = data.login;
        localStorage.setItem("token", token);
        localStorage.setItem("userId", user.userId);
        localStorage.setItem("email", user.email);
        localStorage.setItem("username", user.username);
        localStorage.removeItem("verified");

        // Reset the login modal states
        resetLoginState();
        setOpen(false);
        // Update the AuthContext
        Auth.login(
          data.login.user.userId,
          data.login.user.email,
          data.login.user.username
        );
        Auth.register(null);
      }
    })
    .catch((err) => {
      if (err && err.graphQLErrors) {
        err.graphQLErrors.map((e) => {
          if (e.extensions.userInputError) {
            setError(e.extensions.userInputError);
          }
          if (e.extensions.code === "UNAUTHENTICATED") {
            setError({ accountVerified: e.message });
          }
        });
      }
    });

  useEffect(() => {
    const verifiedText = localStorage.getItem("verified");
    setRegisterResponse(verifiedText);
  }, [registerResponse]);

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
              { registerResponse ? (
                <div className={styles.verify}>{registerResponse}</div>
              ) : (
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
                      {error.accountVerified ? (
                        <Message
                          error
                          content={error.accountVerified}
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
                      { register ? <h5>{" "}</h5> : (
                        <h5 color="blue">
                          <a href="/">Forgot Password?</a>
                        </h5>
                      )}
                      <button
                        type="button"
                        onClick={() => setRegister(!register)}
                      >
                        { register
                          ? <h5 color="blue">Have an account? Login</h5>
                          // eslint-disable-next-line max-len
                          : <h5 color="blue">New to Threadit? Create Account</h5>}
                      </button>
                    </>
                  )}

                </div>
              )}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Modal.Content>
    </Modal>
  );
};

export default Login;
