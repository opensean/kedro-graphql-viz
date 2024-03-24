import { ok } from 'node:assert';
import { createApolloClient } from './apollo-client.js';

it('creates an ApolloClient instance', () => {
  const testUri = 'http://example.com/graphql';
  const client = createApolloClient(testUri);
  
  ok(client, 'ApolloClient instance should be created');
  
  ok(typeof client.query === 'function', 'ApolloClient instance should have a query method');
});
