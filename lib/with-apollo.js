import withApollo from "next-with-apollo";
import ApolloClient, { InMemoryCache } from "apollo-boost";

export default withApollo(({ initialState }) => {
  return new ApolloClient({
    uri: "http://localhost:4000/",
    cache: new InMemoryCache().restore(initialState || {}),
    request: async (operation) => {
      const token = await localStorage.getItem('token');
      operation.setContext({
        headers: {
          authorization: token ? `Bearer ${token}` : ''
        }
      });
    },
    onError: ({ graphQLErrors, networkError, operation, forward }) => {
      if (graphQLErrors) {
        return forward(operation);
      }
      if (networkError) {
        return forward(operation);
      }
    },
  });
});

