<!--
  -------------------------------------------------------------------------------------------------
  HTML
  -------------------------------------------------------------------------------------------------
-->

<template>
  <div>
    <TableView
      v-bind:columns="columns"
      v-bind:data="data"
      v-bind:showHeader="true"
      v-bind:rowsPerPage=5
      v-bind:maxPagesInPagination=3
      v-bind:rowsPerPageSelectors="[10, 50]"
    />
  </div>
</template>

<!--
  -------------------------------------------------------------------------------------------------
  SCRIPT
  -------------------------------------------------------------------------------------------------
-->

<script lang="ts">
import { defineComponent } from "vue";

import TableView from "@/components/organisms/TableView.vue";

import {
  IColumn,
  Searchable,
  Sortable,
} from "@/components/organisms/TableView.vue";

// Columns
const columns: IColumn[] = [
  {
    name: "ID",
    bindTo: "id",
    sortable: Sortable.Yes,
    searchable: Searchable.No,
  },
  {
    name: "Name",
    bindTo: "name",
    sortable: Sortable.Yes,
    searchable: Searchable.Yes,
  },
  {
    name: "Date",
    bindTo: "date",
    sortable: Sortable.Yes,
    searchable: Searchable.Yes,
  },
  {
    name: "Location",
    bindTo: "location",
    sortable: Sortable.No,
    searchable: Searchable.Yes,
  },
];

// Table data
import cases from "@/mocks/cases.json";

let data = [];

if (import.meta.env.MODE == "mock") {
  data = cases;
}

export default defineComponent({
  // Properties used to configure this component
  props: {},
  // Constant variables usable in `template` section
  data() {
    return {
      columns,
      data,
    };
  },
  // Computed variables usable in `template` section
  computed: {},
  // Components usable in `template` section
  components: {
    TableView,
  },
  // Methods usable in  `template` section
  methods: {},
});
</script>

<!--
  -------------------------------------------------------------------------------------------------
  STYLE
  -------------------------------------------------------------------------------------------------
-->

<style lang="scss">
[theme="dark"] {
  table {
    background-color: $DarkGrey;
    color: $Light;
  }
}

[theme="light"] {
  table {
    background-color: $Light;
    color: $DarkGrey;
  }
}
</style>
