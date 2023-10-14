<template>
  <div>
    <TableView />
    <span>toto</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import TableView from "@/components/organisms/TableView.vue";

export default defineComponent({
  // Properties used to configure this component
  props: {},
  // Constant variables usable in `template` section
  data() {
    return {};
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
