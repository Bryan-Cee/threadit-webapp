import React from "react";
import App from "next/app";
import { ApolloProvider } from "@apollo/react-hooks";
import withApollo from "../lib/with-apollo";
import Layout from "../components/Layout";

class MyApp extends App {
  state = {
    user: {},
  };

  render() {
    const { Component, pageProps, apollo } = this.props;
    return (
      <ApolloProvider client={apollo}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    );
  }
}

export default withApollo(MyApp);
