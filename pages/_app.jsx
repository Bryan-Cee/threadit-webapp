import React from "react";
import App from "next/app";
import { ApolloProvider } from "@apollo/react-hooks";
import withApollo from "../lib/with-apollo";
import Layout from "../components/Layout";
import AuthController from "../components/AuthController";

class MyApp extends App {
  render() {
    const { Component, pageProps, apollo } = this.props;
    return (
      <ApolloProvider client={apollo}>
        <AuthController>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AuthController>
      </ApolloProvider>
    );
  }
}

export default withApollo(MyApp);
