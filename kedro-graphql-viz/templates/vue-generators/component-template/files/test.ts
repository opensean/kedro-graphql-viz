import { ComponentContext } from '@teambit/generator';

export const testFile = (context: ComponentContext) => {
  const { name, namePascalCase: Name } = context;

  return {
    relativePath: `${name}.spec.ts`,
    content: `import { render } from "@testing-library/vue";
import { Basic${Name} } from "./${name}.composition";

it("should render with the correct text", () => {
  const { getByText } = render(Basic${Name});
  const rendered = getByText(/Hello World/);
  expect(rendered).toBeTruthy();
});
`,
  };
};
