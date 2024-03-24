import fetch from 'cross-fetch';
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core';

export function createApolloClient(uri: string) {

  const httpLink = createHttpLink({
    uri,
    fetch,
  });

  const cache = new InMemoryCache();

  return new ApolloClient({
    link: httpLink,
    cache,
  });
}
