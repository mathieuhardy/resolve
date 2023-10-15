<!--
  -------------------------------------------------------------------------------------------------
  HTML
  -------------------------------------------------------------------------------------------------
-->

<template>
  <table class="searchable sortable">
    <thead>
      <tr>
        <th v-for="header in headers" v-bind:key="header">{{ header }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="_case in data" v-bind:key="_case.id">
        <td>{{ _case.id }}</td>
        <td>{{ _case.name }}</td>
        <td>{{ _case.date }}</td>
        <td>{{ _case.location }}</td>
      </tr>
    </tbody>
  </table>
</template>

<!--
  -------------------------------------------------------------------------------------------------
  SCRIPT
  -------------------------------------------------------------------------------------------------
-->

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  // Properties used to configure this component
  props: {
    headers: Array,
    data: Array,
  },
  // Constant variables usable in `template` section
  data() {
    return {};
  },
  // Computed variables usable in `template` section
  computed: {},
  // Components usable in `template` section
  components: {},
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
[theme="dark"] table {
  background-color: $DarkGrey;
  color: $Light;
}

[theme="light"] table {
  background-color: $Light;
  color: $DarkGrey;
}
</style>
