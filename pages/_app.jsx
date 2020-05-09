import React from "react";
import App from "next/app";
import Router from "next/router";
import { ApolloProvider } from "@apollo/react-hooks";
import Auth0Provider from "../auth/AuthController";
import withApollo from "../lib/with-apollo";
import Layout from "../components/Layout";

class MyApp extends App {
  /**
   * Where to send the user after they have signed in.
   */
  onRedirectCallback = async (appState) => {
    if (appState && appState.url) {
      await Router.push(appState.url, appState.as, { ...appState.options });
    }
  };

  render() {
    console.log("Inside _app render function.");
    const { Component, pageProps, apollo } = this.props;
    return (
      <ApolloProvider client={apollo}>
        <Auth0Provider
          domain={process.env.AUTH0_DOMAIN}
          client_id={process.env.AUTH0_CLIENT_ID}
          redirect_uri={process.env.AUTH0_CALLBACK_URL}
          issuer={process.env.AUTH0_DOMAIN}
          audience={process.env.AUTH0_AUDIENCE}
          scope={process.env.AUTH0_SCOPE}
          onRedirectCallback={this.onRedirectCallback}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Auth0Provider>
      </ApolloProvider>
    );
  }
}

export default withApollo(MyApp);
