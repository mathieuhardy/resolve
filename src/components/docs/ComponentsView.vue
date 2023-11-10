<!--
  =================================================================================================
  HTML
  TODO: only visible for non-production builds
  =================================================================================================
-->

<template>
  <div class="markdown-body">
    <VueMarkdown />
  </div>
</template>

<!--
  =================================================================================================
  SCRIPT
  =================================================================================================
-->

<script lang="ts">
import { defineComponent, h } from "vue";
import showdown from "showdown";
import showdownHighlight from "showdown-highlight";
import hljs from "highlight.js";
import hljsHtml from "highlight.js/lib/languages/xml";

import { Color, TextSize } from "@/enums";
import {
  Kind as ButtonKind,
  Shape as ButtonShape,
} from "@/components/atoms/ButtonView.vue";
import ButtonView from "@/components/atoms/ButtonView.vue";
import components from "./components.md";

hljs.registerLanguage("html", hljsHtml);

showdown.setOption("disableForced4SpacesIndentedSublists", true);

const converter = new showdown.Converter({
  customizedHeaderId: true,
  tables: true,

  extensions: [
    showdownHighlight({
      pre: false,
      auto_detection: true,
    }),
  ],
});

const html = converter.makeHtml(components);
hljs.highlight(html, { language: "xml" });

const VueMarkdown = h(
  defineComponent({
    template: `<div>${html}</div>`,
    data() {
      return { ButtonKind, ButtonShape, ButtonView, Color, TextSize };
    },
    components: { ButtonKind, ButtonShape, ButtonView, Color, TextSize },
  })
);

export default defineComponent({
  // ----------------------------------------------------------------------------------------------
  // Properties used to configure this component
  // ----------------------------------------------------------------------------------------------

  props: {},

  // ----------------------------------------------------------------------------------------------
  // Local read-write variables usable in `template` section
  // ----------------------------------------------------------------------------------------------

  data() {
    return {};
  },

  // ----------------------------------------------------------------------------------------------
  // Computed variables usable in `template` section
  // ----------------------------------------------------------------------------------------------

  computed: {},

  // ----------------------------------------------------------------------------------------------
  // Components usable in `template` section
  // ----------------------------------------------------------------------------------------------

  components: {
    VueMarkdown,
  },

  // ----------------------------------------------------------------------------------------------
  // Methods usable in  `template` section
  // ----------------------------------------------------------------------------------------------

  methods: {},
});
</script>

<!--
  =================================================================================================
  STYLE
  =================================================================================================
-->

<style lang="postcss" src="@/assets/theme/markdown.scss"></style>
<style lang="css" src="@/assets/theme/highlight.css"></style>
