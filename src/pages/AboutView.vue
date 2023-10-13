<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="toggleDark()">Toggle Color Mode</button>
  </div>
</template>

<script lang="ts">
import { useDark, useToggle } from "@vueuse/core";
import { Options, Vue } from "vue-class-component";

@Options({
  methods: {
    toggleDark() {
      useToggle(useDark())();
    },
  },
})

export default class AboutView extends Vue {}
</script>

<style>
[theme="dark"] .about {
  background-color: #272727;
  color: white;
}

[theme="light"] .about {
  background-color: white;
  color: #272727;
}
</style>
