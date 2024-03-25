<script setup lang="ts">
  import { ref, toRef } from 'vue'
  import { Pipeline, usePipelines } from "@labmesh/kedro-graphql-viz.composables.use-pipelines"

  const props = defineProps<{
    modelValue: Pipeline
  }>()

  const modelValueLocalRef = toRef(props, "modelValue")

  const emit = defineEmits(["update:modelValue"])

  const items = ref([])
  const itemsPerPage = ref(10)
  const nextCursor = ref('')
  const cursors = ref([null,null])
  const currPage = ref(1)
  const loading = ref(true)
  const totalItems = ref(0)
  const name = ref('')
  const namesFilter = ref([])
  const filters = ref([])
  const filtersOrigin = ref(['name=', 'status=', 'tags['])
  const searchInput = ref('')
  const variables = ref({ limit: itemsPerPage, cursor: nextCursor, filter: searchInput})
  const headers = [
    { title: 'Id', align: 'start', sortable: false, key: 'id' },
    { title: 'Name', align: 'start', key: 'name' },
    { title: 'Tags', align: 'start', key: 'tags' },
    { title: 'Status', align: 'start', key: 'status' },
    { title: 'Data Catalog', align: 'start', key: 'index' },
  ]

 

  const { onResult, onError } = usePipelines(itemsPerPage.value, searchInput.value, nextCursor.value) 

  onResult(queryResult => {
    console.log(queryResult)
    if(queryResult.data){
      items.value = queryResult.data.pipelines.pipelines
      if (totalItems.value == 0){
        totalItems.value = queryResult.data.pipelines.pageMeta.count
      }
      loading.value = queryResult.loading
      if (!cursors.value.includes(queryResult.data.pipelines.pageMeta.nextCursor)){
        cursors.value.push(queryResult.data.pipelines.pageMeta.nextCursor)
      }
    }
  })

  onError(error => {
    console.log(error.graphQLErrors)
    console.log(error.networkError)
  })



  const indexedItems = computed(() => {
    
    return items.value.map((item, index) => ({
        index: index,
        ...item
      }))
  })


  function updateSearch(event){
    //console.log(event)
    filters.value = []
    filtersOrigin.value.forEach((x) => {
      if (x === "tags[" ){
        filters.value.push(x + event + ']')
      }
      else if(x === "status=" && event.indexOf("=") === -1){
        filters.value.push(x + event)
      }
      else if (x === "name=" && event.indexOf("=") === -1) {
        filters.value.push(x + event)
      }
    })
  }

  function updateSearchModelValue(event){
    searchInput.value =[]
    //console.log(searchInput.value)
    event.forEach((x) => {
      if (x.startsWith("name=")){
        const y = JSON.stringify({"name": x.split("name=")[1]})
        searchInput.value.push(y)
      }
      else if (x.startsWith("status=")){
        const y = JSON.stringify({"status": x.split("status=")[1].toUpperCase()})
        searchInput.value.push(y)
      }
      else if (x.startsWith("tags[")){
        const y = x.split("tags[")[1].split("]")[0].split("=")
        let z = JSON.stringify({"tags":{"key": y[0], "value": y[1]}})
        searchInput.value.push(z)
      }
    })
    //console.log(searchInput.value)
  }

  function getStatus (status) {
    if (status == "PENDING") return 'yellow'
    if (status == "FAILED") return 'red'
    if (status == "SUCCESS") return 'green'
    else return "orange"
  }

  function loadItems (page){
    nextCursor.value = cursors.value[page]
  }

  function updateModelValue (index) {
    //console.log(indexedItems.value[index].dataCatalog)
    //const catalog: DataCatalog = {
    //  datasets: indexedItems.value[index].dataCatalog,
    //  parameters: indexedItems.value[index].parameters
    //}
    emit('update:modelValue', indexedItems.value[index])
    
  }

</script>
<template>
  <v-data-table-server
    v-model:items-per-page="itemsPerPage"
    :headers="headers"
    :items-length="totalItems"
    :items="indexedItems"
    :loading="loading"
    item-value="name"
    @update:page="loadItems"
  >
     <template v-slot:top>
      <v-toolbar
        elevated
      >
        <v-toolbar-title>Runs</v-toolbar-title>
        <v-autocomplete
          label="Search"
          multiple
          no-filter
          clearable
          chips
          closable-chips
          :items="filters"
          @update:search="updateSearch"
          @update:modelValue="updateSearchModelValue"
        >
        </v-autocomplete>
        <v-spacer></v-spacer>
      </v-toolbar>
     </template>
     <template v-slot:item.tags="{ value }">
       <v-chip
        class="ma-2"
        label
        v-for="kv in value"
        >
          {{ kv.key }}={{ kv.value}}
       </v-chip>

     </template>
     <template v-slot:item.index="{ value }">
       <v-btn
       size="small"
       icon="mdi-file-document-multiple"
       @click="updateModelValue(value)">
       </v-btn>

     </template>
    <template v-slot:item.status="{ value }">
      <v-chip :color="getStatus(value)">
        {{ value }}
      </v-chip>
    </template>
  </v-data-table-server>
</template>
