import React from "react";
import { useAuth0 } from "../auth/AuthController";
import { withLoginRequired } from "../components/LoginRequired";

const Profile = () => {
  const { user, loading } = useAuth0();
  return loading ? <div>loading ...</div> : (
    <>
      <h2>Profile</h2>
      <hr />
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <hr />
    </>
  );
};

export default withLoginRequired(Profile);
