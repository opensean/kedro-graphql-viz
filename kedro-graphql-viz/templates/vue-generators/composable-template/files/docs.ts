import { ComponentContext } from '@teambit/generator';

export const docsFile = (context: ComponentContext) => {
  const { name, namePascalCase: Name, componentId } = context;

  return {
    relativePath: `${name}.docs.md`,
    content: `---
labels: ['vue']
description: A ${Name} composable.
---

Basic counter with utility functions.

## Basic Usage

\`\`\`ts
import { useCounter } from "${componentId}";

const { count, inc, dec, set, reset } = useCounter();
\`\`\`

## Usage with options

\`\`\`ts
import { useCounter } from "${componentId}";

const { count, inc, dec, set, reset } = useCounter(1, { min: 0, max: 16 });
\`\`\`
`,
  };
};
