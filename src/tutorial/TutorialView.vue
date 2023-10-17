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

import { ButtonKind, ButtonShape, Color, TextSize } from "@/enums";
import ButtonView from "@/components/atoms/ButtonView.vue";
import markdown from "!!raw-loader!./markdown.md";

hljs.registerLanguage("html", hljsHtml);

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

const html = converter.makeHtml(markdown);
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

<style lang="scss">
@import "./github-markdown.css";
@import "./highlight.css";

pre {
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  background-color: #272822 !important;
  margin-bottom: 2rem;
}

.overview {
  display: flex;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}
</style>
