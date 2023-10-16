<template>
  <div class="home">
    <!-- Buttons > Colors -->
    <div style="display: flex; flex-direction: row; margin-bottom: 1rem">
      <ButtonView
        v-bind:color="Color.None"
        v-bind:shape="ButtonShape.Square"
        v-bind:size="TextSize.Normal"
        >None</ButtonView
      >
      <ButtonView
        v-bind:color="Color.White"
        v-bind:shape="ButtonShape.Square"
        v-bind:size="TextSize.Normal"
        >White</ButtonView
      >
      <ButtonView
        v-bind:color="Color.Blue"
        v-bind:shape="ButtonShape.Square"
        v-bind:size="TextSize.Normal"
        >Blue</ButtonView
      >
      <ButtonView
        v-bind:color="Color.Green"
        v-bind:shape="ButtonShape.Square"
        v-bind:size="TextSize.Normal"
        >Green</ButtonView
      >
      <ButtonView
        v-bind:color="Color.Grey"
        v-bind:shape="ButtonShape.Square"
        v-bind:size="TextSize.Normal"
        >Grey</ButtonView
      >
      <ButtonView
        v-bind:color="Color.Red"
        v-bind:shape="ButtonShape.Square"
        v-bind:size="TextSize.Normal"
        >Red</ButtonView
      >
    </div>

    <!-- Buttons > Shapes -->
    <div style="display: flex; flex-direction: row; margin-bottom: 1rem">
      <ButtonView
        v-bind:color="Color.Blue"
        v-bind:shape="ButtonShape.Square"
        v-bind:size="TextSize.Normal"
        >Square</ButtonView
      >
      <ButtonView
        v-bind:color="Color.Blue"
        v-bind:shape="ButtonShape.Rounded"
        v-bind:size="TextSize.Normal"
        >Rounded</ButtonView
      >
      <ButtonView
        v-bind:color="Color.Blue"
        v-bind:shape="ButtonShape.Badge"
        v-bind:size="TextSize.Normal"
        >1</ButtonView
      >
      <ButtonView
        v-bind:color="Color.Blue"
        v-bind:shape="ButtonShape.Badge"
        v-bind:size="TextSize.Normal"
        >10</ButtonView
      >
      <ButtonView
        v-bind:color="Color.Blue"
        v-bind:shape="ButtonShape.Badge"
        v-bind:size="TextSize.Normal"
        >100</ButtonView
      >
      <ButtonView
        v-bind:color="Color.Blue"
        v-bind:shape="ButtonShape.Badge"
        v-bind:size="TextSize.Normal"
        >99+</ButtonView
      >
    </div>

    <!-- Buttons > Sizes -->
    <div style="display: flex; flex-direction: row; margin-bottom: 1rem">
      <ButtonView
        v-bind:color="Color.Green"
        v-bind:shape="ButtonShape.Rounded"
        v-bind:size="TextSize.XSmall"
        >x-small</ButtonView
      >
      <ButtonView
        v-bind:color="Color.Green"
        v-bind:shape="ButtonShape.Rounded"
        v-bind:size="TextSize.Small"
        >small</ButtonView
      >
      <ButtonView
        v-bind:color="Color.Green"
        v-bind:shape="ButtonShape.Rounded"
        v-bind:size="TextSize.Normal"
        >base</ButtonView
      >
      <ButtonView
        v-bind:color="Color.Green"
        v-bind:shape="ButtonShape.Rounded"
        v-bind:size="TextSize.Large"
        >large</ButtonView
      >
      <ButtonView
        v-bind:color="Color.Green"
        v-bind:shape="ButtonShape.Rounded"
        v-bind:size="TextSize.XLarge"
        >x-large</ButtonView
      >
    </div>

    <!-- Buttons > Clear -->
    <div style="display: flex; flex-direction: row; margin-bottom: 1rem">
      <ButtonView
        v-bind:color="Color.None"
        v-bind:shape="ButtonShape.Rounded"
        v-bind:kind="ButtonKind.Clear"
        >None</ButtonView
      >
      <ButtonView
        v-bind:color="Color.White"
        v-bind:shape="ButtonShape.Rounded"
        v-bind:kind="ButtonKind.Clear"
        >White</ButtonView
      >
      <ButtonView
        v-bind:color="Color.Blue"
        v-bind:shape="ButtonShape.Rounded"
        v-bind:kind="ButtonKind.Clear"
        >Blue</ButtonView
      >
      <ButtonView
        v-bind:color="Color.Green"
        v-bind:shape="ButtonShape.Rounded"
        v-bind:kind="ButtonKind.Clear"
        >Green</ButtonView
      >
      <ButtonView
        v-bind:color="Color.Grey"
        v-bind:shape="ButtonShape.Rounded"
        v-bind:kind="ButtonKind.Clear"
        >Grey</ButtonView
      >
      <ButtonView
        v-bind:color="Color.Red"
        v-bind:shape="ButtonShape.Rounded"
        v-bind:kind="ButtonKind.Clear"
        >Red</ButtonView
      >
    </div>

    <!-- Buttons > Toggles -->
    <div style="display: flex; flex-direction: row; margin-bottom: 1rem">
      <ButtonView
        v-bind:color="Color.None"
        v-bind:shape="ButtonShape.Rounded"
        v-bind:kind="ButtonKind.Toggle"
        >None</ButtonView
      >
      <ButtonView
        v-bind:color="Color.White"
        v-bind:shape="ButtonShape.Rounded"
        v-bind:kind="ButtonKind.Toggle"
        >White</ButtonView
      >
      <ButtonView
        v-bind:color="Color.Blue"
        v-bind:shape="ButtonShape.Rounded"
        v-bind:kind="ButtonKind.Toggle"
        >Blue</ButtonView
      >
      <ButtonView
        v-bind:color="Color.Green"
        v-bind:shape="ButtonShape.Rounded"
        v-bind:kind="ButtonKind.Toggle"
        >Green</ButtonView
      >
      <ButtonView
        v-bind:color="Color.Grey"
        v-bind:shape="ButtonShape.Rounded"
        v-bind:kind="ButtonKind.Toggle"
        >Grey</ButtonView
      >
      <ButtonView
        v-bind:color="Color.Red"
        v-bind:shape="ButtonShape.Rounded"
        v-bind:kind="ButtonKind.Toggle"
        >Red</ButtonView
      >
    </div>

    <!-- Buttons > Enabled/disabled -->
    <div style="display: flex; flex-direction: row; margin-bottom: 1rem">
      <ButtonView
        v-bind:color="Color.Red"
        v-bind:shape="ButtonShape.Rounded"
        v-bind:kind="ButtonKind.Filled"
        v-bind:disabled="false"
        >Enabled</ButtonView
      >
      <ButtonView
        v-bind:color="Color.Red"
        v-bind:shape="ButtonShape.Rounded"
        v-bind:kind="ButtonKind.Filled"
        v-bind:disabled="true"
        >Disabled</ButtonView
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ButtonView from "@/components/atoms/ButtonView.vue";
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
    ButtonView,
  },
  // Methods usable in  `template` section
  methods: {},
});
</script>

<style lang="scss"></style>
