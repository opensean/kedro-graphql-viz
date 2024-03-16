import { ComponentContext } from '@teambit/generator';

export const testFile = (context: ComponentContext) => {
  const { name, namePascalCase: Name } = context;

  return {
    relativePath: `${name}.spec.ts`,
    content: `import { render } from "@testing-library/vue";
import ${Name} from "./${name}.vue";

it("should render with the correct text", () => {
  const { getByText } = render(${Name});
  const rendered = getByText(/App/);
  expect(rendered).toBeTruthy();
});
`,
  };
};
