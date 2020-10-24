import React, { FC } from 'react';
import { RouteComponentProps } from '@reach/router';
import { useQuery, NetworkStatus } from '@apollo/client';

import { PROFILES } from "../gql";
import Button from '@material-ui/core/Button';

const Profile: FC<RouteComponentProps> = () => {
    const { loading, error, data, refetch, networkStatus } = useQuery(
      PROFILES,
      {
          notifyOnNetworkStatusChange: true,
      },
    );

    if (networkStatus === NetworkStatus.refetch) return <div>Re-fetching!</div>;
    if (loading) return <div>Loading</div>;
    if (error) return <div>Error! <pre>{error}</pre></div>;

    return (
      <>
          <div>
              Profile page
              <Button onClick={() => refetch()}>Refetch</Button>
          </div>
          <pre>
              {JSON.stringify(data, null, 2)}
          </pre>
      </>
    );
};

export default Profile;
