import React from 'react';
import { Router } from '@reach/router';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';

import Login from './pages/Login';
import Feed from './pages/HomePage';
import Profile from './pages/Profile';
import Register from './pages/Register';
import Layout from './components/Layout';
import FeedList from "./components/FeedList";
import ForgotPassword from './pages/ForgotPassword';

import './assets/styles/App.css';

const cache = new InMemoryCache();
const link = createHttpLink({
  uri: process.env.REACT_APP_API_URL || '',
  credentials: 'include',
});

const client = new ApolloClient({
  cache: cache,
  link: link,
  queryDeduplication: true,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
      errorPolicy: 'ignore',
    },
    query: {
      fetchPolicy: 'network-only',
      errorPolicy: 'all',
    },
    mutate: {
      errorPolicy: 'all',
    },
  }
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
