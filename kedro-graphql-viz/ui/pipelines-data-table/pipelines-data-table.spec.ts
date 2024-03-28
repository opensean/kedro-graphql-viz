import { render } from "@testing-library/vue";
import { BasicPipelinesDataTable } from "./pipelines-data-table.composition";
//import { setupServer } from 'msw/node';
//import { graphql, HttpResponse } from 'msw'
//
import { aPageMeta, aPipelines } from '@labmesh/kedro-graphql-viz.composables.use-pipelines';
import { afterEach, afterAll, beforeAll, describe, it, expect, vi } from 'vitest';

const mockResponse = {data: { pageMeta: aPageMeta(),
                              pipelines: aPipelines()
                            }
                    }

//const server = setupServer(
//  graphql.query('UsePipelines', ({ query, variables }) => {
//    console.log(query, variables) 
//    return HttpResponse.json(mockResponse)
//  })
//)



it("should render with the correct text", () => {
  //server.listen()
  const { getByText } = render(BasicPipelinesDataTable);
  //console.log(getByText) 
  expect(getByText).toBeTruthy()
})
