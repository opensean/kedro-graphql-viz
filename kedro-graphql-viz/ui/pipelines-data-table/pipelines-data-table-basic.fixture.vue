<script setup>
import PipelinesDataTable from "./pipelines-data-table.vue";
import { aPipelines } from "@labmesh/kedro-graphql-viz.composables.use-pipelines";

const pipelines = aPipelines()
const pipeline = pipelines["pipelines"][0];
console.log(pipelines)


</script>

<template>
  <PipelinesDataTable :pipeline="pipeline" />
</template>
