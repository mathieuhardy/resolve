<template>
  <div class="home"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ButtonKind, ButtonShape, Color, TextSize } from "@/enums";

export default defineComponent({
  // Properties used to configure this component
  props: {},
  // Constant variables usable in `template` section
  data() {
    return {
      ButtonKind,
      ButtonShape,
      Color,
      TextSize,
    };
  },
  // Computed variables usable in `template` section
  computed: {},
  // Components usable in `template` section
  components: {
  },
  // Methods usable in  `template` section
  methods: {},
});
</script>

<style lang="scss"></style>
