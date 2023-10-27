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
import { Color, TextSize } from "@/enums";

/**
 * List of available button shapes.
 */
export enum Shape {
  Square,
  Rounded,
  FullyRounded,
  Badge,
}

/**
 * Kind of the button (defines its behavior).
 */
export enum Kind {
  Clear,
  Filled,
  Toggle,
}

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
      type: Number as PropType<Shape>,
      default: Shape.Square,
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
      kind: Number as PropType<Kind>,
      default: Kind.Filled,
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

    /**
     * Whether the button should have a shadow.
     */
    shadow: {
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

        square: this.shape == Shape.Square,
        rounded: this.shape == Shape.Rounded,
        "fully-rounded": this.shape == Shape.FullyRounded,
        badge: this.shape == Shape.Badge,

        "text-xs": this.size == TextSize.XSmall,
        "text-sm": this.size == TextSize.Small,
        "text-normal": this.size == TextSize.Normal,
        "text-lg": this.size == TextSize.Large,
        "text-xl": this.size == TextSize.XLarge,

        clear: this.kind == Kind.Clear,
        filled: this.kind == Kind.Filled,
        toggle: this.kind == Kind.Toggle,

        checked: this.kind == Kind.Toggle && this.isChecked,

        disabled: this.disabled,

        shadow: this.shadow,
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
      if (this.kind == Kind.Toggle) {
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

  &.fully-rounded {
    border-radius: 0.95rem;
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
    // Shadow
    &.shadow {
      box-shadow: 2px 2px 3px rgba(255, 255, 255, 0.2);
    }

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
      transition: all 0.3s ease;

      &:hover:not(.disabled).checked {
        filter: brightness(120%);
      }

      &.transparent {
        @include clear($White, $White);

        &:hover,
        &.checked {
          @include filled($DarkGrey, $White);
        }
      }

      &.white {
        @include clear($White, $White);

        &:hover,
        &.checked {
          @include filled($DarkGrey, $White);
        }
      }

      &.blue {
        @include clear($White, $Blue);

        &:hover,
        &.checked {
          @include filled($White, $Blue);
        }
      }

      &.green {
        @include clear($White, $Green);

        &:hover,
        &.checked {
          @include filled($White, $Green);
        }
      }

      &.grey {
        @include clear($White, $Grey);

        &:hover,
        &.checked {
          @include filled($White, $Grey);
        }
      }

      &.red {
        @include clear($White, $Red);

        &:hover,
        &.checked {
          @include filled($White, $Red);
        }
      }
    }
  }
}

[theme="light"] {
  &.shadow {
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  }
}
</style>
