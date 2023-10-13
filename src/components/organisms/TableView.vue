<template>
  <table class="searchable sortable">
    <thead>
      <tr>
        <th>Athlete</th>
        <th>Age</th>
        <th>Country</th>
        <th>Gold Medals</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>David Boudia</td>
        <td>23</td>
        <td>United States</td>
        <td>1</td>
      </tr>
      <tr>
        <td>Giga Chad</td>
        <td>38</td>
        <td>France</td>
        <td>9999</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class TableView extends Vue {}
</script>

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
