<script setup lang="ts">
import { aPipelines } from './codegen.mock';

const pipelines  = aPipelines()
</script>

<template>
  {{ pipelines }}
</template>
