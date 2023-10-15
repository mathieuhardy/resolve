<!--
  -------------------------------------------------------------------------------------------------
  HTML
  -------------------------------------------------------------------------------------------------
-->

<template>
  <div>
    <TableView v-bind:headers="headers" v-bind:data="data" />
    <span>toto</span>
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

// Table headers
const headers = ["ID", "Name", "Date", "Location"];

// Table data
import cases from "@/mock/cases.json";

let data = {};

if (process.env.NODE_ENV == "mock") {
  data = cases;
}

export default defineComponent({
  // Properties used to configure this component
  props: {},
  // Constant variables usable in `template` section
  data() {
    return {
      headers,
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

  span {
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
