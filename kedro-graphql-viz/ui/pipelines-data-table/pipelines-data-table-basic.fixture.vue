<script setup>
import PipelinesDataTable from "./pipelines-data-table.vue";
import { aPipelines } from "@labmesh/kedro-graphql-viz.composables.use-pipelines"
</script>

<template>
  <PipelinesDataTable pipelines="aPipelines()" />
</template>
