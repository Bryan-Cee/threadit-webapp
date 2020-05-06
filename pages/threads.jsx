import React from "react";
import { useLazyQuery } from "@apollo/react-hooks";
import { Button } from "semantic-ui-react";
import { GET_COMMUNITIES } from "../gql";
import { useAuth0 } from "../auth/AuthController";

const Threads = () => {
  const { accessToken, loading: la } = useAuth0();
  const [getCommunities, { loading, data }] = useLazyQuery(GET_COMMUNITIES, {
    context: { accessToken }
  });

  return la ? <div>loading ...</div> : (
    <>
      <div>Threads are real</div>
      <hr />
      <Button onClick={getCommunities}>Get Data</Button>
      <hr />
      {loading ? <div>Loading...</div> : <pre>{JSON.stringify(data, null, 2)}</pre>}
    </>
  );
};

export default Threads;
