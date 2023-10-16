<!--
  =================================================================================================
  HTML
  TODO: borders?
  TODO: notify method for toggles
  =================================================================================================
-->

<template>
  <button v-bind:class="classObject" v-on:click="onClick()">
    <slot></slot>
  </button>
</template>

<!--
  =================================================================================================
  SCRIPT
  =================================================================================================
-->

<script lang="ts">
import { defineComponent, PropType, reactive } from "vue";

import { ButtonKind, ButtonShape, Color, TextSize } from "@/enums";

export default defineComponent({
  // ----------------------------------------------------------------------------------------------
  // Properties used to configure this component
  // ----------------------------------------------------------------------------------------------

  props: {
    /**
     * The color of the button.
     */
    color: {
      required: false,
      type: Number as PropType<Color>,
      default: Color.None,
    },

    /**
     * Shape of the button.
     */
    shape: {
      required: false,
      type: Number as PropType<ButtonShape>,
      default: ButtonShape.Square,
    },

    /**
     * Size of the button.
     */
    size: {
      required: false,
      type: Number as PropType<TextSize>,
      default: TextSize.Normal,
    },

    /**
     * Kind of the button.
     */
    kind: {
      required: false,
      kind: Number as PropType<ButtonKind>,
      default: ButtonKind.Filled,
    },

    /**
     * Whether the toggle button should be checked.
     */
    checked: {
      required: false,
      type: Boolean,
      default: false,
    },

    /**
     * Whether the button is disabled.
     */
    disabled: {
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
      isChecked: this.checked,
    };
  },

  // ----------------------------------------------------------------------------------------------
  // Computed variables usable in `template` section
  // ----------------------------------------------------------------------------------------------

  computed: {
    /**
     * Return the class object to be set to the button.
     */
    classObject() {
      return reactive({
        transparent: this.color == Color.None,
        white: this.color == Color.White,
        blue: this.color == Color.Blue,
        green: this.color == Color.Green,
        grey: this.color == Color.Grey,
        red: this.color == Color.Red,

        square: this.shape == ButtonShape.Square,
        rounded: this.shape == ButtonShape.Rounded,
        badge: this.shape == ButtonShape.Badge,

        "text-xs": this.size == TextSize.XSmall,
        "text-sm": this.size == TextSize.Small,
        "text-base": this.size == TextSize.Normal,
        "text-lg": this.size == TextSize.Large,
        "text-xl": this.size == TextSize.XLarge,

        clear: this.kind == ButtonKind.Clear,
        filled: this.kind == ButtonKind.Filled,
        toggle: this.kind == ButtonKind.Toggle,

        checked: this.kind == ButtonKind.Toggle && this.isChecked,

        disabled: this.disabled,
      });
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
     * Callback called when the button is clicked.
     */
    onClick() {
      if (this.kind == ButtonKind.Toggle) {
        this.isChecked = !this.isChecked;
      }
    },
  },
});
</script>

<!--
  =================================================================================================
  STYLE
  =================================================================================================
-->

<style lang="scss" scoped>
// Common button styles
button {
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  padding-left: 0.3rem;
  padding-right: 0.3rem;
  height: 2em;
  cursor: pointer;

  &.rounded {
    border-radius: 0.4rem;
  }

  &.badge {
    border-radius: 50%;
    width: 2.5em;
    height: 2.5em;
  }

  &.disabled {
    cursor: not-allowed;
    filter: brightness(80%);
  }
}

// Color specific styles
[theme="dark"] {
  @mixin filled($fg, $bg) {
    color: $fg;
    background-color: $bg;
    border: 1px solid $bg;
  }

  @mixin clear($fg, $border-color) {
    color: $fg;
    border: 1px solid $border-color;
  }

  button {
    // Button filled
    &.filled {
      &:hover:not(.disabled) {
        filter: brightness(120%);
      }

      &.transparent {
        background-color: transparent;
      }

      &.white {
        @include filled($DarkGrey, $White);
      }

      &.blue {
        @include filled($DarkGrey, $Blue);
      }

      &.green {
        @include filled($White, $Green);
      }

      &.grey {
        @include filled($White, $Grey);
      }

      &.red {
        @include filled($White, $Red);
      }
    }

    // Clear button and toggle button that are filled when checked or hovered
    &.toggle,
    &.clear {
      background-color: transparent;

      &.transparent {
        @include clear($White, $White);
      }

      &.transparent:hover,
      &.transparent.checked {
        @include filled($DarkGrey, $White);
      }

      &.white {
        @include clear($White, $White);
      }

      &.white:hover,
      &.white.checked {
        @include filled($DarkGrey, $White);
      }

      &.blue {
        @include clear($White, $Blue);
      }

      &.blue:hover,
      &.blue.checked {
        @include filled($White, $Blue);
      }

      &.green {
        @include clear($White, $Green);
      }

      &.green:hover,
      &.green.checked {
        @include filled($White, $Green);
      }

      &.grey {
        @include clear($White, $Grey);
      }

      &.grey:hover,
      &.grey.checked {
        @include filled($White, $Grey);
      }

      &.red {
        @include clear($White, $Red);
      }

      &.red:hover,
      &.red.checked {
        @include filled($White, $Red);
      }
    }
  }
}

[theme="light"] {
}
</style>
