import React, { useState } from "react";
import Router from "next/router";
import { useMutation } from "@apollo/react-hooks";
import {
  Button, Form, Container, Grid, Header, Message, Dimmer
} from "semantic-ui-react";
import styles from "../styles/Register.scss";
import { LOGIN } from "../gql";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [SignIn, { loading: mutationLoading }] = useMutation(LOGIN);

  const signUp = () => SignIn({ variables: { email, password } })
    .then(({ data }) => {
      localStorage.setItem("token", data.login.token);
      localStorage.setItem("email", data.login.user.email);
      localStorage.setItem("username", data.login.user.username);

      // Re-routing to the home page
      Router.replace("/");
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
    <Dimmer active>
      <Container textAlign="left" className={styles.containerBackground}>
        <Grid stretched>
          <Grid.Row className={styles.zeroPadding}>
            <Grid.Column width={6}>
              <div className={styles.side} />
            </Grid.Column>
            <Grid.Column width={10}>
              <div className={styles.addPadding}>
                <Header as="h1">Sign In</Header>
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
                  <Button type="submit">SIGN UP</Button>
                </Form>
                <Header as="h5" color="blue">
                  <a href="/">Forgot Password?</a>
                </Header>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Dimmer>
  );
};

export default Login;
