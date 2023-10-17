<!--
  -------------------------------------------------------------------------------------------------
  HTML
  -------------------------------------------------------------------------------------------------
-->

<template>
  <nav>
    <router-link
      v-for="menu in menus"
      v-bind:key="menu.name"
      :to="{ name: menu.component }"
      >{{ $t(menu.name) }}</router-link
    >
  </nav>
</template>

<!--
  -------------------------------------------------------------------------------------------------
  SCRIPT
  -------------------------------------------------------------------------------------------------
-->

<script lang="ts">
import { defineComponent } from "vue";

// List of menus to be displayed in navigation bar
const menus = [
  {
    name: "menus.home",
    component: "Home",
  },
  {
    name: "menus.cases",
    component: "Cases",
  },
  {
    name: "menus.tutorial",
    component: "Tutorial",
  },
];

export default defineComponent({
  // Properties used to configure this component
  props: {},
  // Constant variables usable in `template` section
  data() {
    return {
      menus,
    };
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

<style>
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
