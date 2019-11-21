import withApollo from "next-with-apollo";
import ApolloClient, { InMemoryCache } from "apollo-boost";
import { getNewToken } from "../helpers";

export default withApollo(({ initialState }) => new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache().restore(initialState || {}),
  onError: ({
    graphQLErrors, networkError, operation, forward
  }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        // handle errors differently based on its error code
        if (err.extensions.code === "UNAUTHENTICATED") {
          const { headers } = operation.getContext();
          operation.setContext({
            headers: {
              ...headers,
              authorization: getNewToken(),
            },
          });
          return forward(operation);
        }
        if (err.extensions.code === "INTERNAL_SERVER_ERROR") {
          return forward(operation);
        }
        if (err.extensions.code === "BAD_USER_INPUT") {
          console.log(err);
          return forward(operation);
        }
        if (err.extensions.code === "UNAUTHENTICATED") {
          console.log(err);
          return forward(operation);
        }
      }
    }
    if (networkError) {
      console.log(networkError)
    }
  },
}));
