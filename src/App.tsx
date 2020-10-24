import React from 'react';
import { Router } from '@reach/router';
import { onError } from '@apollo/client/link/error';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import Feed from './pages/HomePage';
import Profile from './pages/Profile';
import Layout from './components/Layout';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import FeedList from "./components/FeedList";

import './assets/styles/App.css';

const link = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URL || '',
  cache: new InMemoryCache(),
  credentials: 'include',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Router>
          <Feed path="/">
            <FeedList path="/" />
          </Feed>
          <Profile path="profile" />
          <Login path="login" />
          <Register path="sign-up" />
          <ForgotPassword path="forgot-password" />
        </Router>
      </Layout>
    </ApolloProvider>
  );
}

export default App;
