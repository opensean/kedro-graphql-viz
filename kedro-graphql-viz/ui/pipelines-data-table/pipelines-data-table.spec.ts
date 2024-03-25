import { render } from "@testing-library/vue";
import { BasicPipelinesDataTable } from "./pipelines-data-table.composition";

it("should render with the correct text", () => {
  const { getByText } = render(BasicPipelinesDataTable);
  const rendered = getByText('Data Catalog');
  expect(rendered).toBeTruthy();
});
