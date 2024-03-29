import { ComponentContext } from '@teambit/generator';

export const sampleFile = (context: ComponentContext) => {
  const { name } = context;
  return {
    relativePath: `${name}-basic.fixture.vue`,
    content: `<script setup lang="ts">
import { useCounter } from "./${name}";
const { count, inc, dec, set, reset } = useCounter();
</script>

<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click="inc()">
      Increment
    </button>
    <button @click="dec()">
      Decrement
    </button>
    <button @click="inc(5)">
      Increment (+5)
    </button>
    <button @click="dec(5)">
      Decrement (-5)
    </button>
    <button @click="set(100)">
      Set (100)
    </button>
    <button @click="reset()">
      Reset
    </button>
  </div>
</template>
`,
  };
};
