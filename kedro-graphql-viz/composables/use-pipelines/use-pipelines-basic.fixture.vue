<script setup lang="ts">
//import { aPipelines } from './codegen.mock';
import { usePipelines } from './use-pipelines';

//const pipelines  = aPipelines()

const { result, loading, error } = usePipelines(10, "", "", "http://localhost:5000/graphql/")

</script>

<template>
  {{ result }}
</template>
