import { ComponentContext } from '@teambit/generator';

export const sampleFile = (context: ComponentContext) => {
  const { name, namePascalCase: Name } = context;
  return {
    relativePath: `${name}-basic.fixture.vue`,
    content: `<script setup>
import ${Name} from "./${name}.vue";
</script>

<template>
  <${Name} title="Hello World" />
</template>
`,
  };
};
