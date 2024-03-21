---
labels: ['vue']
description: A UsePipelines composable.
---

Basic counter with utility functions.

## Basic Usage

```ts
import { useCounter } from "labmesh.kedro-graphql-viz/composables/use-pipelines";

const { count, inc, dec, set, reset } = useCounter();
```

## Usage with options

```ts
import { useCounter } from "labmesh.kedro-graphql-viz/composables/use-pipelines";

const { count, inc, dec, set, reset } = useCounter(1, { min: 0, max: 16 });
```
