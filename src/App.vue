<!--
  -------------------------------------------------------------------------------------------------
  HTML
  -------------------------------------------------------------------------------------------------
-->

<template>
  <NavBarView />
  <router-view /> <!-- TODO: remove -->
</template>

<!--
  -------------------------------------------------------------------------------------------------
  SCRIPT
  -------------------------------------------------------------------------------------------------
-->

<script lang="ts">
import { defineComponent } from "vue";

import NavBarView from "@/components/organisms/NavBarView.vue";

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
    NavBarView,
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $White;
  background-color: $DarkGrey;
  padding: 1rem;
  text-align: left;
}

* {
  color: $White;
  background-color: $DarkGrey;
}
</style>
