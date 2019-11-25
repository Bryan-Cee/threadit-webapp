import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Form, Checkbox, Button } from "semantic-ui-react";

const ResetPassword = ({ id, token }) => {
  console.log(id, token)
  return (
    <Form>
      <Form.Field>
        <label>First Name</label>
        <input placeholder="First Name" />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input placeholder="Last Name" />
      </Form.Field>
      <Form.Field>
        <Checkbox label="I agree to the Terms and Conditions" />
      </Form.Field>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

ResetPassword.propTypes = {
  token: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

ResetPassword.getInitProps = async ({ query }) => (
  { id: query.id, token: query.token }
);

export default ResetPassword;
