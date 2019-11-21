import React, { useEffect, useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import {
  Button, Container, Form, Message,
} from "semantic-ui-react";
import styles from "../styles/Register.scss";
import { REGISTER } from "../gql";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [SignUp] = useMutation(REGISTER);
  const signUp = () => SignUp({ variables: { email, password } })
    .then((data) => console.log(data))
    .catch((err) => console.log({ err }));

  return (
    <Container>
      <Form className={styles.width} onSubmit={signUp} error>
        <Form.Field>
          <label>Email</label>
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Message
            error
            header="Action Forbidden"
            content="You can only sign up for an account
             once with a given e-mail address."
          />
        </Form.Field>
        <Form.Field>
          <label text="text">Password</label>
          <input
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Field>
        <Button type="submit">SIGN UP</Button>
      </Form>
    </Container>
  );
};

export default Register;
