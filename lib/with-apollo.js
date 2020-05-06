import withApollo from "next-with-apollo";
import ApolloClient, { InMemoryCache } from "apollo-boost";

export default withApollo(({ initialState, ctx }) => {
  return new ApolloClient({
    uri: process.env.URI,
    cache: new InMemoryCache().restore(initialState || {}),
    request: async (operation) => {
      const token = operation.getContext().accessToken;
      if (!operation.getContext().headers) {
        operation.setContext({
          headers: {
            authorization: token ? `Bearer ${token}` : ""
          }
        });
      }
    }
  });
});

