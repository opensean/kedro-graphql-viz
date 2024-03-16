import { ComponentContext } from '@teambit/generator';

export const docsFile = (context: ComponentContext) => {
  const { name, namePascalCase: Name } = context;

  return {
    relativePath: `${name}.docs.md`,
    content: `---
labels: ['vue', 'app']
description: A ${Name} Vue app.
---

A Vue app.

### App usage

\`\`\`bash
bit use ${name}
bit run ${name}
\`\`\`
`,
  };
};
