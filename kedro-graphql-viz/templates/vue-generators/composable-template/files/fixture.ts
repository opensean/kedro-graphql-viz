import { ComponentContext } from '@teambit/generator';

export const fixtureFile = (context: ComponentContext) => {
  const { name } = context;
  return {
    relativePath: `${name}-basic.fixture.vue`,
    content: `<script setup lang="ts">
</script>

<template>
    <h1>${name} fixture</h1>
</template>
`,
  };
};