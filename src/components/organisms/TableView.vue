<!--
  =================================================================================================
  HTML
  TODO: move pagination to sub-component
  TODO: list of row-per-page selector
  TODO: jump to page area
  TODO: module ordering: "row-per-page-selector,pages,jump-to"
  TODO: move enums to dedicated file
  =================================================================================================
-->

<template>
  <!-- Table -->
  <table class="searchable sortable">
    <!-- Header -->
    <thead v-if="showHeader">
      <tr>
        <th v-for="column in columns" v-bind:key="column.name">
          {{ column.name }}
        </th>
      </tr>
    </thead>

    <!-- Rows -->
    <tbody>
      <!-- Rows to be displayed -->
      <tr v-for="row in visibleRows" v-bind:key="row.id">
        <td v-for="column in columns" v-bind:key="column.name">
          {{ row[column.bindTo] }}
        </td>
      </tr>

      <!-- Fill with empty rows if needed -->
      <tr
        v-for="index in (rowsPerPage || visibleRows.length) -
        visibleRows.length"
        v-bind:key="index"
      >
        <td v-for="column in columns" v-bind:key="column.name">&nbsp;</td>
      </tr>
    </tbody>

    <!-- Footer -->
    <tfoot v-if="showFooter">
      <tr>
        <th v-for="column in columns" v-bind:key="column.name">
          {{ column.name }}
        </th>
      </tr>
    </tfoot>
  </table>

  <!-- Table's pagination selectors -->
  <ul class="rows-per-page-selector" v-if="isRowsPerPageSelectorsVisible">
    <li
      v-for="rowsCount in rowsPerPageSelectors"
      v-bind:key="rowsCount"
      v-on:click="setRowsPerPage(rowsCount)"
    >
      {{ rowsCount }}
    </li>
    <li>All</li>
  </ul>

  <!-- Table's pagination -->
  <ul class="pagination" v-if="pagesCount">
    <!-- Previous button -->
    <li
      v-if="isHandleVisible"
      v-bind:class="{ disabled: isFirstPageSelected }"
      v-on:click="selectPreviousPage()"
    >
      «
    </li>

    <!-- First page -->
    <li
      v-if="isFirstPageVisible"
      v-bind:class="{ selected: isPageSelected(0) }"
      v-on:click="selectPage(0)"
    >
      1
    </li>

    <!-- Dots -->
    <li v-if="isGapAfterFirstPageVisible" class="dots">…</li>

    <!-- Visible pages -->
    <li
      v-for="index in visiblePagesIndexes"
      v-bind:key="index"
      v-bind:class="{ selected: isPageSelected(index) }"
      v-on:click="selectPage(index)"
    >
      {{ index + 1 }}
    </li>

    <!-- Dots -->
    <li v-if="isGapBeforeLastPageVisible" class="dots">…</li>

    <!-- Last page -->
    <li
      v-if="isLastPageVisible"
      v-bind:class="{ selected: isPageSelected(pagesCount - 1) }"
      v-on:click="selectPage(pagesCount - 1)"
    >
      {{ pagesCount }}
    </li>

    <!-- Next button -->
    <li
      v-if="isHandleVisible"
      v-bind:class="{ disabled: isLastPageSelected }"
      v-on:click="selectNextPage()"
    >
      »
    </li>
  </ul>
</template>

<!--
  =================================================================================================
  SCRIPT
  =================================================================================================
-->

<script lang="ts">
import { defineComponent } from "vue";

/**
 * Whether the table can be sorted on the column.
 */
export enum Sortable {
  /** The table cannot be sorted on the column */
  No = 0,
  /** The table can be sorted on the column */
  Yes = 1,
}

/**
 * Whether the search with operate on the column.
 */
export enum Searchable {
  /** Column is not searchable */
  No = 0,
  /** Column is searchable */
  Yes = 1,
}

/**
 * @interface IColumn
 *
 * @field {string} name is the string that will be displayed in HTML
 * @field {string} bindTo is the name of the key to match in data to insert the row value for this column
 * @field {Sortable} sortable is used to check if the table is sortable on this column
 * @field {Searchable} searchable is used to check if search should apply to this column
 */
