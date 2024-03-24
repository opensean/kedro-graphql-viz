import { useUsePipelinesQuery, Scalars } from './graphql';
import { provideApolloClient } from '@vue/apollo-composable';
import { createApolloClient } from '@labmesh/kedro-graphql-viz.clients.apollo-client';

export function usePipelines(
  limit: Number,
  filter: String,
  cursor: String, 
  uri: string = 'http://localhost:5000/graphql/' // Default URI provided
) {
  
  // Create an ApolloClient with the provided URI or the default one
  const apolloClient = createApolloClient(uri);
  provideApolloClient(apolloClient);

  const usePipelinesQueryResult = useUsePipelinesQuery({
    limit: limit,
    filter: filter,
    cursor: cursor
  });

  return usePipelinesQueryResult;
}
