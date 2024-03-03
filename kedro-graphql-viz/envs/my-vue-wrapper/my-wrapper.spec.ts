import { render } from "@testing-library/vue";
import { BasicMyWrapper } from "./my-wrapper.composition";

it("should render with the correct text", () => {
  const { getByText } = render(BasicMyWrapper);
  const rendered = getByText(/Hello World/);
  expect(rendered).toBeTruthy();
});
