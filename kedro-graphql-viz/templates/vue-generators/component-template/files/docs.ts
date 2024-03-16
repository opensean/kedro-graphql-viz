import { ComponentContext } from '@teambit/generator';

export const docsFile = (context: ComponentContext) => {
  const { name, namePascalCase: Name } = context;

  return {
    relativePath: `${name}.docs.md`,
    content: `---
labels: ['vue']
description: A ${Name} component.
---

A component that does something special and renders text in a div.

### Component usage

\`\`\`vue
<template>
  <${Name} title="Hello World!" />
</template>
\`\`\`
`,
  };
};
