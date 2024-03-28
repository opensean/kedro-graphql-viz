import { useUsePipelinesQuery } from './graphql';
import { provideApolloClient } from '@vue/apollo-composable';
import { createApolloClient } from '@labmesh/kedro-graphql-viz.clients.apollo-client';
import { ref, watchEffect, toValue } from 'vue'

export function usePipelines(
  limit: Number,
  filter: String,
  cursor: String, 
  uri: string = 'http://localhost:5000/graphql/'// Default URI provided
) {
  const result = ref(null)
  const loading = ref(null)
  const error = ref(null)

  const fetchData = () => {
    // reset state before fetching..
    result.value = null
    loading.value = null
    error.value = null

    const apolloClient = createApolloClient(uri);
    provideApolloClient(apolloClient);


    const { aResult, aLoading, aError }  = useUsePipelinesQuery({
         limit: limit,// value for 'limit'
         filter: filter,// value for 'filter'
         cursor: cursor// value for 'cursor'
    })

    result.value = aResult
    loading.value = aLoading
    error.value = aError

  }

  watchEffect(() => {
    fetchData()
  })
  // Create an ApolloClient with the provided URI or the default one
  //const apolloClient = createApolloClient(uri);
  //provideApolloClient(apolloClient);

  //const usePipelinesQueryResult = useUsePipelinesQuery({
  //  limit: limit,
  //  filter: filter,
  //  cursor: cursor
  //});

  //r0e0turn usePipelinesQueryResult;
  return { result, loading, error};
}
