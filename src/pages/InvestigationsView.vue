<template>
  <div>
    <TableView />
    <span>toto</span>
  </div>
</template>

<script lang="ts">
// Thirdparties imports
import { Options, Vue } from "vue-class-component";

// Local imports
import TableView from "@/components/organisms/TableView.vue";

// Options
@Options({
  components: {
    TableView,
  },
})

// Export
export default class InvestigationView extends Vue {}
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
