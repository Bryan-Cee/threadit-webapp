import React from 'react';
import './App.css';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import ExchangeRates from './Exchange';

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h2>My first Apollo app 🚀</h2>
        <div style={{ paddingLeft: "2em" }}>
          <ExchangeRates />
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
