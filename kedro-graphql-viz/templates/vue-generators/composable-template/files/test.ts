import { ComponentContext } from '@teambit/generator';

export const testFile = (context: ComponentContext) => {
  const { name, namePascalCase: Name } = context;

  return {
    relativePath: `${name}.spec.ts`,
    content: `import { render } from "@testing-library/vue";
import { Basic${Name} } from "./${name}.composition";

import { useCounter } from "./${name}"

describe("useCounter", () => {
  it("should be defined", () => {
    expect(useCounter).toBeDefined();
  });

  it("should be update counter", () => {
    const { count, inc, dec, get, set, reset } = useCounter();

    expect(count.value).toBe(0);
    expect(get()).toBe(0);
    inc();
    expect(count.value).toBe(1);
    expect(get()).toBe(1);
    inc(2);
    expect(count.value).toBe(3);
    expect(get()).toBe(3);
    dec();
    expect(count.value).toBe(2);
    expect(get()).toBe(2);
    dec(5);
    expect(count.value).toBe(-3);
    expect(get()).toBe(-3);
    set(100);
    expect(count.value).toBe(100);
    expect(get()).toBe(100);
    reset();
    expect(count.value).toBe(0);
    expect(get()).toBe(0);
    reset(25);
    expect(count.value).toBe(25);
    expect(get()).toBe(25);
    reset();
    expect(count.value).toBe(25);
    expect(get()).toBe(25);
  });

  it("should be update limited counter", () => {
    const { count, inc, dec, get, set, reset } = useCounter(1, {
      min: -2,
      max: 15,
    });

    expect(count.value).toBe(1);
    expect(get()).toBe(1);
    inc(20);
    expect(count.value).toBe(15);
    expect(get()).toBe(15);
    dec(2);
    expect(count.value).toBe(13);
    expect(get()).toBe(13);
    dec();
    expect(count.value).toBe(12);
    expect(get()).toBe(12);
    dec(20);
    expect(count.value).toBe(-2);
    expect(get()).toBe(-2);
    reset();
    expect(count.value).toBe(1);
    expect(get()).toBe(1);
    set(20);
    expect(count.value).toBe(15);
    expect(get()).toBe(15);
    set(-10);
    expect(count.value).toBe(-2);
    expect(get()).toBe(-2);
    reset();
    expect(count.value).toBe(1);
    expect(get()).toBe(1);
    reset(20);
    expect(count.value).toBe(15);
    expect(get()).toBe(15);
    reset(-10);
    expect(count.value).toBe(-2);
    expect(get()).toBe(-2);
  });
});

describe("Basic${Name}", () => {
  it("should render", async () => {
    const { getByText, findByText } = render(Basic${Name});

    expect(getByText("Count: 0")).toBeTruthy();
    getByText("Increment (+5)").click();
    expect(await findByText("Count: 5")).toBeTruthy();
  });
});
`,
  };
};
