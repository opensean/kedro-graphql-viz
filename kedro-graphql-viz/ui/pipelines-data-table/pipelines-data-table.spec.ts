import { render } from "@testing-library/vue";
import { graphql } from 'msw';
import { BasicPipelinesDataTable } from "./pipelines-data-table.composition";
import { setupServer } from 'msw/node';
import { aPipelines } from '@labmesh/kedro-graphql-viz.composables.use-pipelines';
import { it, expect } from 'vitest';



const server = setupServer(

  graphql.query('pipelines', (_, res, ctx) => {

    return res(

      ctx.data({

        pipelines: aPipelines()

      }),

    )

  })

)

it("should render with the correct text", () => {
  server.listen()
  const { getByText } = render(BasicPipelinesDataTable);
  expect(getByText).toBeTruthy()
});