export interface IColumn {
  name: string;
  bindTo: string;
  sortable: Sortable;
  searchable: Searchable;
}

export default defineComponent({
  // ----------------------------------------------------------------------------------------------
  // Properties used to configure this component
  // ----------------------------------------------------------------------------------------------

  props: {
    /**
     * The list of definitions of the table's columns.
     */
    columns: {
      required: true,
      type: Array,
    },

    /**
     * The data to be inserted in te rows of the table.
     */
    data: {
      required: true,
      type: Array,
    },

    /**
     * List of selectors used to change the number of rows per page to be displayed.
     *
     * Notes:
     *  - If there's no more than one entry, nothing will be displayed
     *  - A "All" entry will be automatically added
     */
    rowsPerPageSelectors: {
      required: false,
      type: Array,
    },

    /**
     * Whether the table's header should be shown.
     */
    showHeader: {
      required: false,
      type: Boolean,
    },

    /**
     * Whether the table's header should be shown.
     */
    showFooter: {
      required: false,
      type: Boolean,
    },

    /**
     * Number of rows per page (if not provided, the pagination is not displayed).
     */
    rowsPerPage: {
      required: false,
      type: Number,
    },

    /**
     * Max pages to be shown in pagination. This value doesn't count the first and last pages
     * that are always displayed.
     */
    maxPagesInPagination: {
      required: false,
      type: Number,
      default: 5,
    },

    /**
     * Whether to hide the `previous` and `next` handles.
     */
    hideHandles: {
      required: false,
      type: Boolean,
      default: false,
    },

    /**
     * Whether to hide the pages and keep only the handles (if not disabled).
     */
    hidePages: {
      required: false,
      type: Boolean,
      default: false,
    },
  },

  // ----------------------------------------------------------------------------------------------
  // Local read-write variables usable in `template` section
  // ----------------------------------------------------------------------------------------------

  data() {
    return {
      /**
       * The current selected page in the pagination.
       */
      currentPage: 0,
    };
  },

  // ----------------------------------------------------------------------------------------------
  // Computed variables usable in `template` section
  // ----------------------------------------------------------------------------------------------

  computed: {
    /**
     * Return the list of visible rows according to filters.
     */
    filteredRows() {
      return this.data;
    },

    /**
     * Return the list of visible rows according to filters, pagination and sorting.
     */
    visibleRows() {
      // First apply the filters
      let result = this.filteredRows;

      // Then apply sorting:
      result = this.sort(result);

      // And finally, apply pagination
      if (this.rowsPerPage) {
        result = result.slice(
          this.currentPage * this.rowsPerPage,
          this.currentPage * this.rowsPerPage + this.rowsPerPage
        );
      }

      return result;
    },

    /**
     * Total count of pages.
     */
    pagesCount() {
      return this.rowsPerPage
        ? Math.ceil(this.filteredRows.length / this.rowsPerPage)
        : 0;
    },

    /**
     * Count of visible pages.
     */
    visiblePagesCount() {
      const count = this.pagesCount - 2; // Remove the first and the last pages as there are always displayed

      return count > this.maxPagesInPagination
        ? this.maxPagesInPagination
        : count;
    },

    /**
     * Returns the indexes list of visible pages.
     */
    visiblePagesIndexes() {
      // Special empty case
      if (this.hidePages || this.pagesCount == 1) {
        return [];
      }

      // End of pages
      if (this.currentPage + this.visiblePagesCount >= this.pagesCount) {
        return (
          Array.from(Array(this.visiblePagesCount).keys())
            // .reverse()
            .map((x) => this.pagesCount - 1 - this.visiblePagesCount + x)
        );
      }

      // Begin of pages
      if (this.currentPage < this.maxPagesInPagination) {
        return Array.from(Array(this.visiblePagesCount).keys()).map(
          (x) => x + 1
        );
      }

      // Other pages
      return Array.from(Array(this.visiblePagesCount).keys()).map(
        (x) => x + 1 + (this.currentPage + 1 - this.maxPagesInPagination)
      );
    },

    /**
     * Checks if there's a gap between the first page and the first visible.
     */
    isGapAfterFirstPageVisible() {
      if (this.hidePages || this.pagesCount < 3) {
        return false;
      }

      const indexes = this.visiblePagesIndexes;

      if (indexes && indexes[0] != 1) {
        console.debug("there's a gap after the fist page");
        return true;
      }

      return false;
    },

    /**
     * Checks if there's a gap between the last visible and the last page.
     */
    isGapBeforeLastPageVisible() {
      if (this.hidePages || this.pagesCount < 3) {
        return false;
      }

      const indexes = this.visiblePagesIndexes;

      if (indexes && indexes[indexes.length - 1] != this.pagesCount - 2) {
        console.debug("there's a gap before the last page");
        return true;
      }

      return false;
    },

    /**
     * Returns true if the current page is the first one.
     */
    isFirstPageSelected() {
      return this.currentPage == 0;
    },

    /**
     * Returns true if the current page is the last one.
     */
    isLastPageSelected() {
      return this.currentPage == this.pagesCount - 1;
    },

    /**
     * Checks if the previous handle can be displayed.
     */
    isHandleVisible() {
      return !this.hideHandles && this.pagesCount > 1;
    },

    /**
     * Checks if the first page is visible.
     */
    isFirstPageVisible() {
      return !this.hidePages;
    },

    /**
     * Checks if the last page is visible.
     */
    isLastPageVisible() {
      return !this.hidePages && this.pagesCount > 1;
    },

    /**
     * Checks if the rows-per-page selectors can be displayed.
     */
    isRowsPerPageSelectorsVisible() {
      return this.rowsPerPageSelectors && this.rowsPerPageSelectors.length > 1;
    },
  },

  // ----------------------------------------------------------------------------------------------
  // Components usable in `template` section
  // ----------------------------------------------------------------------------------------------

  components: {},

  // ----------------------------------------------------------------------------------------------
  // Methods usable in  `template` section
  // ----------------------------------------------------------------------------------------------

  methods: {
    /**
     * Return the list rows sorted according to columns selections.
     *
     * @param data List of rows to be sorted
     * TODO: implement
     */
    sort(data: unknown[]) {
      return data;
    },

    /**
     * Selects a new page to be shown.
     *
     * @param index Index of the page to be shown (range must be [0, pagesCount])
     */
    selectPage(index: number): void {
      if (index < 0 || index > this.pagesCount) {
        console.error(
          `Page index is out of range: ${index} (range=[0, ${this.pagesCount}])`
        );

        return;
      }

      console.debug(`Select page ${index}`);

      this.currentPage = index;
    },

    /**
     * Selects the previous page (if any).
     */
    selectPreviousPage() {
      this.selectPage(this.currentPage - 1);
    },

    /**
     * Selects the next page (if any).
     */
    selectNextPage() {
      this.selectPage(this.currentPage + 1);
    },

    /**
     * Returns true if the given page is the current one.
     *
     * @param index Index of the page to check.
     */
    isPageSelected(index: number) {
      return index == this.currentPage;
    },

    // TODO:
    setRowsPerPage(count: number) {
      // this.rowsPerPage = count;
    },
  },
});
</script>

<!--
  =================================================================================================
  STYLE
  =================================================================================================
-->

<style lang="scss">
[theme="dark"] {
  button {
    margin-right: 10px;
  }

  table {
    background-color: $DarkGrey;
    color: $Light;
  }

  .rows-per-page-selector {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;

    li {
      margin: 3px;
      border: 1px solid black;
      padding: 5px;
    }
  }

  .pagination {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;

    li {
      margin: 3px;
      border: 1px solid black;
      padding: 5px;
    }

    li.dots {
      pointer-events: none;
      cursor: default;
    }

    li.disabled {
      background-color: $LightGrey !important;
      color: $DarkGrey !important;
      pointer-events: none;
      cursor: default;
    }

    li.selected {
      background-color: $DarkGrey !important;
      color: $Light !important;
      pointer-events: none;
      cursor: default;
    }

    li:not(.selected):not(.disabled) {
      background-color: $Light !important;
      color: $DarkGrey !important;
      cursor: pointer;
    }
  }
}

[theme="light"] {
  table {
    background-color: $Light;
    color: $DarkGrey;
  }
}
</style>
